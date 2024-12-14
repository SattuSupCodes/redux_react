import { useEffect } from "react";

const EffectComponent = () =>{
    useEffect(() => {
        console.log("I am mounting...")
    }, []);
}

export default EffectComponent;