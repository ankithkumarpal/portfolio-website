import "./topbar.scss";
import {Person ,Mail} from "@material-ui/icons";
function Topbar({menuOpen,setMenu}){
    return(
        <div className={"topbar "+(menuOpen&&"active")} id="topbar">
            <div className="topbar_nav">
                   <div className="left">
                         <a href="#intro" className="logo">Ankith Pal</a>
                         <div className="container">
                            <Person className="person icon"/>
                            <span> +91 8309145402</span>
                         </div>
                         <div className="container">
                            <Mail className="mail icon"/>
                            <span> ankithpal721@gmail.com</span>
                         </div>
                   </div>
                   
                   <div className="right">
                    <div className="hamberger" onClick={()=>setMenu(!menuOpen)}>
                       <span className="line1"></span> 
                       <span className="line2"></span> 
                       <span className="line3"></span> 
                                          
                    </div>
                   </div>
            </div>
        </div>
    )
}

export default Topbar;