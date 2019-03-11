import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Edit extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false
        }
    }
    onEdit(artwork) {
        this.props.onEdit(artwork);
        this.setState({
            editing: true
        })
    }

    updateArt(id) {
        this.props.updateArt(id);
        this.setState({
            editing: false
        });
    }

    render() {
        const {artwork} = this.props
        return (
            <div>
                {this.state.editing? (
                    <button className='artistEditButton'  onClick={() => this.updateArt(artwork.id)}> Save Changes</button>

                ): (<button className='artistEditButton' onClick={() => this.onEdit(artwork.id)}>Edit</button>
                )}
            </div>
        )   
    }
}

export default Edit;
