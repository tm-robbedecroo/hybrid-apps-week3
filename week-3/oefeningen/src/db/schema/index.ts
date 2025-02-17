import * as t from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const todos = pgTable('todos', {
    id: t.uuid().primaryKey().defaultRandom(),
    title: t.varchar().notNull(),
    completed: t.boolean().default(false)
})