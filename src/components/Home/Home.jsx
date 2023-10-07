import React from 'react';

const Home = () => {
    
     const gender = "Male";
    return (
        <div>
           {
            gender === "Male"? 
            <h3>You can access the male class room</h3>:
            <h3>Don't access male class room</h3>
           }
        </div>
    );
};

export default Home;