import React from 'react'
import Link from './Link.js'

function Footer(props){
    return (
    <div>
        {
            props.links.map(link => {
                return <Link link={link}/>
            })
        } 
    </div>
    )
}

export default Footer;

