import React from 'react';
import myImg from '../../Images/my-picture.png';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container d-flex mt-5">
                <div className="goal w-50">
                    <h2 className='name'>This is <span> Hasan</span> </h2>
                    <p >My goal is to become a full stack web developer in upcoming three months and get opprotunities to work with professionals to increase effeciency in workflow.</p>
                </div>
                <div className="img w-50">
                    <img src={myImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;