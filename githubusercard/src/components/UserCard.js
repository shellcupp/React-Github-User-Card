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
     <img width='70%' src={props.user.image} alt='profile'/>
     <p>{props.user.bio}</p>
     <a href={props.user.githublink}>Link to Github</a>
     </WrapperDiv>
     </div>
 )   
}
export default UserCard