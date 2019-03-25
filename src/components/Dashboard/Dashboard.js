import React, { Component } from 'react';
import '../../style/dashboard.scss'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    // constructor(props){
    //     super(props)

    //     this.state={
    //        theposition: 0
    //     }
    // }

//    componentDidMount(){
//        window.addEventListener('scroll', this.listentoScroll)
//    }
//    componentWillUnmount() {
//        window.removeEventListener('scroll', this.listentoScroll)
//    }

// listentoScroll = () => {
//     const winScroll = document.body.scrollTop || document.documentElement.scrollTop

//     const height = document.documentElement.scrollHeight -
//     document.documentElement.clientHeight

//     const scrolled = winScroll / height

//     this.setState({theposition: scrolled})
// }

    render() {



        return (
            <div className='dashbody'>
            
            
            <div className='treeimg'>
            <img src='https://brushandbevelcom.files.wordpress.com/2019/01/cropped-fullsizeoutput_1f13-1.jpeg' alt='Welcome to brush and bevel' height='100%' width='100%' />
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
        
            <div className='dashblogpost'>
            <p>We are committed to creating and personalizing artwork and furniture that’s perfect for your home. Using reclaimed materials whenever possible, our one-of-a-kind pieces are built with attention to size, aesthetic, and function to compliment and ground spaces for leisure and reflection.</p>
            <div>------------------------------------------------------------------------------------</div>
            <p>Lorem ipsem</p>
            <div>------------------------------------------------------------------------------------</div>
            <p>Lorem ipsem</p>
            <div>------------------------------------------------------------------------------------</div>
            <p>Lorem ipsem</p>
            <div>------------------------------------------------------------------------------------</div>
            <p>Lorem ipsem</p>
            <div>------------------------------------------------------------------------------------</div>
            <p>Lorem ipsem</p>
            <div>------------------------------------------------------------------------------------</div>
            </div>

            </div>
        )
    }
}

export default Dashboard

