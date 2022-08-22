import React, { Component } from 'react';
import "./ExperienceStyle.css"

const Experience = React.forwardRef((props, ref) => {
    // console.log(ref)
    return (
        <div ref={ref} className="ExperienceContainer">
            <h1 className='header'>Professional Experience</h1>
            <hr className='nextLine'/>
            
            <div >

            </div>
        </div>
    );
});

export default Experience;
