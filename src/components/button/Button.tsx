import React from "react";

type Props = {
  onclick: () => void;
  children: React.ReactNode;
};

const Button = ({ onclick, children, ...props }: Props) => {
  return (
    <button
      className="bg-blue-300 w-fit p-2 rounded-md cursor-pointer"
      {...props}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
