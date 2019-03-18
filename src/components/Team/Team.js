import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {updateUser} from '../../geese/reducer'
import {clearUser} from '../../geese/reducer'
import Navbar from '../NavBar/Navbar';
import '../../style/team.scss'

class Team extends Component{

    render(){
        return(
            <div className="teamnav">
            <Navbar></Navbar>
            <h2>Team</h2>
        <div className='TeamPage'>
        <h2>Team</h2>
            <div className='seperateteam'>
            <div className='teamp'>
            <p>Brush & Bevel was founded by Dustin Howard and Zach Wilner with the mission of pursuing their respective passions for painting and woodworking.</p>
            </div>
            <div className='Dustinbio'>
            <img src={'https://brushandbevelcom.files.wordpress.com/2019/01/fullsizeoutput_1f65.jpeg?w=222&h=205'}></img>
            <p style={{ textAlign: "left", alignSelf: 'stretch',}}>During his junior year of college, Dustin traded in the colored pencils for oil paints. He can be found studying the master works in museums and painting late into the night in the studio. His works are scattered in style, ranging from realistic seascape to impressionist portrait to gestural abstract. Although his paintings reference a multitude of artists and photographs, he views Gerhard Richter as his biggest influence.</p>
            </div>
            </div>
            </div>
            </div>
        )
    }

}

const mapStateToProps = reduxState => {
    return {
        
    }
}
const mapDispatchToProps = {
    updateUser,
    clearUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Team);