import React, { useState } from "react";

const ForthPage = () => {
  const [count, setCount] = useState(1);
  console.log(count);

  function myfunc() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={myfunc}>Click here</button>
    </div>
  );
};

export default ForthPage;
