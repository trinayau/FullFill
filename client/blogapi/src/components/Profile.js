import { Avatar, IconButton, Typography } from '@mui/material';
import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import axiosInstance from '../utils/axios';
// list user's joined communities and set it in state, link to each community
const Profile = () => {
    let {user} = useContext(AuthContext)
    const [communities, setCommunities] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('http://localhost:8000/api/communities/mycommunities');
            setCommunities(response.data)
        }
        fetchData();
    }, []);

  return (
    <div className='d-flex flex-column text-center justify-content-center'>  
        <Avatar alt={user?user.username:'User'} style={{alignSelf:'center'}}src="/static/images/avatar/2.jpg" sx={{height:"150px", width:"150px",backgroundColor:"#adc178", fontSize:"3rem"}}/>
        <Typography variant="h6" noWrap sx={{ml: 2}}> <h1>{user? user.username+"'s profile":null}</h1></Typography>
        <h3>These are the communities you have joined:</h3>
        {communities? communities.map((c, i)=> {
            return (
                <div key={i} style={{margin:"15px"}} id={c.id}>
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                    <p>{c.location}</p>
                    <a href={`/communities/`+ c.id}><button>Go to Community</button></a>
                </div>
            )
        }
  )
  : "No communities, why not join one today?"}
</div>
  )
}

export default Profile
