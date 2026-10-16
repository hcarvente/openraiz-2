// Shown when the opportunity being edited does not exist (see page.js next to this file).
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Opportunity not found | OpenRaiz",
};

export default function EditOpportunityNotFound() {
  return (
    <>
      <SiteHeader />
      <main className="page-main">
        <h1>Opportunity not found</h1>
        <p className="page-intro">
          We couldn&rsquo;t find that opportunity. It may have been removed, or the link may be incorrect.
        </p>
        <p>
          <Link className="button button-primary" href="/">
            Back to opportunities
          </Link>
        </p>
      </main>
    </>
  );
}
