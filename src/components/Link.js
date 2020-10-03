import React from "react";


function Link(props){
return (
<span className="icon-bg flex-1 rounded-lg border-solid border-2 border-gray-100  bg-white shadow-md flex justify-center ">
    <a  href={props.link.site}><i className={props.link.class} ></i></a>
</span>
)
}

export default Link; 