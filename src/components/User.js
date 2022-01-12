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
        <>
            <div>
                <img width = "400" src={this.props.info.avatar_url} />
            </div>
            <div>
                <h3>Information</h3>
                Username: {this.props.info.login} <br/>
                Name: {this.props.info.name} <br/>
                Followers: {this.props.info.followers} <br/>
                Repositories: {this.props.info.public_repos} <br/>
                Github: {this.props.info.html_url}
            </div>
        </>

        )}
}

export default User;