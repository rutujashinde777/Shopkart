
import { useMemo, useState } from "react";

function Demo(){
    const[count, setCount]=useState(0);

    var result=useMemo(()=>{
        console.log("useMemo running....!");
        return count*10

    },[count] )

    const[count1,setCount1]=useState(10);

    return(
    <>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount((count)=>count+1)}>Increase</button>
        <h3>Result: {result}</h3>
        <br/>

        <h2>Count:{count1}</h2>
        <button onClick={()=>setCount1((count=>count+2))}>Increase</button>
        

        </>
    
    );

    
}
export default Demo;