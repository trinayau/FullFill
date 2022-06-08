import { Avatar, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axios';
import dayjs from 'dayjs'

const PublicProfilePage = () => {
    const { username } = useParams();

    const [user, setUser] = useState(null)
    const [communities, setCommunities] = useState(null)
// fetch user's details
    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get(`http://localhost:8000/api/user/checkuserid/${username}/`);
            const userInfo = response.data
            console.log(userInfo)
            setUser(response.data)
            const allCommunities = await axiosInstance.get(`http://localhost:8000/api/communities/usermemberships/${userInfo[0].id}/`);
            setCommunities(allCommunities.data)
                }
        fetchData();

    }, [username, setCommunities]);

const checkCommunityLength = () => {
    if(communities){
        const totalLength = communities.reduce((a, obj)=> a + Object.keys(obj).length, 0)
        return totalLength/4
    }
}

const handleEmail = (email) => {
    const emailLink = `mailto:${email}`
    window.location.href = emailLink
}

  return (
    <div className='d-flex flex-column text-center justify-content-center'>  
    <Avatar alt={user?user.username:'User'} style={{alignSelf:'center'}}src="/static/images/avatar/2.jpg" sx={{height:"150px", width:"150px",backgroundColor:"#adc178", fontSize:"3rem"}}/>
        <Typography variant="h4" noWrap sx={{ml: 2}}> <p>{user? user[0].user_name+"'s profile":null}</p></Typography>
        <Typography variant="h6" noWrap sx={{ml: 2}}> <p>First joined: {user? dayjs(user[0].start_date).format('DD/MM/YYYY'):null}</p></Typography>
        Member of {communities ? checkCommunityLength() : '0'} communities
        <Button variant="contained" color="success" sx={{width:"100%", maxWidth:"200px",mt:2, alignSelf:"center"}} onClick={e=>handleEmail(user[0].email)}>
            Email
        </Button>
    </div>
  )
}

export default PublicProfilePage
