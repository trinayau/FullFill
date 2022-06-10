import React, { useEffect, useState, useContext } from "react";
import axiosInstance from "../utils/axios";
import AuthContext from "../context/AuthContext";
import Add from "./Add";

import {
  Card,
  Box,
  Fab,
  Modal,
  Tooltip,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const Communities = () => {
  const [communities, setCommunities] = useState(null);
  //   forms stuff
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [location, setLocation] = useState("");

  // modal stuff
  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(
        "https://fullfill-server.herokuapp.com/api/communities/"
      );
      setCommunities(response.data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const communitiesData = {
      title: data.get("title"),
      description: data.get("description"),
      location: data.get("location"),
    };
    console.log(communitiesData)

    const response = await axiosInstance.post(
      "https://fullfill-server.herokuapp.com/api/communities/",
      communitiesData
    );
    console.log(response.data);
    console.log(communities);
    setOpen(false);
    setCommunities([...communities, response.data]);
  };

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  });

  return (
    <div>
      <h1 className="main-titles">All Communities</h1>
      {communities &&
        communities
          .slice(0)
          .reverse()
          .map((c, i) => {
            return (
              <Card
                key={i}
                style={{
                  margin: "15px",
                  padding: "20px",
                  width: "70%",
                  margin: "0px auto",
                }}
                id={c.id}
              >
                <h3>{c.title}</h3>
                <h6>{c.description}</h6>
                <p>{c.location}</p>
                {user ? (
                  <a href={`/communities/` + c.id}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#EF645E" }}
                    >
                      Go to Community
                    </Button>
                  </a>
                ) : null}
              </Card>
            );
          })}

      {user ? (
        <div>
          <br />
          <br />
          {/* <h3>Make a new community:</h3> */}
          <div style={{ height: "100px" }}></div>

          <Tooltip
            onClick={(e) => setOpen(true)}
            title="Add"
            sx={{
              position: "absolute",
              top: 70,
              right: 10
            //   left: { xs: "calc(50% - 170px)", md: 700 },
            }}
          >
            <Fab color="error" aria-label="add">
              <AddIcon />
            </Fab>
          </Tooltip>
          <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              width={400}
              height={280}
              bgcolor={"background.default"}
              color={"text.primary"}
              p={3}
              borderRadius={5}
            >
              <Typography
                variant="h6"
                color="gray"
                textAlign="center"
              ></Typography>
              <UserBox>
                <Avatar
                  src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  sx={{ width: 30, height: 30 }}
                />
                <Typography fontWeight={500} variant="span">
                  Make A New Community
                </Typography>
              </UserBox>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Name"

                  //   onChange={(e) => {
                  //     setTitle(e.target.value);
                  //   }}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"

                  //   onChange={(e) => {
                  //     setDescription(e.target.value);
                  //   }}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"

                  //   onChange={(e) => {
                  //     setLocation(e.target.value);
                  //   }}
                />
                <input type="submit" value="submit" />

                {/* <Add /> */}
              </form>

              {/* <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button>Post</Button>
                <Button sx={{ width: "100px" }}>
                  <DateRange />
                </Button>
              </ButtonGroup> */}
            </Box>
          </StyledModal>
        </div>
      ) : (
        "Signup or login to make a new community or join one!"
      )}
    </div>
  );
};

export default Communities;
