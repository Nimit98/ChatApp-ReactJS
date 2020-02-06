import React, { Component } from 'react'
import './style.css'
import img from './img.JPG'


class Top extends Component {
    render() {
        return (
            <div className="wrapper" >
            <div class="head-img">
		<a href="profile" ><img src={img} alt="logo" /></a>
		<p><a href="profile">John Deo</a></p>
	    </div>
        </div>
        )
    }
}

export default Top
