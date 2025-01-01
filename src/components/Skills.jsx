import React from 'react';
import "./skills.css"
const Skills = () => {

const skills=[
    { "skill": "Python", "value": 85, "iconUrl": "https://cdn.simpleicons.org/python" },
    { "skill": "SQL", "value": 95, "iconUrl": "https://cdn.simpleicons.org/mysql" },
    { "skill": "HTML", "value": 95, "iconUrl": "https://cdn.simpleicons.org/html5" },
    { "skill": "CSS", "value": 80, "iconUrl": "https://cdn.simpleicons.org/css3" },
    { "skill": "JavaScript", "value": 75, "iconUrl": "https://cdn.simpleicons.org/javascript" },
    { "skill": "MERN Stack", "value": 85, "iconUrl": "https://miro.medium.com/v2/resize:fit:828/format:webp/0*kxPYwfJmkXZ3iCWy.png" },
   
  ]  
  return (
    
 
        
    <div id="skills" className="skills">
      <h2 class="card-title mb-lg-5 text-primary mt-5 ">
              {" "}
               Skills
            </h2>

            <div className='d-flex' >
  <div className="skills-container card-body">
            
          {skills.map((skill, index) => (
            <div key={index} className="card-skills m-lg-3">
              <img src={skill.iconUrl} alt={`${skill.skill} Icon`} className="card-icon" />
              <h3 className='t-orange'>{skill.skill}</h3>
              <h3 className=''>{skill.value}%</h3>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={skill.value} 
                readOnly 
                className="skill-range"
                style={{
                  '--value': `${skill.value}%`,
                }}
              />
            </div>
          ))}
        </div>
            </div>
      
        </div>
      );
    };
    
    





//     <div id="skills" className="section skills ">
//     <div class="card-container d-lg-none w-100">
//       <div class="card profile-card mt-5 pro">
//         <div class="card-body text-center w-75">
//           <h2 class="card-title">
//             {" "}
//             <span className="t-orange">Skills</span>
//           </h2>
//           <div className="d-flex flex-column justify-content-center text-start align-items-center gap-3">
//             {myskills.map(each=>(<div key={each.skill} className="d-flex flex-column gap-2 w-100 ">
//               <span >{each.skill}</span>
//               <input type="range" className="each-skill" value={each.value} />
//             </div>))}
            
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="card-container d-none d-lg-block w-100">
//       <div class="mt-5 pro">
//         <div class="card-body text-center w-100">
//           <h2 class="card-title">
//             {" "}
//             <span className="t-orange">Skills</span>
//           </h2>
//           <div className="container w-75">
//           <div className="row d-flex justify-content-center flex-wrap  text-start align-items-center gap-3">
//             {myskills.map((each,i)=>(<li key={each.skill+i} className="d-flex flex-column col-5 gap-2 w-100 w-50">
//               <span >{each.skill}</span>
//               <input type="range" className="each-skill" value={each.value} />
//             </li>))}
            
//           </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   </div>
 

export default Skills;
