import React from 'react';
import styled from 'styled-components';
//Third I set up followers cards and passed in follower data as props
const WrapperDiv = styled.div`
width:auto;
background-color: teal;
margin: 3%;
padding: 3%;
`;

const FollowersList = props => {
    
        return (
            <div className="followersList" >
            <WrapperDiv>
            <h2>{props.follower.login}</h2>
            <img width='75%' src={props.follower.avatar_url} alt="User Avatar" />
            <p> Profile: <a href={props.follower.html_url}>{props.follower.login}</a></p>
            </WrapperDiv>   
            </div>
            
        )
        }
   export default FollowersList;