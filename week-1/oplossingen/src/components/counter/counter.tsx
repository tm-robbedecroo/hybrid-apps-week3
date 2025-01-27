import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { PropsWithChildren } from "react";

/**
 * CounterContent
 */
export function CounterContent({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-10 w-full h-full min-h-screen justify-center items-center">
      {children}
    </div>
  );
}

/**
 * CounterTitle
 */
export function CounterTitle({ children }: PropsWithChildren) {
  return <h1 className="text-9xl font-bold">{children}</h1>;
}

/**
 * CounterButtons
 */
type CounterButtonsProps = {
  increment: () => void;
  decrement: () => void;
};

export function CounterButtons({ increment, decrement }: CounterButtonsProps) {
  return (
    <div className="flex gap-4">
      <Button size="icon" className="rounded-full" onClick={() => decrement()}>
        <ChevronDownIcon className="size-4" />
      </Button>

      <Button size="icon" className="rounded-full" onClick={() => increment()}>
        <ChevronUpIcon className="size-4" />
      </Button>
    </div>
  );
}
