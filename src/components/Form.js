import React from "react";
import logo from "./Abstraction.jpg";
import Footer from "./Footer";


const Form = ()=>{


    return(<>

            <div className="container">
                <div className="leftCol">
                <div id="myText">Find 3D Objects, Mockups and Ilustration here</div>
                <img id="logo" src={logo} alt="logo" />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Form;