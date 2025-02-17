"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "./client";
import { todos } from "./schema";

export async function addTodo(formData: FormData) {
    try {
        const userInput = {
            title: formData.get("title") as string
        };
        await db.insert(todos).values(userInput);
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/");
}

export async function toggleTodo(formData: FormData) {
    try {
        const userInput = {
            id: formData.get("id") as string,
            completed: true
        };
        await db.update(todos).set(userInput).where(eq(todos.id, userInput.id));
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
    try {
        const userInput = {
            id: formData.get("id") as string
        };
        await db.delete(todos).where(eq(todos.id, userInput.id));
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/");
}

export async function deleteCompleted() {
    try {
        await db.delete(todos).where(eq(todos.completed, true));
    } catch (error) {
        console.error(error);
    }
    revalidatePath("/");
}