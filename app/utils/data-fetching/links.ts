import { eq } from "drizzle-orm";
import db from "@/db";
import { linksTable } from "@/db/schema";

/**
 * Fetch all links for a specific user
 * @param userId - The Clerk user ID
 * @returns Array of links owned by the user
 */
export async function getUserLinks(userId: string) {
  return await db
    .select()
    .from(linksTable)
    .where(eq(linksTable.userId, userId));
}
