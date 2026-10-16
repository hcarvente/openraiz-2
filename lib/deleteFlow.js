// The logic behind the Delete button (components/DeleteOpportunityButton.js) and the message shown after a
// deletion (components/DeletedNotice.js). It is plain JavaScript with no React, so it can be tested without a browser.
//
// 1. The two-step confirmation is a small state machine:
//      idle --ask--> confirming --confirm--> deleting --failed--> confirming (with an error message)
//      confirming --cancel / escape--> idle
//    A DELETE request is only ever sent as a result of the "confirm" step, and nothing can be confirmed twice.
//
// 2. After the server answers, the homepage is reloaded. A short note ("Deleted ...") has to survive that reload,
//    so it is kept in sessionStorage (this tab only, gone when the tab closes) and shown once by DeletedNotice.

// ---------- 1. The confirmation state machine ----------

export const DELETE_ERROR_MESSAGE = "Something went wrong, and the opportunity was not deleted. Please try again.";

export function initialDeleteState() {
  return { phase: "idle", error: "" };
}

export function deleteReducer(state, action) {
  switch (action.type) {
    case "ask": // the Delete button was clicked: ask "are you sure?" (no request yet)
      return state.phase === "idle" ? { phase: "confirming", error: "" } : state;
    case "cancel": // the Cancel button was clicked
    case "escape": // the Escape key was pressed
      return state.phase === "confirming" ? { phase: "idle", error: "" } : state; // ignored while a request is running
    case "confirm": // "Yes, delete" was clicked: only possible from the confirmation step, and only once
      return state.phase === "confirming" ? { phase: "deleting", error: "" } : state;
    case "failed": // the request failed: back to the confirmation step so the person can retry or cancel
      return state.phase === "deleting" ? { phase: "confirming", error: DELETE_ERROR_MESSAGE } : state;
    default:
      return state;
  }
}

// Turns the HTTP status of the DELETE response into what the interface should do.
//   200 -> "deleted": it worked
//   404 -> "gone":    it no longer exists (someone else already deleted it): nothing to delete, refresh the list
//   else -> "failed": show a generic error
export function interpretDeleteStatus(status) {
  if (status === 200) return "deleted";
  if (status === 404) return "gone";
  return "failed";
}

// ---------- 2. The note shown after the reload ----------

const STORAGE_KEY = "openraiz:last-deletion";

// Called just before the page reloads. kind is "deleted" or "gone".
export function rememberDeletion(kind, title) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ kind, title }));
  } catch {
    // Storage can be blocked (for example in a private window). The deletion still worked; only the note is lost.
  }
}

// DeletedNotice reads the note through useSyncExternalStore, which needs a store with three parts:
// a snapshot (what is there now), a way to subscribe to changes, and a server snapshot (always "nothing").
let current; // undefined = not read yet, null = no note, or { kind, title }
const listeners = new Set();

function readNoteOnce() {
  if (current !== undefined) return current;
  current = null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      window.sessionStorage.removeItem(STORAGE_KEY); // shown once: a later refresh does not show it again
      const note = JSON.parse(raw);
      if (note && (note.kind === "deleted" || note.kind === "gone") && typeof note.title === "string") {
        current = { kind: note.kind, title: note.title.slice(0, 300) };
      }
    }
  } catch {
    // Unreadable or blocked storage: no note.
  }
  return current;
}

export function getNoticeSnapshot() {
  return readNoteOnce();
}

export function getServerNoticeSnapshot() {
  return null; // the server never knows about a note
}

export function subscribeToNotice(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function dismissNotice() {
  current = null;
  listeners.forEach((listener) => listener());
}

// The words shown in the note. The title is passed through untouched here and is only ever shown as plain text.
export function noticeMessage(note) {
  return note.kind === "deleted"
    ? { lead: "Deleted ", title: note.title, tail: "." }
    : { lead: "", title: note.title, tail: " no longer exists, so there was nothing to delete. The list has been refreshed." };
}
