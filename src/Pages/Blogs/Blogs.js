
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='Question-Container'>
            <div className="question">
                <h2 className='fs-4 p-1' >Difference between  Authentication and Authorization.</h2>
                <p className='ans px-1 pt-1'> <span className='fs-5' >Ans: </span>Authentication is the system of checking the validity of a person based on his personal information. Authorization is the power of a person, on the basis of which he can regulate and control any system. For example authentication is the access of signIn or Login into a site and Authorization is update site data remove bad elements. </p>
            </div>
            <div className="question">
                <h2 className='fs-4 p-1'>Why i am using firebase? What other options i have to implement in authentication?</h2>
                <p className='ans px-1 pt-1'><span className='fs-5 ' >Ans: </span> I am using firebase to check and managae user validity that means performing authentication functionality. And also using for deploying site and generating live link. There are so many options to implement in authentication like OKTA, Auth0, MongoDB and so on.</p>
            </div>
            <div className="question">
                <h2 className='fs-4 p-1'>What services does firebase provide other than authentication? </h2>
                <p className='ans px-1 pt-1'><span className=' fs-5 '> Ans: </span> Firebase is very useful tools that works under google. Developers who are beginnger like me can use their tools like hosting , authentication and so many things without paying single amount of money. Firebase provide so many services, the most useful services are Cloud Firestore, Cloud Functions, Authentication, Cloud Storage, Google Analytics, Predictions, Cloud Messaging and so on.








</p>
            </div>

        </div>
    );
};

export default Blogs;