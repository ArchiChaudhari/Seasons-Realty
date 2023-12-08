import React, {Component} from 'react';
import Navbar from "./contactNavbar";
import Contact from "./contact";

class contactHome extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Contact/>
               
                
            </React.Fragment>
        );
    }
}

export default contactHome;