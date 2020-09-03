import React, { Component } from 'react';
import logo from '../styles/logo2.png'

class Header extends Component {

    render(){
        return(
            <div>
                <img className="w-2/4 mx-auto block max-w-md" src={logo} alt="Logo"/>
            </div>
        )
    }
}

export default Header;