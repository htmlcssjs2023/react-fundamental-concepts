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