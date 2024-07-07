import React from "react";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return (
    <>
      <div>App</div>
      <Button />
      <p>{count}</p>
    </>
  );
}
