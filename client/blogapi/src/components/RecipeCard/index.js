import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, IconButton, Snackbar } from "@mui/material";
import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import axiosInstance from "../../utils/axios";
import AuthContext from "../../context/AuthContext";

const RecipeCard = ({ recipe }) => {

  const { user } = useContext(AuthContext);

  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  const [message, setMessage] = React.useState(null);

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const [check, setCheck] = React.useState(false);

  const { vertical, horizontal, open } = state;

  const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setState({  vertical: 'top',
        horizontal: 'center', open: false });
      };

      const handleFavorite = async(e) => {
        e.preventDefault()
        console.log(strMeal, strMealThumb)
        const response = await axiosInstance.post('https://fullfill-api.onrender.com/api/communities/recipes/favourites/', {
          recipe_id: idMeal,
          img: strMealThumb,
          title: strMeal,
          category: strCategory
        });

        setMessage(response.data.message)
        if (response.data.message === 'Added as favourite') {
          setCheck(true)
        }

        setState({open: true, vertical: 'top', horizontal: 'center'})
      }

  return (
    <div className="card">
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{
      vertical: "top",
      horizontal: "center"
   }}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
           {message}
          </Alert>
        </Snackbar>
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body" style={{border:"None"}}>
        <span className="category">{strCategory} Recipe</span>
        <h6 className="recipes-h3">{strMeal}</h6>
        <a
          className="recipes-a"
          href={`https://www.themealdb.com/meal/${idMeal}`}
          target="_blank"
        >
          Ingredients
        </a>
        {user ? <IconButton aria-label="add to favorites" onClick={(e)=>handleFavorite(e)}>
          <Checkbox checked={check}icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton> : null}
      
      </div>
    </div>
  );
};

export default RecipeCard;
