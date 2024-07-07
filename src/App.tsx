import { Button } from "@/@components/ui/button";
import { Calendar } from "@/@components/ui/calendar";
import React from "react";
export default function App(): React.ReactElement {
  const [counter, setCounter] = React.useState(0);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <div className="flex  flex-col items-center justify-center h-screen gap">
        <div className="flex flex gap-4 items-center justify-center ">
          <Button onClick={() => setCounter(counter + 1)}>+1</Button>

          <p>{counter}</p>
          <Button variant="secondary" onClick={() => setCounter(counter - 1)}>
            -1
          </Button>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border h-fit"
        />
      </div>
    </>
  );
}
