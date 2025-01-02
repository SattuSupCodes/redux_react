import React, { useState } from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(12);
    const [value, setValue] = useState("number");

    return (
        <div>
           <p>
            Count Component - {count}
           </p>
           <h1>Number is {count%2===0 ? "Even" : "Odd"}</h1>
           <button onClick={() => setCount(count + 1)}>increment</button>
           <button onClick={() => setCount(count - 1)}>decrement</button>
           {/* <button onClick={()=> setValue()}>odd/even</button> */}
           
        </div>
    ); 
};

export default CounterComponent;
// i'm rewatching marvel movies in their correct order rn hehehe