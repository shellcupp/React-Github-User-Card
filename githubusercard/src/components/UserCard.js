import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
width: 25%;
background-color: teal;
margin: 3%;
padding: 1.5%;
`;

const UserCard = props => {
 return(
     <div className='UserCard'>
     <WrapperDiv>
     <h2>{props.user.name}</h2>
     <img width='75%' src={props.user.avatar_url} alt="User Avatar" />
     <p>{props.user.bio}</p>
     <p> Profile: <a href={props.user.html_url}>{props.user.login}</a></p>
     </WrapperDiv>
     </div>
 )   
}
export default UserCard