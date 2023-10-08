import React from 'react';
const ViewRsult = () => {
    const submitForm = (e) =>{
        e.preventDefault();
        alert("Click Me");
    }
    return (
       <div>
            {/* <form action=""onSubmit={}></form> */}
            <form onSubmit={submitForm}>
                <input type="text" />
                <button>Submit</button>
            </form>
       </div>
    );
};

export default ViewRsult;