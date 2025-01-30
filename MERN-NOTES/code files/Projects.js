import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
    return (
      <section className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3 className="project-title">Voice Vision (Generative AI)</h3>
            <p className="project-description">
                Voice Vision is a generative AI model that uses a combination of natural language processing and computer vision to
                generate images based on text prompts.
                </p>
                <a href="https://voicevision.ai" target="_blank" rel="noopener noreferrer">Link</a>
           <p> Developing an innovative software solution that combines advanced voice recognition, NLP, and CV technologies to enhance accessibility for visually impaired users.
                <h2>The goal</h2> By leveraging generative AI, this software interprets voice commands, translates them into actionable outputs, and uses computer vision to describe surroundings or objects in real-time. This project’s unique blend of voice and visual processing aims to enhance autonomy and accessibility, offering a life-changing resource for visually impaired individuals.
            </p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Hotel Management </h3>
            <p className="project-description">
                This project is a web-based hotel management system that allows users to manage their hotel's rooms
            .It includes features such as room allocation, guest check-in/check-out,
                service requests, and payment processing.
                </p>
                <a href="https://hotel-management-system.netlify.app/" target="_blank" rel="noopener noreferrer">Link</a>
               <p> 
            Developed a fully integrated hotel management system to streamline operations and enhance guest experience. 
This system was built with SQL for backend database management and Tkinter in Python for a user-friendly graphical user interface (GUI).
<h2>Key Features</h2> Room booking, guest management, billing, and detailed reporting functions. The booking module allowed efficient management of room reservations, while the guest management feature maintained records of check-ins and check-outs. 
            </p>
          </div>
        </div>
      </section>
    );
  }

export default Projects;
