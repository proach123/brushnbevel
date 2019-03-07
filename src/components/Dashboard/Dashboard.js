import React, { Component } from 'react';
import '../../style/dashboard.css'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div className='dashbody'>
            
            <div className='treeimg'>
            <img src='https://brushandbevelcom.files.wordpress.com/2019/01/cropped-fullsizeoutput_1f13-1.jpeg' alt='Welcome to brush and bevel' height='100%' width='100%' />
            </div>
        
            <div className='dashblogpost'>
            <div>Blogpost</div>
            <div>Blogpost</div>
            </div>
        

            <div className='dashnav'> 
            <Link to={`/gallery`}>
            <button>Gallery</button>
            </Link>
            <Link to={'/Team'}>
            <button>Team</button>
            </Link>
            <Link to={'/login'}>
            <button>Artist Log in</button>
            </Link>
            <div className='dashnavlogo'>
            <img src='https://brushandbevelcom.files.wordpress.com/2018/12/cropped-The-Good-Logo-3-6.png' alt='brush and bevel logo' height='200' width='200'/>
            </div>
            </div>
                Dashboard Component

                

            </div>
        )
    }
}

export default Dashboard