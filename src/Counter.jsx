import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
const Counter = () => { 

    let[counter, setCounter] = useState(5);

function addValue() {
        setCounter(counter + 1);
        toast.info("Counter value is increased");
    }

function addValue2() {
    if(counter > 0){
    setCounter(counter - 1);
    toast.success("Counter value is decreased");
    }
    else{
        toast.error("Counter value is 0");
    }
}  return (
   <>
   <h1>Counter : {counter} </h1>
   <button onClick= {addValue}>Add</button><br/> <ToastContainer/>
   <button onClick= {addValue2}>Subtract</button> 
   </>
  )
}

export default Counter


