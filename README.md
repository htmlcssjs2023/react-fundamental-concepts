# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Functional component 
```JavaScript
const Home = () => {
    return (
        <div className=''>
           This is the functional component
        </div>
    );
};
export default Home;
```
- Where you can write JavaScript code.
- Easy to read and write
- Faster render 
- Allow react Hooks
- Not require "this" keyword

### JSX 
- Syntax Extension for the JavaScript
- It allow to write JavaScript like HTML pattern.
- JSX is a preporocessor that's HTML pattern code convert into plain JavaScript code
- That's why easy to dynamically generate contents.
- It can improve code readability and maintainability for the developer
```JavaScript
    const fullName = "Md Abdul Halim";
    <div>
        <h2>Full Name: {fullName} </h2>
    </div>
```

### JSX Convension
- It return single parent element
- Implement JavaScript directly in JSX
- Tags must have close tag.
- Class name should be className="" instead of class=""
- All html attribute must be camelCase.
- inline style={{}}

### JSX inline conditional rendering.
- We will use ternary operator of JavaScript.
```JavaScript
    const Home = () => {
     const gender = "Male";
    return (
        <div>
           {
            gender === "Male"? 
            <h3>You can access the male class room</h3>:
            <h2>You are not male</h2>
           }
        </div>
    );
};
export default Home;
```
- If the condition is true then return heading3
- If the condition is false then return heading2
- We can write above code in following pattern
```JavaScript
    if(gender === "Male"){
        return <h3>You can access the male class room</h3>
    }
    else{
        <h2>You are not male</h2>
    }
```

### Looping inside JSX
- Looping array
```JavaScript
const Home = () => {
     const fruits = ["Apple","Banana","Orange","Lemon","Cocunut"];
    return (
        <div style={{padding:"50px"}}>
            <h2>List Of fruits</h2>
           <ul>
            {
                fruits.map(fruit => <li>{fruit} </li>) 
            }
           </ul>
        </div>
    );
};
export default Home;
```
### Why use map in JSX?
### Conditional Rendaring using Switch statement of JavaScript.
```JavaScript
const Login = () => {
    const user = true;
    switch(user){
        case true:
            return <div>
                <h2>Welcome to our application</h2>
            </div>
        case false:
            return <h3>You're not valid user !</h3>;
        default:
            return <h3>Try Again</h3> 
    }
};
export default Login;
```
- Using switch() we beign able to apply multiple condition.

### Conditional Rendering using logical &&
- If you want can use handler function 
```JavaScript
    const Logout = () => {
    const user = "loggedIn";
    return (
        <div>
            {
                user&&
                <div>
                    <h2>Access</h2>
                </div>
            }
        </div>
    );
};
export default Logout;
```
- If condition is true the execute block of code.

### Conditional rendering Immidiately invoke function.
- Syntax { (
    ()=>{}
    )() }
```JavaScript
const Result = () => {
    const mark= 70;
    return (
        <div>
            {
                (()=>{
                    if(mark >= 80 && mark <=100){
                        return <h2>You have got GPA 5</h2>
                    }
                    else if(mark >=70 && mark <= 79){
                        return <h2>You have got GPA 4</h2>
                    }
                    else if(mark >= 60 && mark <= 69){
                        return <h2>You have got GPA 3.5</h2>
                    }
                    else{
                        return <h2>Sorroy show your result</h2>
                    }
                })()
            }
        </div>
    );
};
export default Result;
```

### Passing props to a component
- props stands for "properties"
- props is used to passing data from one component to another component.
- passin data in uni-directional fllow [parent to child]
GrandFather > Father > Child> Grand Child ..
- props data read-only
- parent can't change the data of child component

### Using props passing simple data
```JavaScript
    <div>
            <ViewRsult time={ new Date().getTime()}></ViewRsult>
     </div>

    const ViewRsult = (props) => {
    return (
        <div style={{padding:"50px"}}>
          <h3>Time: {props.time}</h3> 
        </div>
    );
};
```

### Using props passing function
```JavaScript
    const Home = () => {
    const alertMessage = ()=>{
        alert("Hello! What's up guy ");
    }
    return (
        <div>
            <ViewRsult alertMessage={alertMessage}></ViewRsult>
        </div>
    );
};

const ViewRsult = (props) => {
    return (
        <div  style={{padding:"50px"}}>
          <button onClick={props.alertMessage}>Show Me</button>
        </div>
    );
};
```

### Responding to event
```JavaScript
    <button onClick={()=>{
                alert("I'm home component");
            }}>Click Me</button>
```
_ We can write any kind of JavaScript code. like eventhadler

### Prevent default form submission
```JavaScript
const ViewRsult = () => {
    const submitForm = (e) =>{
        e.preventDefault();
        alert("Click Me");
    }
    return (
       <div>
            <form onSubmit={submitForm}>
                <input type="text" />
                <button>Submit</button>
            </form>
       </div>
    );
};
```
- Whenever we click on the submit button each time form is laoding again that's call prevent default behavior of form
- Now stop the default form behevior fllowing above snippet code.

