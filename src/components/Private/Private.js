import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {updateUser} from '../../geese/reducer'
import {clearUser} from '../../geese/reducer'
import '../../style/private.scss'
import Edit from './Edit'
import Navbar from '../NavBar/Navbar'


class Private extends Component {

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
        this.getUser();
        this.checkUser();
        this.getArt();

    }

    checkUser = async () => {
        const {artist_id, authorized}= this.props;
        if(artist_id && !authorized) {
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


    getArt(){
        axios.get('/api/gallery').then(res => {
            console.log(res.data)
            this.setState({
                artworks: res.data
            })
        })
    }

    deleteArt = id => {
        console.log(id);
        axios.delete(`/api/gallery/${id}`).then(res => {
          this.setState({
            artworks: res.data
          });
        });
      };

    handleChange(prop, val){
        
        this.setState({
            [prop]: val
        })
    }
//EDITING

    updateArt = id => {
        const { title, description, painting_url, price } = this.state;
        this.onEdit();
        console.log(id);
        axios.put(`/api/gallery/${id}`, { name: title,description: description,  painting_url: painting_url, price: price }).then(res => {
            console.log(res.data)
          this.setState({
            title: '',
            description: '',
            painting_url: '',
            price: 0,
            editing: false
          });
          
        });
      };
      onEdit = (prop, val) =>{
        console.log('editing')
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
            this.setState({
                title: '',
            description: '',
            painting_url: '',
            price: 0,
            artworks: [],
            img:''
            })
            this.getArt();
        } catch(err) {
            alert('Artwork submission failed')
        }
    }

    render() {
    
        const { username, img, balance } = this.props;
        const artworks = this.state.artworks.map((artwork) => {
            
            return (
                
                <div className='artworkdisplay'>
                    <h3>{artwork.name}</h3>
                    
                    <img src={artwork.painting_url} />
                    <p>{artwork.description}</p>
                    <p>{artwork.price}</p>
                    <Edit
                    key={artwork.id}
                    artwork={artwork}
                    updateArt={this.updateArt}
                    onEdit={this.onEdit}
                    />
                    
                        <button onClick={() => this.deleteArt(artwork.id)}>
                        X
                        </button>
                    
                </div>
                
            )
        })
        const { title, description, painting_url, price} = this.state
        return (
            
            <div className='inputbar'>
            <Navbar/>
            <div className='inputs'>
                
                <input value={title} onChange={e => this.handleChange('title',e.target.value)} placeholder='Title' />
                <input value={description}  onChange={e => this.handleChange('description',e.target.value)} placeholder='Description' />
                <input value={painting_url}  onChange={e => this.handleChange('painting_url',e.target.value)} placeholder='Image Url' />
                <input value={price}  onChange={e => this.handleChange('price',e.target.value)} placeholder='price' />
                <button onClick={this.postArt}>Submit Art</button>
                <button onClick={this.destroySession}>Logout</button>
            </div>
                <h1>{username}</h1>
                
                <p>{balance}</p>
                <div className='displayflex'>
                <div className='artistDisplay'>{artworks}</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Private);







