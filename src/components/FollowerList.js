import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    
    componentDidMount() {
        console.log("Follower List: Component Has Mounted.")
      }
    render() {
        return (
            <div>
            <h2>Followers:</h2>
            {this.props.followers.map(followers => (
            <Follower key={followers.id} followers={followers}/>
            ))}
            </div>
        )
    }
}

export default FollowerList; 