import React, {Component} from 'react';
import Axios from 'axios';
import UserCard from './components/UserCard';
import FollowersList from './components/FollowersList';

import './App.css';
//First I fetched the user data and set it to state
class App extends Component {
  state = {
    user:[],
    follower: []
   
  }
  componentDidMount() {
    Axios 
    .get('https://api.github.com/users/shellcupp')
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err => {
      console.log('There is an error', err)
    })
    //get and set up state of my followers
    Axios
    .get('https://api.github.com/users/shellcupp/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        follower: res.data
      })
    })
    .catch(err => {
      console.log('There is an error', err)
    })
  }
  //In the return I am setting up state for passing as data as props.
  render(){
  return (
    <div className="App">
        <h1>React Github User Card</h1>
        <div className='usercard'>
            <UserCard
              user={this.state.user}
              name={this.state.user.name}
              avatar_url={this.state.user.avatar_url}
              bio={this.state.user.bio}
              html_url={this.state.user.html_url}
              />
          </div>
          <div className='FollowersList'>
          <h2>{this.state.user.name}'s Followers</h2>
          {this.state.follower.map(follower => (   
        <FollowersList
        key={follower.id}
        follower={follower}
        name={follower.login}
        avatar_url={follower.avatar_url}
        html_url={follower.html_url}
         />
         ))}
         </div>
      </div>
  );
}
}
export default App;
