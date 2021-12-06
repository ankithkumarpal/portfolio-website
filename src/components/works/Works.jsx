import "./works.scss";
import {ArrowBackIos,ArrowForwardIos} from "@material-ui/icons"
import { useState } from "react";
function Work() {
       const [currentitem,setcurrentitem]= useState(0);
    const workdata= [
        {
            id:"1",
            icon:"/assests/cell.jpg",
            title:"Web App",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facere ",
            img:"/assests/html.jpg"
            
        },
        {
            id:"2",
            icon:"/assests/cell.jpg",
            title:"Mobile App",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facere ",
            img:"/assests/html.jpg"
            
        },
        {
            id:"3",
            icon:"/assests/cell.jpg",
            title:"Design App",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facere Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, facere ",
            img:"/assests/html.jpg"
            
        },
    ]

   const chagesubmit=(val)=>{
        setcurrentitem(currentitem > 0 ? currentitem-1:2);
        console.log(currentitem)
   }
 const chagesubmitr = ()=>{
       setcurrentitem(currentitem < workdata.length-1 ? currentitem+1 : 0);
       console.log(currentitem)
 }
    return (
        <div className="work" id="work">
            <div className="workcontainer"  style={{transform:`translateX(-${currentitem*100}vw )`}}>
                {workdata.map((d)=>(
                <div className="workcard">
                    <div className="workitem">
                        <div className="wleft">
                            <div className="leftcontainer">
                                <div className="imagecontainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                 <span oncli>Projects</span>
                            </div>
                        </div>
                        <div className="wright">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
             <ArrowBackIos className="leftArrow" onClick={()=>chagesubmit()} />
             <ArrowForwardIos className="rightArrow" onClick={()=>chagesubmitr()}/>
        </div>
    )
}

export default Work;