import React, { useState, useCallback } from 'react';

const ChildComponent = ({ onClick }) => {
  console.log("Rendering ChildComponent...");
  return (
    <button onClick={onClick}>Click me</button>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoized callback function using useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means this callback doesn't depend on any prop or state
  
  console.log("Rendering ParentComponent...");

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
