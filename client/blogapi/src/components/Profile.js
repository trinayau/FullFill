import { Avatar, Alert, Snackbar, Typography, Button, Card } from '@mui/material';
import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import axiosInstance from '../utils/axios';
import { useParams } from 'react-router-dom';
// list user's joined communities and set it in state, link to each community
const Profile = () => {
    let {user} = useContext(AuthContext)

    const [communities, setCommunities] = useState(null)

    const [recipes, setRecipes] = useState(null)

    const [state, setState] = React.useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;

    useEffect(()=>{
        // check if url params has redirect=true
       if(window.location.href==='https://fullfill.netlify.app/profile?redirect=true'){
           setState({open: true, vertical: 'top', horizontal: 'center'})
       } else {
              setState({open: false, vertical: 'top', horizontal: 'center'})
       }
    },[])

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('https://fullfill-api.onrender.com/api/communities/mycommunities');
            setCommunities(response.data)
        }
        fetchData();
    }, []);

// get recipes
    useEffect(() => {
      async function fetchData() {
          const response = await axiosInstance.get('https://fullfill-api.onrender.com/api/communities/recipes/favourites/');
          setRecipes(response.data)
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
    <div className="d-flex flex-column text-center justify-content-center">
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Welcome to FullFill, {user.username}!
        </Alert>
      </Snackbar>

      <Avatar
        alt={user ? user.username : "User"}
        style={{ alignSelf: "center" }}
        src="/static/images/avatar/2.jpg"
        sx={{
          height: "150px",
          width: "150px",
          backgroundColor: "#adc178",
          fontSize: "3rem",
        }}
      />
      <Typography variant="h6" noWrap sx={{ ml: 2 }}>
        {" "}
        <p>{user ? user.username + "'s profile" : null}</p>
      </Typography>
      <div className="d-flex">
      <div className="community-container container">
      <h3>Communities Joined:</h3>
      {communities
        ? communities.map((c, i) => {
            return (
              <Card key={i} style={{ marginBottom:"10px", padding:"5px" }} id={c.id}>
                <h4>{c.title}</h4>
                <p>{c.description}</p>
                <p>{c.location}</p>
                <a href={`/communities/` + c.id}>
                  <Button
                    sx={{
                      width: "100%",
                      maxWidth: "200px",
                      alignSelf: "center",
                      color:'#EF645E'
                    }}
                  >
                    Visit
                  </Button>
                </a>
              </Card>
            );
          })
        : "No communities, why not join one today?"}
    </div>
    
    <div className="recipe-container container">
      <h3>Recipes saved:</h3>
    {recipes ? recipes.map((r, i) => {
        return (
          <Card key={i} style={{ padding:"10px" }} id={r.id}>
            <a href={`https://www.themealdb.com/meal/${r.recipe_id}`} target='_blank'><h3>{r.title}</h3></a>
            <p>{r.category} Recipe</p>
            <img className="img-fluid"src={r.img} alt="recipe" style={{height:'150px', borderRadius:'15px'}}/>
            <a href={`/recipes/` + r.id}>
            </a>
          </Card>
        );

    }  
    ) : "No recipes, why not save one today?"}
    </div>
    </div>
    </div>
  );
}

export default Profile
