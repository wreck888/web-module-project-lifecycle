import React from 'react';

class Follower extends React.Component {
    componentDidMount() {
        console.log(` Has Mounted.`);
      }
    render() {
        
        return(
            <div>
                <div>
                <img width = "300" src={this.props.followers.avatar_url} /> 
                </div>
                <div>
                 {this.props.followers.login}
                </div>
            </div>
        );
    }
}

export default Follower; 