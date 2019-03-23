import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {updateUser} from '../../geese/reducer'
import {clearUser} from '../../geese/reducer'
import Navbar from '../NavBar/Navbar'
import Approve from './Approve'

class Admin extends Component{

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
        this.getArtApproved();

    }



    getArtApproved(){
        axios.get('/api/gall').then(res => {
            console.log(res.data)
            this.setState({
                artworks: res.data
            })
        })
    }

    updateApproval = artwork => {
        let artworkCopy = {...artwork}
        let {id} = artworkCopy 
        artworkCopy.gallery_approved = !artworkCopy.gallery_approved
        console.log(artworkCopy, '48')
        
        axios.put(`/api/gall/${id}`, artworkCopy ).then(res => {

            console.log('this is the approval response',res)
          
          
        });
        this.getArtApproved();
      };


    render(){
        const { username, img, balance } = this.props;

        const artworks = this.state.artworks.map((artwork) => {
            
            return (
                
                <div className='artworkdisplay'>
                    <h3>{artwork.name}</h3>
                    <img src={artwork.painting_url} />
                    <p>{artwork.description}</p>
                    <p>{artwork.price}</p>

                    <div>
                {artwork.gallery_approved? (
                    <button className='approveEditButton'  onClick={() => this.updateApproval(artwork)}> Approved</button>

                ): (<button className='approveEditButton' onClick={() => this.updateApproval(artwork)}>Not Approved</button>
                )}
            </div>
                    </div>
            )
        })

        return(
        <div>
            <Navbar></Navbar>
            <button onClick={this.destroySession}>Logout</button>
            <div className='gallerydisplay'>hello{artworks}</div>
            <div className='gallerydis'>
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
export default connect(mapStateToProps,mapDispatchToProps)(Admin);