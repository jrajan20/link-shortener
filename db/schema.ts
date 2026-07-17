import { integer, pgTable, varchar, text, timestamp, index } from "drizzle-orm/pg-core";

export const linksTable = pgTable(
  "links",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    slug: varchar({ length: 255 }).notNull().unique(),
    originalUrl: text().notNull(),
    userId: varchar({ length: 255 }).notNull(),
    createdAt: timestamp({ mode: "string", withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp({ mode: "string", withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("user_id_idx").on(table.userId)]
);