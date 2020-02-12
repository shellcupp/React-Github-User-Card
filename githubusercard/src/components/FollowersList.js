import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
width: 25%;
background-color: teal;
margin: 3%;
padding: 1.5%;
`;

const FollowersList = props => {
    
        return (
            <WrapperDiv>
            <div className="followersList" >
            <h2>{props.follower.followername}</h2>
            <img width='75%' src={props.follower.avatar_url} alt="User Avatar" />
            <p> Profile: <a href={props.follower.html_url}>{props.follower.login}</a></p>
                
            </div>
            </WrapperDiv>
        )
        }
   export default FollowersList;