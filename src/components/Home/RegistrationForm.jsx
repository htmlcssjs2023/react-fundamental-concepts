import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formValue, setFormValue]=useState({"emailAddress":"","password":"", "checkList":""});
    const FormSubmit = (e) =>{
        e.preventDefault();
        alert(JSON.stringify(formValue));
    }

    const onChangeInputValue =(property,value) =>{
        setFormValue(prevObj=>({
            ...prevObj,
            [property]:value
        }))
    }

    return (
        <div>
                <form onSubmit={FormSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onChange={(e)=>{onChangeInputValue("emailAddress",e.target.value)}} type="email" className="form-control" value={formValue.emailAddress}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onChange={(e)=>{onChangeInputValue("password",e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" value={formValue.password}/>
                </div>
                <div className="mb-3 form-check">
                    <input onChange={(e)=>{onChangeInputValue("checkList",e.target.value)}} type="checkbox" className="form-check-input" id="exampleCheck1" value={formValue.checkList}/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
};

export default RegistrationForm;