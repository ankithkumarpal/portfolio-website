import "./portfolio.scss";
import Plist from "../plist/Plist";
import {featured,webapp,mobileapp,design,contact} from "../../pcdata"
import { useState } from "react";
import { useEffect } from "react";
function Portfolio() {
    const [selected,setselected]=useState("featured");
    const [data,setdata] = useState([]);
    const listObj=[
        {
            "id":"featured",
            "title":"Featured"
        },
     
        {
            "id":"webapp",
            "title":"Web APP"
        },
        {
            "id":"mobileapp",
            "title":"Mobile App"
        },
        {
            "id":"design",
            "title":"Design"
        },
        {
            "id":"branding",
            "title":"Branding"
        },
        {
            "id":"contact",
            "title":"Contact"
        },
    ];

    useEffect(()=>{
           switch(selected){
               case "featured":
                   setdata(featured);
                   break;
               case "webapp":
                   setdata(webapp);
                   break;
               case "mobileapp":
                   setdata(mobileapp);
                   break;
               case "design":
                   setdata(design);
                   break;
               case "contact":
                   setdata(contact);
                   break;
                   default:
                    setdata(featured);
           }
    },[selected]);
    return (
        <div className="portfolio" id="portfolio">
             <h1>Portfolio</h1>
            <ul>
                {listObj.map((items)=>(
                    <Plist title={items.title} active={selected==items.id} setselected={setselected} id={items.id}/>
                ))}
            </ul>
            <div className="portfolioconatiner">
                {data.map((d)=>(
                <div className="items">
                     <h3>{d.title}</h3>
                    <img src={d.img}alt="image" />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;