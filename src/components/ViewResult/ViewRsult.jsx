import { useRef, useState } from "react";

const ViewRsult = () => {
   const [list, setList] = useState([]);
   const [item, setItem] = useState("");
   const clearItem = useRef();


   const addItemInList = () => {
         list.push(item);
         setList([...list]);
         clearItem.current.value = "";
   }
            const removeItem = (index) =>{
      list.splice(index, 1);
      setList([...list]);
   }

   return (
      <div>
         <div className="item">
            <h2>To Do List</h2>
            <input type="text" onChange={(e)=>{setItem(e.target.value)}} ref={clearItem} />
            <button style={{margin:"5px", padding:"0 5px"}} onClick={()=>{addItemInList()}}>Add Item</button>
         </div>
         <div className="item-list">
            {
               list.length !==0?
               list.map((item, i)=>{
                  return (
                     <ul>
                        <li style={{display:"inline-block", width:"40%"}} key={i.toString()}>{item}</li>
                        <span style={{
                           background:"red", 
                           color:"white", 
                           padding:"5px", 
                           borderRadius:"50%"
                           }} onClick={()=>{removeItem(i)}}>X</span>
                     </ul>
                  )
               }):<span></span>
            }
         </div>
      </div>
   )
}
export default ViewRsult;