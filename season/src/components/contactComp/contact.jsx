

// import React from "react"; 

  
// const ContactUs = () => { 

//   return ( 

//     <div> 

//       <h1>Contact Us Page</h1> 

//     </div> 

//   ); 
// }; 

  

// export default ContactUs; 

import React from 'react';
import './contact.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <header className="header">
        <h1>Contact Us</h1>
      </header>
      <section className="content">
        <p>
          Have questions or feedback? We'd love to hear from you! Reach out to
          us via email or use the form below.
        </p>
        {/* Add your contact form or additional contact information here */}
      </section>
      <footer className="footer">
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </footer>
    </div>
  );
}

export default ContactUs;

