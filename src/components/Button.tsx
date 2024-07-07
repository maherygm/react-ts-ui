import React from "react";

const Button = (): JSX.Element => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="w-fit bg-blue-500 rounded-lg p-2 text-white">Button</div>
  );
};

export default Button;
