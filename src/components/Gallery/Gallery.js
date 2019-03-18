import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {updateUser} from '../../geese/reducer'
import {clearUser} from '../../geese/reducer'
import Navbar from '../NavBar/Navbar'
import '../../style/gallery.scss'







class Gallery extends Component{

    render(){
        return(
        <div>
            <Navbar></Navbar>
            <div className='gallerydisplay'>
            a
            </div>
            Gallery Component</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Gallery);


