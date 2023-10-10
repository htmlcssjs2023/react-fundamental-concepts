import React, { useState } from 'react';

const Form1 = () => {
    const [formObj, setFormObj]=useState({"fullName": "", "country":"","gender":""});
    //Stop default form submition
    const FormSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formObj));
    }

    // Pick the form input value and keeping into object
    const onChangeInputValue = (property, value) =>{
        setFormObj(preObj=>({
            ...preObj,
            [property]: value
        }))
    }

    return (
        <div>
            <h2>Apply Now</h2>
            <form onSubmit={FormSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input onChange={(e)=>{onChangeInputValue("fullName", e.target.value)}} type="text" value={formObj.fullName}/>
                <label htmlFor="country">Select Country</label>
                <select onChange={(e)=>{onChangeInputValue("country", e.target.value)}} value={formObj.country}>
                    <option value="">Choose Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Palastine">Palastine</option>
                </select>
                <label htmlFor="gender">Select Gender</label>
                <input onChange={(e)=>{onChangeInputValue("gender", "Male")}} type="radio" name="gender" value={formObj.gender == "Male"} />Male
                <input onChange={(e)=>{onChangeInputValue("gender", "Female")}} type="radio" name="gender" value={formObj.gender == "Female"} />Female <br />

                <button type='submit'>Submit</button>
              
            </form>
        </div>
    );
};

export default Form1;