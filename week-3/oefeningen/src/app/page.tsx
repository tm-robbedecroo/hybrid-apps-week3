import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { addTodo, deleteCompleted, deleteTodo, toggleTodo } from "@/db/actions";
import { db } from "@/db/client";
import { todos } from "@/db/schema";
import { asc } from "drizzle-orm";
import { CheckIcon, PlusIcon, TrashIcon } from "lucide-react";

export default async function Component() {

  const items = await db.select().from(todos).orderBy(todos.completed, asc(todos));

  return (
    <main className="flex min-h-screen justify-center p-10">
      <div className="w-full max-w-lg space-y-4">
        <form className="flex items-center space-x-2" action={addTodo}>
          <Input type="text" placeholder="Add new task" name="title" className="flex-1" required />
          <Button type="submit" size="icon">
            <PlusIcon />
          </Button>
        </form>

        <div className="ov flex flex-col gap-y-4">
          {items.map(({ id, title, completed }) => (
            <form key={id}>
              <Card
                data-completed={completed}
                className="group flex items-center justify-between p-3 data-[completed=true]:bg-muted data-[completed=true]:line-through"
              >
                <Input type="hidden" name="id" value={id} />

                <CardDescription>{title}</CardDescription>

                <div className="flex gap-x-3">
                  {!completed && (
                    <Button size="icon" variant="outline" formAction={toggleTodo}>
                      <CheckIcon />
                    </Button>
                  )}

                  <Button size="icon" variant="destructive" formAction={deleteTodo}>
                    <TrashIcon />
                  </Button>
                </div>
              </Card>
            </form>
          ))}
        </div>

        <form action={deleteCompleted}>
          <Button variant="outline" className="w-full">
            Delete completed
          </Button>
        </form>
      </div>
    </main>
  );
}
