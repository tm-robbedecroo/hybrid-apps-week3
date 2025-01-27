"use client";

import { CounterButtons, CounterContent, CounterTitle } from "@/components/counter/counter";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type CounterProps = {
  initialCount?: number;
};

export function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState(initialCount ?? 0);

  const router = useRouter();
  const searchParams = useSearchParams();

  function updateCount(value: number) {
    setCount(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set("count", value.toString());
    router.replace(`?${params.toString()}`);
  }

  return (
    <CounterContent>
      <CounterTitle>{count}</CounterTitle>

      <CounterButtons
        increment={() => updateCount(count + 1)}
        decrement={() => updateCount(count - 1)}
      />
    </CounterContent>
  );
}
