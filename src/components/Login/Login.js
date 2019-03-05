import React, { Component } from 'react';
import './Login.css'
import axios from 'axios'
import { connect } from 'react-redux'
import {updateUser} from './../../geese/reducer'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.register = this.register.bind(this)
    }
    componentDidMount(){
        this.checkUser();
    }
    checkUser = async () => {
        const {id}= this.props;
        if(!id) {
            try {
                let res = await axios.get('api/current')
                this.props.updateUser(res.data)
                this.props.history.push('/private')
                 } catch (err) {
                 }
        } else {
            this.props.history.push('/private')
        }
    }
    handleChange(prop, val){
        console.log(prop, val)
        this.setState({
            [prop]: val
        })
    }

    async register(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        try {

            let res = await axios.post('/auth/register', user);
            this.props.updateUser(res.data);
            this.props.history.push('/private')
        } catch(err) {
            alert('Would you kindly choose a unique username gentleman or lady')
        }
    }
    login = async () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            let res = await axios.post('/auth/login', user);
            this.props.updateUser(res.data)
            this.props.history.push('/private')
        } catch(err) {
            alert('Incorrect username or password')
        }
    }
    render() {
        const {username, password} = this.state
        return (
            <div>
               <input value={username} onChange={e => this.handleChange('username',e.target.value)} />
               <input type='password' value={password} onChange={e => this.handleChange('password', e.target.value)} />
               <button onClick={this.register}>Register</button>
               <button onClick={this.login}>Login </button>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => {
    return {
        id: reduxState.id
    }
}

const mapDispatchToProps = {
updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)