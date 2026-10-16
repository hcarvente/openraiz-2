// GET /api/opportunities: returns every opportunity (any status) as a flat JSON array.
// All database access happens here on the server; the browser only ever sees the JSON.
import { prisma } from "@/lib/prisma";
import { serializeOpportunity } from "@/lib/serializeOpportunity";

export async function GET() {
  try {
    const opportunities = await prisma.opportunity.findMany({
      // A fixed order keeps the list from reshuffling after edits: newest posting first.
      orderBy: [{ datePosted: "desc" }, { id: "asc" }],
    });
    return Response.json(opportunities.map(serializeOpportunity));
  } catch (error) {
    // Log only the error's name and code on the server; never send internals to the browser.
    console.error("GET /api/opportunities failed:", error?.name, error?.code);
    return Response.json({ error: "Could not load opportunities." }, { status: 500 });
  }
}
