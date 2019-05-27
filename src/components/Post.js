import React, { Component } from 'react'

class Post extends Component {
    state = { 
        id: null
     }
     componentDidMount()  {
       let id = this.props.match.params.post_id;
       this.setState({
           id: id
       })
     }
     
    render() { 
        return ( 
            <div className="container">
                <h3>{this.state.id}</h3>
            </div>
         );
    }
}
 
export default Post;