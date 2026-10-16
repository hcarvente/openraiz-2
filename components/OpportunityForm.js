"use client";

// The opportunity form. It is a Client Component because it needs to react to typing and
// clicking in the browser. It never touches the database: it sends the values as JSON to
// POST /api/opportunities, and the server does all the validating and saving.
//
// LOCAL DEVELOPMENT ONLY: there is no sign-in yet, so this form must not be deployed publicly.
//
// Built to be reused for editing later: `initialValues` fills the form, and the place where the
// request is sent (see handleSubmit) is the only part that will differ for an edit.
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  APPLY_METHOD_OPTIONS,
  FIELD_LABELS,
  FIELD_LIMITS,
  LIVED_EXPERIENCE_OPTIONS,
  LOCATION_TYPE_OPTIONS,
  OPPORTUNITY_TYPE_OPTIONS,
  STATUS_OPTIONS,
  emptyOpportunityValues,
  groupErrorsByField,
  showsLocationFields,
  todayLocalDate,
  toRequestBody,
} from "@/lib/opportunityOptions";

// One labelled text box, select or text area, with its error message underneath.
function Field({ name, label, required, hint, error, wide, children }) {
  const hintId = `${name}-hint`;
  const errorId = `${name}-error`;
  return (
    <div className={`field${wide ? " field-wide" : ""}${error ? " has-error" : ""}`}>
      <label htmlFor={name}>
        {label}
        {required ? (
          <span className="required-mark" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children({
        id: name,
        name,
        required,
        "aria-invalid": error ? "true" : undefined,
        "aria-describedby": [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") || undefined,
      })}
      {hint ? (
        <p className="field-hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="field-error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

// Today's date in the browser. On the server (before the page reaches the browser) it is "", and React
// switches to the real date right after the page loads, without a mismatch.
const subscribeToNothing = () => () => {};
const getServerToday = () => "";

export default function OpportunityForm({ initialValues, submitLabel = "Save Opportunity", successRedirectTo = "/" }) {
  const [values, setValues] = useState({ ...emptyOpportunityValues(), ...initialValues });
  const [fieldErrors, setFieldErrors] = useState({}); // { fieldName: "message" } from the server
  const [formError, setFormError] = useState(""); // a general message shown at the top
  const [isSubmitting, setIsSubmitting] = useState(false);
  const summaryRef = useRef(null);

  // "Date posted" shows today's date (the visitor's own calendar day) until they pick another one.
  // While values.datePosted is null they have not touched it.
  const today = useSyncExternalStore(subscribeToNothing, todayLocalDate, getServerToday);
  const datePostedValue = values.datePosted ?? today;

  // When a message appears, move focus to it so keyboard and screen-reader users notice it.
  useEffect(() => {
    if (formError && summaryRef.current) summaryRef.current.focus();
  }, [formError]);

  function setValue(name, value) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  const bind = (name) => ({ value: values[name], onChange: (event) => setValue(name, event.target.value) });

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return; // a second click or Enter press while saving does nothing

    setIsSubmitting(true);
    setFormError("");
    setFieldErrors({});

    try {
      // For an edit, this is the part that would change (PATCH /api/opportunities/[id]).
      const response = await fetch("/api/opportunities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toRequestBody({ ...values, datePosted: datePostedValue })),
      });

      if (response.status === 201) {
        // Saved. A full page load makes the server read the database again, so the new
        // opportunity is on the homepage. The button stays disabled while the browser navigates.
        window.location.assign(successRedirectTo);
        return;
      }

      const data = await response.json().catch(() => null);
      if (response.status === 400 && data && Array.isArray(data.details)) {
        setFieldErrors(groupErrorsByField(data.details));
        setFormError("Please fix the problems below. Nothing has been saved yet.");
      } else if (response.status === 400 && data && typeof data.error === "string") {
        setFormError(data.error);
      } else {
        setFormError("Something went wrong on our end, and the opportunity was not saved. Please try again.");
      }
    } catch {
      setFormError("We couldn't reach the server, and the opportunity was not saved. Please try again.");
    }
    setIsSubmitting(false);
  }

  const showLocation = showsLocationFields(values.locationType);
  // Problems for fields that are not on screen (for example a hidden location field) still get listed.
  const errorEntries = Object.entries(fieldErrors);

  return (
    <form className="opportunity-form" onSubmit={handleSubmit}>
      {formError ? (
        <div className="form-summary" role="alert" tabIndex={-1} ref={summaryRef}>
          <p>{formError}</p>
          {errorEntries.length > 0 ? (
            <ul>
              {errorEntries.map(([field, message]) => (
                <li key={field}>
                  <strong>{FIELD_LABELS[field] ?? field}:</strong> {message}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      <p className="form-note">
        Fields marked <span className="required-mark">*</span> are required.
      </p>

      <section className="form-section" aria-labelledby="section-details">
        <h2 id="section-details">Opportunity details</h2>
        <div className="form-grid">
          <Field name="title" label="Title" required error={fieldErrors.title}>
            {(p) => (
              <input type="text" {...p} {...bind("title")} maxLength={FIELD_LIMITS.title} placeholder="e.g. Youth Leadership Fellow" />
            )}
          </Field>

          <Field name="organization" label="Organization" required error={fieldErrors.organization}>
            {(p) => (
              <input
                type="text"
                {...p}
                {...bind("organization")}
                maxLength={FIELD_LIMITS.organization}
                placeholder="e.g. Community Foundation"
              />
            )}
          </Field>

          <Field name="type" label="Opportunity type" required error={fieldErrors.type}>
            {(p) => (
              <select {...p} {...bind("type")}>
                <option value="">Select type</option>
                {OPPORTUNITY_TYPE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            )}
          </Field>

          <Field
            name="livedExperienceRelevance"
            label="Lived-experience relevance"
            required
            hint="How much this opportunity values lived experience."
            error={fieldErrors.livedExperienceRelevance}
          >
            {(p) => (
              <select {...p} {...bind("livedExperienceRelevance")}>
                <option value="">Select relevance</option>
                {LIVED_EXPERIENCE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            )}
          </Field>

          <div className={`field${fieldErrors.isPaid ? " has-error" : ""}`}>
            <fieldset
              className="radio-group"
              aria-describedby={fieldErrors.isPaid ? "isPaid-error" : undefined}
              aria-invalid={fieldErrors.isPaid ? "true" : undefined}
            >
              <legend>
                Paid or unpaid
                <span className="required-mark" aria-hidden="true">
                  {" "}
                  *
                </span>
              </legend>
              <label className="radio-option">
                <input type="radio" name="paid" value="yes" required checked={values.paid === "yes"} onChange={() => setValue("paid", "yes")} />
                Paid
              </label>
              <label className="radio-option">
                <input type="radio" name="paid" value="no" required checked={values.paid === "no"} onChange={() => setValue("paid", "no")} />
                Unpaid
              </label>
            </fieldset>
            {fieldErrors.isPaid ? (
              <p className="field-error" id="isPaid-error">
                {fieldErrors.isPaid}
              </p>
            ) : null}
          </div>

          <Field
            name="compensation"
            label="Compensation"
            required
            hint='Shown on the card, e.g. "Paid, $25/hr" or "Unpaid".'
            error={fieldErrors.compensation}
          >
            {(p) => (
              <input
                type="text"
                {...p}
                {...bind("compensation")}
                maxLength={FIELD_LIMITS.compensation}
                placeholder="e.g. Paid, $25/hr"
              />
            )}
          </Field>

          <Field name="description" label="Description" required wide error={fieldErrors.description}>
            {(p) => (
              <textarea
                rows={5}
                {...p}
                {...bind("description")}
                maxLength={FIELD_LIMITS.description}
                placeholder="Describe the opportunity in a few plain-language sentences."
              />
            )}
          </Field>
        </div>
      </section>

      <section className="form-section" aria-labelledby="section-location">
        <h2 id="section-location">Location &amp; application</h2>
        <div className="form-grid">
          <Field name="locationType" label="Work arrangement" required wide={!showLocation} error={fieldErrors.locationType}>
            {(p) => (
              <select {...p} {...bind("locationType")}>
                <option value="">Select arrangement</option>
                {LOCATION_TYPE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            )}
          </Field>

          {showLocation ? (
            <>
              <Field name="city" label="City" required error={fieldErrors.city}>
                {(p) => <input type="text" {...p} {...bind("city")} maxLength={FIELD_LIMITS.city} placeholder="e.g. Oakland" />}
              </Field>

              <Field name="state" label="State" required error={fieldErrors.state}>
                {(p) => <input type="text" {...p} {...bind("state")} maxLength={FIELD_LIMITS.state} placeholder="e.g. CA" />}
              </Field>

              <Field name="address" label="Address (optional)" wide error={fieldErrors.address}>
                {(p) => (
                  <input
                    type="text"
                    {...p}
                    {...bind("address")}
                    maxLength={FIELD_LIMITS.address}
                    placeholder="Street address, if there is a physical location"
                  />
                )}
              </Field>
            </>
          ) : null}

          <Field name="applyMethodType" label="Application method" required error={fieldErrors.applyMethodType}>
            {(p) => (
              <select {...p} {...bind("applyMethodType")}>
                <option value="">Select method</option>
                {APPLY_METHOD_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            )}
          </Field>

          <Field
            name="applyMethodValue"
            label="Application link or email address"
            required
            error={fieldErrors.applyMethodValue}
          >
            {(p) => (
              <input
                type="text"
                {...p}
                {...bind("applyMethodValue")}
                maxLength={FIELD_LIMITS.applyMethodValue}
                placeholder={values.applyMethodType === "email" ? "e.g. jobs@example.org" : "e.g. https://example.org/apply"}
              />
            )}
          </Field>
        </div>
      </section>

      <section className="form-section" aria-labelledby="section-dates">
        <h2 id="section-dates">Dates &amp; status</h2>
        <div className="form-grid">
          <Field name="datePosted" label="Date posted" required error={fieldErrors.datePosted}>
            {(p) => <input type="date" {...p} value={datePostedValue} onChange={(event) => setValue("datePosted", event.target.value)} />}
          </Field>

          <Field
            name="deadline"
            label="Application deadline (optional)"
            hint="Leave blank for a rolling opportunity with no deadline."
            error={fieldErrors.deadline}
          >
            {(p) => <input type="date" {...p} {...bind("deadline")} />}
          </Field>

          <Field name="status" label="Status" error={fieldErrors.status}>
            {(p) => (
              <select {...p} {...bind("status")}>
                {STATUS_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            )}
          </Field>
        </div>
      </section>

      <div className="form-actions">
        <Link className="button button-secondary" href={successRedirectTo}>
          Cancel
        </Link>
        <button className="button button-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
