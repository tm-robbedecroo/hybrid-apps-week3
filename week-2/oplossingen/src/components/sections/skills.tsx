import { Icons } from "@/components/icons";
import { Card } from "@/components/ui/card";

export function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col bg-muted px-8 py-24 md:px-12 lg:gap-y-12 lg:px-24 lg:py-32 xl:px-32 xl:py-48 2xl:px-48"
    >
      <h2 className="mb-12 w-fit font-mono text-2xl font-bold md:text-3xl xl:text-4xl">
        Mijn skills
      </h2>

      <div className="grid w-fit grid-cols-2 gap-4 self-center md:grid-cols-4">
        {[
          {
            icon: Icons.react,
            label: "React",
          },
          {
            icon: Icons.next,
            label: "Next.js",
          },
          {
            icon: Icons.node,
            label: "Node.js",
          },
          {
            icon: Icons.shadcn,
            label: "shadcn/ui",
          },
          {
            icon: Icons.tailwind,
            label: "Tailwind CSS",
          },
          {
            icon: Icons.postgres,
            label: "PostgreSQL",
          },
          {
            icon: Icons.docker,
            label: "Docker",
          },
          {
            icon: Icons.spring,
            label: "Spring Boot",
          },
        ].map(({ icon: Icon, label }, index) => (
          <Card
            key={index}
            className="group/item grid aspect-square w-40 place-items-center gap-2 overflow-hidden rounded-2xl transition-all duration-300 hover:border-primary md:w-48"
          >
            <Icon className="col-start-1 row-start-1 w-1/3 transition-all duration-300 group-hover/item:translate-y-64" />
            <p className="col-start-1 row-start-1 -translate-y-64 font-mono text-xl font-bold transition-all duration-300 group-hover/item:translate-y-0">
              {label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
