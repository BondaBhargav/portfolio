import React from "react";

import "./project.css";

const myprojects = [
    {
      "projectName": "Task Hub",
      "imageUrl": "https://cdn.dribbble.com/users/4679523/screenshots/11530254/media/1327d39dc5a8962a1c2d1e8205f67f4e.jpg?resize=1000x750&vertical=center",
      "description": "A modern and interactive task management system with a multi-level interface for efficient task organization, progress tracking, and a user-friendly dashboard."
    },
    {
      "projectName": "MovieAPP",
      "imageUrl": "https://res.cloudinary.com/dtc4lwuck/image/upload/v1735069558/DALL_E_2024-12-25_01.00.48_-_A_sleek_and_visually_engaging_movie_app_design_named_MovieAPP_showcasing_movie_posters_categories_like_Trending_and_Top_Rated_and_a_clean_inte_m0ucjw.webp",
      "description": "A sleek movie app design with a collection of movie posters, ratings, and categories like 'Trending' and 'Top Rated'. The interface is intuitive and engaging."
    },
    {
      "projectName": "RockPaperScissors",
      "imageUrl": "https://res.cloudinary.com/dtc4lwuck/image/upload/v1735069526/DALL_E_2024-12-25_01.00.43_-_A_playful_and_dynamic_interface_for_a_Rock_Paper_Scissors_game_named_RockPaperScissors_featuring_animated_icons_of_hand_gestures_and_a_vibrant_eas_qnzs41.webp",
      "description": "An engaging Rock Paper Scissors game interface with playful animations and a dynamic, easy-to-use design."
    },
    {
      "projectName": "Shopping App",
      "imageUrl": "https://res.cloudinary.com/dtc4lwuck/image/upload/v1735070698/th_mon2lt.jpg",
      "description": "A user-friendly shopping app with categories like electronics, clothing, and groceries, featuring a clean design and seamless checkout process."
    },
    {
      "projectName": "WeatherApp",
      "imageUrl": "https://res.cloudinary.com/dtc4lwuck/image/upload/v1735070678/dd31e3143341645.627922d860921_mwh1cg.png",
      "description": "A minimalist weather app providing real-time updates with temperature, humidity, and weather icons, designed for simplicity and ease of use."
    },
    {
      "projectName": "Speech Text",
      "imageUrl":"https://res.cloudinary.com/dtc4lwuck/image/upload/v1735070686/speech-to-text-converter-smartphone-interface-template-mobile-app-page-color-design-layout-voice-recorder-screen-flat-ui-for-application-hand-holding-phone-with-phrase-conversion-on-display-vector_fljyz3.jpg",
      "description": "A voice-to-text application that converts speech into written text in real-time, helping users to easily transcribe spoken words into text with high accuracy and ease."
    }
  ]
  


const Projects = () => {
  return (
    <div id="projects" className="skills">
      <h2 class="card-title mb-lg-5 text-primary mt-5"> Projects</h2>
      <div className="skills-container card-body">
        {myprojects.map((each, index) => (
          <div key={index} className="card-project m-3">
            <img
              src={each.imageUrl}
              alt={`${each.projectName} Icon`}
              className="project-img"
            />
            <h3 className="t-green">{each.projectName}</h3>
            <p className="text-des">{each.description}</p>
            <div>
              <a href="" class="profilebtn">
                Live Demo
              </a>
              <a href="" download className="profilebtn ms-4"> Github </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
