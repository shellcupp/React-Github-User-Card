import React, {Component} from 'react';
import Axios from 'axios';
import UserCard from './components/UserCard'
import './App.css';

class App extends Component {
  state = {
    user:[],
    followers: []
  }
  componentDidMount() {
    Axios 
    .get('https://api.github.com/users/shellcupp')
    .then(res => {
      console.log(res.data)
      
    })
  }
  render(){
  return (
    <div className="App">
     <h1>Github User Card</h1>
     <div className='UserCard'>
     <UserCard
     user={this.state.user}
     />
     </div>
    </div>
  );
}
}
export default App;
