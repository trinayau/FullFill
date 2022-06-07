import { Avatar, Alert, Snackbar, Typography, Button } from '@mui/material';
import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import axiosInstance from '../utils/axios';
import { useParams } from 'react-router-dom';
// list user's joined communities and set it in state, link to each community
const Profile = () => {
    let {user} = useContext(AuthContext)
    const [communities, setCommunities] = useState(null)

    const [state, setState] = React.useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;

    useEffect(()=>{
        // check if url params has redirect=true
       if(window.location.href==='http://localhost:3000/profile?redirect=true'){
           setState({open: true, vertical: 'top', horizontal: 'center'})
       } else {
              setState({open: false, vertical: 'top', horizontal: 'center'})
       }
    },[])

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('https://fullfill-server.herokuapp.com/api/communities/mycommunities');
            setCommunities(response.data)
        }
        fetchData();
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setState({  vertical: 'top',
        horizontal: 'center', open: false });
      };

  return (
    <div className='d-flex flex-column text-center justify-content-center'>  
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Welcome to FullFill, {user.username}!
          </Alert>
        </Snackbar>

        <Avatar alt={user?user.username:'User'} style={{alignSelf:'center'}}src="/static/images/avatar/2.jpg" sx={{height:"150px", width:"150px",backgroundColor:"#adc178", fontSize:"3rem"}}/>
        <Typography variant="h6" noWrap sx={{ml: 2}}> <p>{user? user.username+"'s profile":null}</p></Typography>
        <h3>These are the communities you have joined:</h3>
        {communities? communities.map((c, i)=> {
            return (
                <div key={i} style={{margin:"15px"}} id={c.id}>
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                    <p>{c.location}</p>
                    <a href={`/communities/`+ c.id}> 
                    <Button variant="contained" color="secondary" sx={{width:"100%", maxWidth:"200px",mt:2, alignSelf:"center", backgroundColor:"#FFAB5F"}}>
            Visit
        </Button></a>
                </div>
            )
        }
  )
  : "No communities, why not join one today?"}
</div>
  )
}

export default Profile
