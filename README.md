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