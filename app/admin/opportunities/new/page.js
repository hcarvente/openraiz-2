// The "Add Opportunity" page. This file is a Server Component; the form itself is a Client Component.
//
// LOCAL DEVELOPMENT ONLY: there is no sign-in yet, so this page and POST /api/opportunities
// must not be deployed publicly until authentication and authorization exist.
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import OpportunityForm from "@/components/OpportunityForm";

export const metadata = {
  title: "Add Opportunity | OpenRaiz",
};

export default function NewOpportunityPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <p className="back-link">
          <Link href="/">&larr; Back to opportunities</Link>
        </p>
        <h1>Add Opportunity</h1>
        <p className="page-intro">Fill in the details below to add a new opportunity to the directory.</p>
        <p className="notice-local" role="note">
          <strong>Local development only.</strong> This form has no sign-in yet, so it must not be deployed publicly.
        </p>
        <OpportunityForm />
      </main>
    </>
  );
}
