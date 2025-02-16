import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckIcon, PlusIcon, TrashIcon } from "lucide-react";

const items = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
  {
    id: "3",
    title: "Task 3",
    completed: false,
  },
];

export default async function Component() {
  return (
    <main className="flex min-h-screen justify-center p-10">
      <div className="w-full max-w-lg space-y-4">
        <form className="flex items-center space-x-2">
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
                    <Button size="icon" variant="outline">
                      <CheckIcon />
                    </Button>
                  )}

                  <Button size="icon" variant="destructive">
                    <TrashIcon />
                  </Button>
                </div>
              </Card>
            </form>
          ))}
        </div>

        <form>
          <Button variant="outline" className="w-full">
            Delete completed
          </Button>
        </form>
      </div>
    </main>
  );
}
