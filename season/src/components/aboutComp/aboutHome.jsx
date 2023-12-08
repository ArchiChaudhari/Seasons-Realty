import React, {Component} from 'react';
import Navbar from "./aboutNavbar";
import About from "./about";

class aboutHome extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <About/>
               
                
            </React.Fragment>
        );
    }
}

export default aboutHome;