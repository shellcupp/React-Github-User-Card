import React, {Component} from 'react';
import Axios from 'axios';
import UserCard from './components/UserCard'
import FollowersList from './components/FollowersList'
import './App.css';

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
     
        follower={follower}
        followername={follower.login}
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
