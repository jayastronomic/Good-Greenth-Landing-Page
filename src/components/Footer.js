import React from 'react'
import Link from './Link.js'
function Footer(props){
    return (
    <div className="mx-auto max-w-md flex space-x-5 items-center">
        {
        props.links.map(link => {
            return <Link link={link}/> })
            }
    </div>
    )
}

export default Footer;

