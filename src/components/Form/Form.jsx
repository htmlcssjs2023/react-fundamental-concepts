import { useState } from "react";

const Form = () => {
    const [formObject, setFormObject] = useState({fName:"", lName:"", city:"", gender:""})
    // console.log(formObject);

    //Receive Form Value usin following handler
    const receiveFormValue = (property, value)=>{
        setFormObject(perviousObj=>({
            ...perviousObj,
            [property]:value
        }))
    }
    const formSubmission = (e) =>{
       e.preventDefault();
       alert(JSON.stringify(formObject));
    }
    return (
        <div>
            <div className="container">
                <h3>Apply For Dubai Jobs</h3>
                <form onSubmit={formSubmission}>
                    <label htmlFor="fName"> First Name</label>
                    <input onChange={(e)=>{receiveFormValue("fName",e.target.value)}} type="text" id="fname" name="fName" value={formObject.fName} />

                    <label htmlFor="lName"> Last Name</label>
                    <input onChange={(e)=>{receiveFormValue("lName", e.target.value)}} type="text" id="fname" name="fName" value={formObject.lName} />

                    <select onChange={(e)=>{receiveFormValue("city", e.target.value)}} name="city" id="city" value={formObject.city}>
                        <option value="">Choose option</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                    </select>

                    
                    <input onChange={(e)=>{receiveFormValue("gender", "Male")}} className="m-2" type="radio" name="gender" value={formObject.gender == 'Male'}/><span htmlFor="gender">Male</span>
                    <input onChange={(e)=>{receiveFormValue("lName", "Female")}} className="m-2" type="radio" name="gender" value={formObject.gender == 'Female'} /><span htmlFor="gender">Female</span>

                    <button className="d-block mt-3" type='submit'>Submit</button>


                </form>
            </div>
        </div>
    );
};

export default Form;