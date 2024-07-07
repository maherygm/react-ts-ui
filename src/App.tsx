import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

export type ButtonPros = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
};

const Button = ({ variant = "primary", className, ...props }: ButtonPros) => {
  return (
    <button
      className={clsx(
        {
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded":
            variant === "primary",
          "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default function App(): React.ReactElement {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <div className="flex flex gap-4 items-center justify-center h-screen">
        <Button onClick={() => setCounter(counter + 1)}>+1</Button>

        <p>{counter}</p>
        <Button variant="secondary" onClick={() => setCounter(counter - 1)}>
          -1
        </Button>
      </div>
    </>
  );
}
