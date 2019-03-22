import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {updateUser} from '../../geese/reducer'
import {clearUser} from '../../geese/reducer'
import Navbar from '../NavBar/Navbar'
import '../../style/gallery.scss'







class Gallery extends Component{


    constructor(props){
        super(props)

        this.state={
            title: '',
            description: '',
            painting_url: '',
            price: 0,
            artworks: [],
            img:'',
            
        }


    }

    componentDidMount() {
        this.getArt();

    }



    getArt(){
        axios.get('/api/gallery').then(res => {
            console.log(res.data)
            this.setState({
                artworks: res.data
            })
        })
    }



    render(){

        const artworks = this.state.artworks.map((artwork) => {
            
            return (
                
                <div className='artworkdisplay'>
                    <h3>{artwork.name}</h3>
                    <img src={artwork.painting_url} />
                    <p>{artwork.description}</p>
                    <p>{artwork.price}</p>
                    </div>
            )
        })
        
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


