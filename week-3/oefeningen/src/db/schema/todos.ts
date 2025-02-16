import { boolean, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar(),
  completed: boolean().notNull().default(false),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp({ mode: "date" }).$onUpdate(() => new Date()),
});


export type Todo = typeof todos.$inferSelect;