import React from "react";
import { useNavigate } from "react-router-dom";
import "./err404.css";





const NotFoundPage = () => {

        const navigate = useNavigate();
      
        function handleClick() {
          navigate(-1);
        }


    return (<>
        <div className="err_page">
            <div className="err_page_left">
                <img src={require('./err_404.png')} width="360px" height="250px" />
            </div>
            <div className="err_page_right">
                <h1>404</h1> <br></br>
                <h4>OOPS. Looks like the page you're looking for does not exist</h4> <br></br>
                <p>Don't worry. Since you're valuable to us we will bring you back to safety</p> <br></br>
                <button onClick={handleClick} className="err_btn">Back</button> <br></br> <br></br>
                <h3 className="credit">Click here if you would like to <a href="/">Login</a> or here if you would like to <a href="/register">register</a></h3>
            </div>
        </div>
    </>);
}

export default NotFoundPage;