### useRef() method - changin html element
```JavaScript
    const ViewRsult = () => {
    let userId = document.getElementById("userId");
    console.log(userId);
    return (
       <div>
          <h2 id="userId"></h2> 
       </div>
    );
};

- Instead of above code snippet to be following code
import React, { useRef } from 'react';
const ViewRsult = () => {
    let userId = useRef();
    const user = () =>{
        userId.innerHTML = `
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
            </ul>
        `;
    }
    
    return (
       <div style={{padding:"50px"}}>
          <h2 ref={
            h2 => userId = h2
          }></h2> 

          <button onClick={user}>Show</button>
       </div>
    );
};

export default ViewRsult;
```

### Chage the existing attribue value using useRef() method.
```JavaScript
    let userId = useRef();
    const user = () =>{
       userId.current.src="https://placehold.co/600x400/orange/white";
    }

    return (
       <div style={{padding:"50px"}}>
         <img src="https://placehold.co/600x400" alt="" ref={userId} /> <br />
          <button onClick={user}>Show</button>
       </div>
    );
```

### Set new attribute using useRef() method
```JavaScript
    let userId = useRef();
    const user = () =>{
       userId.current.src="https://placehold.co/600x400/orange/white";
       userId.current.setAttribute("height","200px");
       userId.current.setAttribute("width","300px");
    }

    return (
       <div style={{padding:"50px"}}>
         <img src="https://placehold.co/600x400" alt="" ref={userId} /> <br />
          <button onClick={user}>Show</button>
       </div>
    );
```
### How to pick the input field value using useRef();
```JavaScript
import React, { useRef } from 'react';
const ViewRsult = () => {
    let firstName,lastName = useRef();
    const pickInputValue = ()=>{
        const fName = firstName.value;
        const lName = lastName.value;

        alert(fName + " " + lName);
    }

    return (
       <div style={{padding:"50px"}}>
            <form action="#">
                <input ref={(v)=>firstName=v} type="text" placeholder='First Name' /> <br />
                <input ref={(v)=>lastName=v} type="text" placeholder='Last Name' /> <br />
                <button onClick={pickInputValue} type='submit'>Submit</button>
            </form>
       </div>
    );
};
export default ViewRsult;
```

### Add CSS class using useRef() method
```JavaScript
import React, { useRef } from 'react';
const ViewRsult = () => {
    const heroContainer = useRef();
    const themColorMode = useRef();

    const changeColorMode = ()=>{
       heroContainer.current.classList.remove('bg-success');
       heroContainer.current.classList.add('text-danger')
    }
    const themMode = ()=>{
      themColorMode.current.classList.add('bg-success-subtle');
    }

    return (
       <div style={{padding:"50px"}} ref={themColorMode}>
            <div ref={heroContainer} className="bg-success">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere mollitia nostrum inventore non accusantium, quam doloribus quaerat illum sapiente, consequatur sint aliquam in soluta saepe doloremque voluptate quae optio impedit.</p>
            </div>
            <button className='btn btn-primary' onClick={changeColorMode}>Change Mode</button>
            <button className='btn btn-secondary'  onClick={themMode} ref={themColorMode}>Mode</button>
       </div>
    );
};

export default ViewRsult;
```
- install bootstrap
- [bootstrap](https://www.npmjs.com/package/bootstrap)
- use bootstrap class

### persist mutable using useRef() method
```JavaScript
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
```
- Change the useRef() initial value. that's call persist mutable.

### Caching expensive data using useRef();
```JavaScript
    import React, { useRef } from 'react';
const ViewRsult = () => {
      const apiData = useRef(null);
      const pTag = useRef();

    // Fetching Data
      const fetchData = async ()=>{
         const response = await fetch('https://dummyjson.com/products')
         // caching api calling data into apiData reference
         apiData.current = await response.json();
      }
    // Showing data into pTag reference
      const showData = ()=>{
         pTag.current.innerText = JSON.stringify(apiData.current)
      }

    return (
       <div style={{padding:"50px"}}>
         <p ref={pTag}></p>

        <button onClick={()=>fetchData()} className='btn btn-success'>Call API</button>
        <button onClick={showData} className='btn btn-primary m-2'>Show Data</button>
       </div>
    );
};
export default ViewRsult;
```

### Make a To Do List 
```JavaScript
    import { useState } from "react";
const ViewRsult = () => {
   const [list, setList] = useState([]);
   const [item,setItem] = useState("");
   console.log(list);
  
   const addList = ()=>{
      list.push(item);
      setList([...list]);
   }
   const removeItemFromList =(index)=>{
      list.splice(index,1)
      setList([...list])

   }
    return (
       <div style={{padding:"50px"}}>
         <div className="todo-list col-md-4">
            <input 
            className="form-control border border-warning" 
            type="text"
            onChange={(e)=>{setItem(e.target.value)}}
            
            />
            <button 
            className="btn btn-primary mt-2"
            onClick={()=>{addList()}}
            >Add Item</button>
         </div>
         <div className="item-box  p-2 mt-3 rounded col-md-6">
            {
               list.length !== 0?
               list.map((element,i)=>{
                  return (
                     <div>
                        <li
                        style={{width:"80%", display:"inline-block"}}
                        className="list-group-item border border-primary p-2 mt-3 rounded" 
                        key={i.toString()}
                        >{element}</li>
                        <span onClick={()=>{removeItemFromList(i)}} className="btn btn-warning m-2">❌</span>
                     </div>
                  )
               }):<span></span>
            }
         </div>
      </div>
    );
};

export default ViewRsult;
```