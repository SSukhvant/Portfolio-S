import React from "react";

const Skills = () => {
    return(
        <>
               <div className="about-tabs my-5 text-center">
                   <span className="tab-item outer-shadow active" data-target=".skills">Skills</span>
                   <span className="tab-item mx-4" data-target=".experience">Experience</span>
                   <span className="tab-item" data-target=".education">Education</span>
               </div>

               <div className="row">
                   <div className="skills tab-content">
                       <div className="row">
                           <div className="col-6 skill-item">
                               <p>HTML</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-50">
                                       <span>50%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-6 skill-item">
                               <p>Java Script</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-60">
                                       <span>60%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-6 skill-item">
                               <p>CSS</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-90">
                                       <span>90%</span>
                                   </div>
                               </div>
                           </div>

                           <div className="col-6 skill-item">
                               <p>React JS</p>
                               <div className="progress-bar inner-shadow">
                                   <div className="progress-bar p-70">
                                       <span>70%</span>
                                   </div>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>
        </>
    )
};

export default Skills;