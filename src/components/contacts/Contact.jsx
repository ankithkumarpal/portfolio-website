import { useState } from "react";
import "./contact.scss";
function Contact(){
       const [msgupdate,setmsgupdate]=useState();
   const handleSubmit=()=>{
       setmsgupdate(true);
      
   }
    return(
        <div className="conatct" id="contact">
            <div className="contactform">
                  <h1>Get in touch with me </h1>
                  <div className="formitems">
                      <div className="input">
                          <input type="text" placeholder="your name (Required)" required/>
                          <input type="text" placeholder="your email (Required)" required/>
                      </div>
                      <textarea name="" id="" cols="30" rows="10" placeholder=" your message"></textarea>
                      <button className="submitform" onClick={handleSubmit}> Get in touch</button>
                     {msgupdate && <span> Thanks , I will get in touch soon. </span>}
                  </div>
            </div>
        </div>
    )
}

export default Contact;