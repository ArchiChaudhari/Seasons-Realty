import React, {Component} from 'react';
import Navbar from "./testNavbar";
import Test from "./test"

class testHome extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Test/>
               
                
            </React.Fragment>
        );
    }
}

export default testHome;