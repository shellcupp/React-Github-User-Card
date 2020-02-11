import React from 'react';

const UserCard = props => {
 return(
     <div className='UserCard'>
     <h2>{props.user.name}</h2>
     </div>
 )   
}
export default UserCard