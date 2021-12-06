import Contact from "./components/contacts/Contact"
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/works/Works";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/introduction/Intro"
import Menu from "./components/menu/Menu"
import React, { useState } from 'react';
import './app.scss';


function App(){
    const [menuOpen, setMenu]= useState(false);
    return(
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenu={setMenu}/>
            <Menu  menuOpen={menuOpen} setMenu={setMenu}/>
            <div className="sections">
                <Intro/>
                <Portfolio/>
                <Work/>
                {/* <Testimonial/> */}
                <Contact/>
            </div>
        </div>
    );
}

export default App;