"use client";

// A brief note on the homepage after an opportunity was deleted ("Deleted “…”."), or after it turned out to be gone already.
// DeleteOpportunityButton leaves the note in sessionStorage just before it reloads the page; this component shows it
// once, and it goes away by itself after a few seconds or when "Dismiss" is clicked. A later refresh does not show it again.
// The title is shown as plain text by React, never as HTML.
import { useEffect, useSyncExternalStore } from "react";
import {
  dismissNotice,
  getNoticeSnapshot,
  getServerNoticeSnapshot,
  noticeMessage,
  subscribeToNotice,
} from "@/lib/deleteFlow";

const SHOW_FOR_MS = 8000;

export default function DeletedNotice() {
  const note = useSyncExternalStore(subscribeToNotice, getNoticeSnapshot, getServerNoticeSnapshot);

  useEffect(() => {
    if (!note) return undefined;
    const timer = setTimeout(dismissNotice, SHOW_FOR_MS);
    return () => clearTimeout(timer);
  }, [note]);

  if (!note) return null;
  const words = noticeMessage(note);

  return (
    <div className={`deleted-notice${note.kind === "gone" ? " is-gone" : ""}`} role="status">
      <p>
        {words.lead}
        <strong>&ldquo;{words.title}&rdquo;</strong>
        {words.tail}
      </p>
      <button type="button" className="button button-secondary button-small" onClick={dismissNotice} aria-label="Dismiss this message">
        Dismiss
      </button>
    </div>
  );
}
