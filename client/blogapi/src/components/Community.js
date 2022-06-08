import { Card, Avatar, Typography, IconButton, Snackbar, Alert, Checkbox, CardActions, Chip } from "@mui/material";
import { Favorite, FavoriteBorder, Share, SentimentSatisfiedAltOutlined, SentimentSatisfiedAlt } from "@mui/icons-material";
import dayjs from "dayjs"

import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";

const Community = () => {
    const {id} = useParams();
    const randomColours = ['#FFCC60', '#FFAB5F', '#A5BC79', '#F0CCCC', '#78B591', '#EF645E', '#F9EBCF']
    const getRandomColour = () => {
        return randomColours[Math.floor(Math.random() * randomColours.length)]
    }
    const [communityTitle, setCommunityTitle] = useState(null);
    const [communityDescription, setCommunityDescription] = useState('');
    const [posts, setPosts] = useState('');

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isMember, setIsMember] = useState(false);
//snackbar
const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const navigate = useNavigate();
const [alertMessage, setAlertMessage] = useState('');

    // checks if user is member of community
    useEffect(()=>{
        async function fetchData() {
            const response = await axiosInstance.get(`https://fullfill-server.herokuapp.com/api/communities/${id}/memberships/`);
            if(response.data.length > 0){
                setIsMember(true);
            }
        }
        fetchData();
    })

    // fetches description of community
    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('https://fullfill-server.herokuapp.com/api/communities/' + id);
            setCommunityTitle(response.data.title)
            setCommunityDescription(response.data.description)
        }
        fetchData();
    }, [id])

    // fetches posts of community
    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('https://fullfill-server.herokuapp.com/api/communities/' + id + '/posts/');
            setPosts(response.data)

        }
    fetchData();
}, [id])

// handle post submit
const handleSubmit = async (e, reason) => {
    e.preventDefault();

    const response = await axiosInstance.post('https://fullfill-server.herokuapp.com/api/communities/posts/', {
        title: title,
        description: description,
        community: id
    });
    setTitle('');
    setDescription('');
    setPosts([...posts, response.data])
    setAlertMessage('Your new post has been created!')
    setState({ open: true, vertical: 'top',
    horizontal: 'center', });
}
// user joins community
const handleJoin = async(e)=>{
    e.preventDefault();
    const response = await axiosInstance.post('https://fullfill-server.herokuapp.com/api/communities/'+id+'/memberships/', {});
    setAlertMessage(response.data.message)
    setState({ open: true, vertical: 'top',
    horizontal: 'center', });
}

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({  vertical: 'top',
    horizontal: 'center', open: false });
  };

  const handleClick = (username) => {
    navigate(`/profile/${username}`);
  }

    return (
      <>
        {isMember ? (
          "Welcome member"
        ) : (
          <button onClick={handleJoin}>Join Community</button>
        )}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
        {/* if member is true, user can post */}
        {isMember && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input type="submit" value="submit" />
          </form>
        )}

        {communityTitle && communityTitle ? (
          <div>
            <h1>{communityTitle}</h1>
            <h2>{communityDescription}</h2>

            <h3 className="my-2">Posts</h3>
            {posts.length > 0
              ? posts.slice(0).reverse().map((p, i) => {
                  return (
                    <Card
                      key={i}
                      id={p.id}
                      sx={{
                        marginBottom: "15px",
                        p: "15px",
                        maxWidth: "700px",
                      }}
                    >
                      <IconButton>
                        <Avatar
                          alt={p.creator.user_name}
                          src="/static/images/avatar/2.jpg"
                          sx={{ backgroundColor: getRandomColour() }}
                        />
                        <Typography variant="h6" noWrap sx={{ ml: 2 }} onClick={e=> handleClick(p.creator.user_name)}>
                          {p.creator.user_name}
                        </Typography>
                      </IconButton>
                      <h4>{p.title}</h4>
                      <p>{p.description}</p>

                    <Chip label={"Posted "+dayjs(p.created_at).format('DD/MM/YYYY')}/>
                      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Checkbox icon ={<SentimentSatisfiedAltOutlined />} checkedIcon={<SentimentSatisfiedAlt sx={{color:"blue"}} />} />
          </IconButton>
          
        </CardActions>
                    </Card>
                  );
                })
              : "No posts"}
          </div>
        ) : (
          "nothing to see here"
        )}
      </>
    );
}
 
export default Community;
