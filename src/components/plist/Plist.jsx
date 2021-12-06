import "./plist.scss";
function Plist({title ,active,setselected,id}){
    return(
        <li className={active ? "plist active":"plist"} onClick={()=>setselected(id)}>
            {title}
        </li>
    )
}

export default Plist;