// Shared constants and small helpers for the opportunity form (components/OpportunityForm.js).
// Everything here is plain JavaScript with no React, so it can run in the browser or on the server.
//
// The option values below must match the enums in prisma/schema.prisma and the lists in
// lib/validateOpportunity.js. The server is the authority: it re-checks everything.

export const OPPORTUNITY_TYPE_OPTIONS = [
  { value: "job", label: "Job" },
  { value: "internship", label: "Internship" },
  { value: "fellowship", label: "Fellowship" },
  { value: "volunteer", label: "Volunteer" },
];

export const LIVED_EXPERIENCE_OPTIONS = [
  { value: "required", label: "Required" },
  { value: "preferred", label: "Preferred" },
  { value: "welcomed", label: "Welcomed" },
  { value: "relevant", label: "Relevant" },
];

export const STATUS_OPTIONS = [
  { value: "active", label: "Active" },
  { value: "filled", label: "Filled" },
  { value: "archived", label: "Archived" },
];

export const LOCATION_TYPE_OPTIONS = [
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" },
  { value: "onsite", label: "On-site" },
];

export const APPLY_METHOD_OPTIONS = [
  { value: "url", label: "Web link (URL)" },
  { value: "email", label: "Email address" },
];

// Same limits as the server (lib/validateOpportunity.js). The inputs use them as maxLength.
export const FIELD_LIMITS = {
  title: 200,
  organization: 200,
  description: 5000,
  compensation: 200,
  applyMethodValue: 500,
  city: 100,
  state: 100,
  address: 300,
};

// Names shown in the error summary, keyed by the field names the API uses.
export const FIELD_LABELS = {
  title: "Title",
  organization: "Organization",
  type: "Opportunity type",
  description: "Description",
  isPaid: "Paid or unpaid",
  compensation: "Compensation",
  livedExperienceRelevance: "Lived-experience relevance",
  locationType: "Work arrangement",
  city: "City",
  state: "State",
  address: "Address",
  applyMethodType: "Application method",
  applyMethodValue: "Application link or email",
  datePosted: "Date posted",
  deadline: "Application deadline",
  status: "Status",
};

// The form keeps every value as text (except datePosted, which starts as null), plus `paid` ("yes" / "no" / "" for not chosen yet)
// because a paid-or-unpaid choice is easiest to collect with radio buttons.
export function emptyOpportunityValues() {
  return {
    title: "",
    organization: "",
    type: "",
    description: "",
    paid: "",
    compensation: "",
    livedExperienceRelevance: "",
    locationType: "",
    city: "",
    state: "",
    address: "",
    applyMethodType: "",
    applyMethodValue: "",
    datePosted: null, // null = not touched yet; the form then shows today's date (see todayLocalDate)
    deadline: "",
    status: "active",
  };
}

// City, state and address only make sense when people go somewhere.
export function showsLocationFields(locationType) {
  return locationType === "hybrid" || locationType === "onsite";
}

// Today's date as the person using the form sees it, written "YYYY-MM-DD".
// Call it only in the browser, after the page has loaded.
export function todayLocalDate() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

// Turns the form's values into the flat JSON body POST /api/opportunities expects.
// Optional values that are empty are left out, and location details are left out unless
// the opportunity is hybrid or on-site (the API rejects them for remote opportunities).
export function toRequestBody(values) {
  const body = {
    title: values.title,
    organization: values.organization,
    description: values.description,
    type: values.type,
    livedExperienceRelevance: values.livedExperienceRelevance,
    status: values.status,
    locationType: values.locationType,
    compensation: values.compensation,
    datePosted: values.datePosted,
    applyMethodType: values.applyMethodType,
    applyMethodValue: values.applyMethodValue,
  };

  if (values.paid === "yes") body.isPaid = true;
  if (values.paid === "no") body.isPaid = false;

  if (showsLocationFields(values.locationType)) {
    body.city = values.city;
    body.state = values.state;
    if (values.address.trim() !== "") body.address = values.address;
  }

  if (values.deadline !== "") body.deadline = values.deadline;

  // Blank required fields are still sent (as ""), so the server can name them in its error messages.
  return body;
}

// The API reports problems as [{ field, message }, ...]. This groups them by field name.
export function groupErrorsByField(details) {
  const byField = {};
  if (!Array.isArray(details)) return byField;
  for (const item of details) {
    if (!item || typeof item.field !== "string" || typeof item.message !== "string") continue;
    byField[item.field] = byField[item.field] ? `${byField[item.field]} ${item.message}` : item.message;
  }
  return byField;
}
