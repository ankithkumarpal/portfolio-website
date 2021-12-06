import "./menu.scss";
function Menu({menuOpen,setMenu}){
    return(
        <div className={"menu "+(menuOpen && "active")} id="Menu">
        <ul>
            <li onClick={()=>{setMenu(false)}}><a href="#intro">Intro</a></li>
            <li  onClick={()=>{setMenu(false)}}><a href="#portfolio">portfolio</a></li>
            <li  onClick={()=>{setMenu(false)}}><a href="#testimonial">Testimonial</a></li>
            <li  onClick={()=>{setMenu(false)}}><a href="#work">Work</a></li>
            <li  onClick={()=>{setMenu(false)}}><a href="#contact">Contact</a></li>
        </ul>
        </div>
    )
}

export default Menu;