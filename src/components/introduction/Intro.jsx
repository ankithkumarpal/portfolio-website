import "./intro.scss";
import { init } from 'ityped';
import {ExpandMore} from "@material-ui/icons"
import { useEffect ,useRef } from "react";
function Intro(){
          const  textRef = useRef();
          const projectRef = useRef();
    useEffect(()=>{
           console.log(textRef);
           init(textRef.current, { showCursor: true,
             backDelay:  1000,
           
             strings: [' Developer', ' Coder' ,' Machine Learning' ," content writer"] })
    },[textRef]);
   
    useEffect(()=>{
           console.log(textRef);
           init(projectRef.current, { showCursor: true,
            backDelay:  500,
             strings: [' Blog Website using React', ' Excel ' ,' speech to text Recognistion ' ," Portfolio","unique carving full stack website "] })
    },[textRef]);
   
    return(
        <div className="intro" id="intro">
            <div className="left">
                     <div className="image">
                         <img src="assests/boy.jpg" alt="" />
                     </div>
            </div>
            <div className="right">
                  <div className="wrapper">
                      <h2>Hi There, I am </h2>
                      <h1>Ankith pal</h1>
                      <h3> Skills : <span className="skills" ref={textRef}></span></h3>
                      <h3> Projects : <span  className="projects" ref={projectRef}></span></h3>
                  </div>
                  <div>
                   <a href="#portfolio"><ExpandMore className="down"/></a>
                  </div>
            </div>
        </div>
    )
}

export default Intro;