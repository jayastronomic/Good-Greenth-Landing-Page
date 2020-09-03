import React from "react";


function Link(props){
return (
<a href={props.link.site}><i class={props.link.class} size={60}></i></a>
)
}

export default Link; 