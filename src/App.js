import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
import styled from 'styled-components';

const StyledApp = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #2D82B7;
    
`
const StyledDiv = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const StyledNav = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: black;
    
`
const StyledFLDiv = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
    color: black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
   
    
    
`
class App extends React.Component {
  state = {
    user: "",
    followers: [],
    info: {}
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/wreck888")
      .then(resp=> {
          console.log(resp)
          this.setState({
              ...this.state,
              user: resp.data.login,
              info: resp.data
          })
    })
    axios.get("https://api.github.com/users/wreck888/followers")
        .then(resp=> {
          console.log(resp.data)
          this.setState({
            ...this.state,
            followers: resp.data
          })
        })
        console.log(this.state.followers)
  }
  

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user){
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(resp=> {
        console.log(resp.data)
        this.setState({
          ...this.state,
          followers: resp.data
        })
      })
    } 
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      user: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault();
    const user = this.state.user;

    axios.get(`https://api.github.com/users/${user}`)
      .then(resp => {
        console.log(resp.data)
          this.setState({
            ...this.state,
            user: resp.data.login,
            info: resp.data
          })
      })

  }

  render() {
    return(
    <StyledApp>
      <StyledNav>
        <h1>Github Info </h1><br/>
        <form>
          <input value={this.state.user} onChange={this.handleChange}/>
          <button onClick={this.handleSearch}>Search User</button>
        </form>
      </StyledNav>
      <h2>Github Handle <br/></h2>
      <StyledDiv>
        <User user={this.state.user} info={this.state.info} /> 
      </StyledDiv>
      <h2>Followers:</h2>
      < StyledFLDiv>
        <FollowerList followers={this.state.followers}/>
      </ StyledFLDiv>
    </StyledApp>
    
    );

  }
}

export default App;
