import React, { forwardRef } from 'react';

const MyComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {/* Component content */}
    </div>
  );
});

// Now you can use MyComponent in another component or parent like this:
const ParentComponent = () => {
  const myComponentRef = React.createRef();

  return (
    <div>
      <MyComponent ref={myComponentRef} />
      {/* Access the underlying DOM node or React component instance using myComponentRef.current */}
    </div>
  );
};
