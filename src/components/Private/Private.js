import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {updateUser} from '../../geese/reducer'
import {clearUser} from '../../geese/reducer'

class Private extends Component {

    constructor(props){
        super(props)

        this.state={
            title: '',
            description: '',
            painting_url: '',
            price: '',

        }


    }

    componentDidMount() {
        this.getUser();
        this.checkUser();
    }

    checkUser = async () => {
        const {artist_id}= this.props;
        if(artist_id) {
            try {
                let res = await axios.get('api/isadmin')
                this.props.updateUser(res.data)
                this.props.history.push('/admin')
                 } catch (err) {
                 }
        } else {
            this.props.history.push('/private')
        }
    }
    getUser = async () => {
        const { artist_id } = this.props;
        if (!artist_id){
            
            try {
           let res = await axios.get('api/current')
           this.props.updateUser(res.data)
           console.log(res);
            } catch (err) {
                this.props.history.push('/')
            }

        }

    }

    // getArtwork = async () => {
    //     const {id}= this.props;
    //     if(artist_id == session) {
    //         try {
    //             let res = await axios.get('api/current')
    //             this.props.updateUser(res.data)
    //             this.props.history.push('/private')
    //              } catch (err) {
    //              }
    //     } else {
    //         this.props.history.push('/private')
    //     }
    // }

    handleChange(prop, val){
        console.log(prop, val)
        this.setState({
            [prop]: val
        })
    }

    destroySession = async () => {
        await axios.post('/auth/logout')
        this.props.clearUser();
        this.props.history.push('/login')
    }

     postArt = async () =>{
        console.log(this.state)
        let art = {
            title: this.state.title,
            description: this.state.description,
            painting_url: this.state.painting_url,
            price: this.state.price,
            
        }

        try {
                console.log(art)
            let res = await axios.post('/api/gallery', art);
        } catch(err) {
            alert('Artwork submission failed')
        }
    }

    render() {
        
        // const { username, img, balance } = this.props;
        
        const { title, description, painting_url, price} = this.state
        // const artworks = this.state.artworks.map((artwork) => {
        //     return (
        //         <div>
        //             <h3>{artwork.name}</h3>
        //             <img/>
        //             <p>Price</p>
        //         </div>
        //     )
        // })
        return (
            
            <div>
                <input value={title} onChange={e => this.handleChange('title',e.target.value)} placeholder='Title' />
                <input value={description}  onChange={e => this.handleChange('description',e.target.value)} placeholder='Description' />
                <input value={painting_url}  onChange={e => this.handleChange('painting_url',e.target.value)} placeholder='Image Url' />
                <input value={price}  onChange={e => this.handleChange('price',e.target.value)} placeholder='price' />
                <button onClick={this.postArt}>Submit Art</button>
                <button onClick={this.destroySession}>Logout</button>
                {/* <h1>{username}</h1>
                <img src={img} alt='user' />
                <p>{balance}</p> */}
                {/* {artworks} */}
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
export default connect(mapStateToProps,mapDispatchToProps)(Private);


