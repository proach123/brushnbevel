import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {updateUser} from '../../geese/reducer'
import {clearUser} from '../../geese/reducer'

class Private extends Component {

    componentDidMount() {
        this.getUser();
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

    destroySession = async () => {
        await axios.post('/auth/logout')
        this.props.clearUser();
        this.props.history.push('/login')
    }

    render() {
        const { username, img, balance } = this.props;
        return (
            <div>
                <button onClick={this.destroySession}>Logout</button>
                <h1>{username}</h1>
                <img src={img} alt='user' />
                <p>{balance}</p>
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


