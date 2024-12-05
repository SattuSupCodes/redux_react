import React, { useState } from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(12);
    const [value, setValue] = useState("number");

    return (
        <div>
           <p>
            Count Component - {count}
           </p>
           <button onClick={() => setCount(count + 1)}>increment</button>
           <button onClick={() => setCount(count - 1)}>decrement</button>
           <button onClick={()=> setValue(count%2==0 ? "True" : "False")}>odd/even</button>
           
        </div>
    );
};

export default CounterComponent;
// checking backdating