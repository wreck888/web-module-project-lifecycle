import React from 'react';
import axios from 'axios';

class User extends React.Component {

    // componentDidMount(){
    //     axios.get("https://api.github.com/users/wreck888")
    //     .then(resp=> {
    //         console.log(resp)
    //         this.setState({
    //             ...this.state,
    //             user: resp.data.name,
    //             info: resp.data

    //         })
    //     })
       
    // }

    render(){
        // console.log(this.props.user)
        return (
        <div>
            <div>
                <img src={this.props.info.avatar_url} />
            </div>
            <div>
                <h3>Information</h3>
                {this.props.info.login}
                {this.props.info.name}
                {this.props.info.followers}
                {this.props.info.public_repos}
                {this.props.info.html_url}
            </div>
        </div>

        )}
}

export default User;