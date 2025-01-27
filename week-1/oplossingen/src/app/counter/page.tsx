import { Counter } from "./_components/counter";

type CounterPageProps = {
  searchParams: Promise<{ count: number }>;
};

export default async function CounterPage({ searchParams }: CounterPageProps) {
  const { count } = await searchParams;

  return <Counter initialCount={Number(count)} />;
}
