import React, { useRef } from 'react';
const ViewRsult = () => {
   // How to change the useRef() initial value
   const counter = useRef(0);
   const incCounter = () => {
    console.log(counter.current++);
   }
    return (
       <div style={{padding:"50px"}}>
          <button onClick={()=> incCounter()}>Change Me</button>
       </div>
    );
};

export default ViewRsult;