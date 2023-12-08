

// import React from "react"; 

  
// const About = () => { 

//   return ( 

//     <div> 

//       <h1>About Page</h1> 

//     </div> 

//   ); 
// }; 

  

// export default About; 

import React from 'react';
import './aboutStyle.css'

function About() {
  return (
    <div className="about-us-container">
      <header className="header">
        <h1>About Us</h1>
      </header>
      <section className="content">
        <p>
          Welcome to our website! We are a team of passionate individuals
          dedicated to providing valuable information and services to our
          community.
        </p>
        <p>
          Our mission is to [replace with your mission]. We believe in
          [replace with your values].
        </p>
      </section>
      <footer className="footer">
        <p>Contact us at: info@example.com</p>
      </footer>
    </div>
  );
}

export default About;
