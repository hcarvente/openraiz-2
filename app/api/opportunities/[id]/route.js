// GET /api/opportunities/[id]: returns one opportunity as flat JSON, or 404 if there is none.
// The [id] in the folder name is a dynamic segment: for /api/opportunities/abc123 the id is "abc123".
// All database access happens here on the server.
//
// SECURITY: there is no authentication yet. This route only reads, but any write handlers added here
// later (PATCH, DELETE) are for LOCAL DEVELOPMENT ONLY until sign-in and authorization exist.
import { prisma } from "@/lib/prisma";
import { serializeOpportunity } from "@/lib/serializeOpportunity";

// Real ids are letters, digits, hyphens and underscores (generated ids and the old readable ids).
// Anything else cannot be an existing id, so we answer "not found" without asking the database.
// (PostgreSQL cannot even search for text such as a null byte, and would raise an error.)
const VALID_ID = /^[A-Za-z0-9_-]{1,100}$/;

export async function GET(_request, { params }) {
  // In this version of Next.js, `params` is a Promise, so it has to be awaited.
  const { id } = await params;

  if (!VALID_ID.test(id)) {
    return Response.json({ error: "Opportunity not found." }, { status: 404 });
  }

  try {
    const opportunity = await prisma.opportunity.findUnique({ where: { id } });

    if (!opportunity) {
      // The message does not repeat the id back to the caller.
      return Response.json({ error: "Opportunity not found." }, { status: 404 });
    }

    return Response.json(serializeOpportunity(opportunity));
  } catch (error) {
    // Log only the error's name and code on the server; never send internals to the browser.
    console.error("GET /api/opportunities/[id] failed:", error?.name, error?.code);
    return Response.json({ error: "Could not load the opportunity." }, { status: 500 });
  }
}
