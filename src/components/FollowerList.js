import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
    
    componentDidMount() {
        console.log("Follower List: Component Has Mounted.")
      }
    render() {
        return (
            <>
            {this.props.followers.map(followers => (
            <Follower key={followers.id} followers={followers}/>
            ))}
            </>  
        )
    }
}

export default FollowerList; 