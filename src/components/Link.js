import React from "react";


function Link(props){
return (
<span className="flex-1 ">
    <a  href={props.link.site}><i className={props.link.class} ></i></a>
</span>
)
}

export default Link; 