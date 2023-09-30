import React, {useState} from "react";

function Tracker() {

const[tracker, setTracker] = useState(0);

const increment = () => {

setTracker(tracker+1)
}
return(
<>


<button onClick={increment}>Increment</button>





</>







);


}


export default Tracker;
