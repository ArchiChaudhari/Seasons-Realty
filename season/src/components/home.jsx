import React, {Component} from 'react';
import Navbar from "./navbar";
import Main from "./main";
import Footer from "./footer"
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Main/>
                <cards/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;