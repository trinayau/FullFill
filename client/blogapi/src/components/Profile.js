import React, {useContext} from 'react'
import AuthContext from "../context/AuthContext";
// list user's joined communities and set it in state, link to each community
const Profile = () => {
    let {user} = useContext(AuthContext)
  return (
    <>
        <h1>{user? user.username +"'s" :'null'} Profile</h1>
        <h2>These are the communities you have joined:</h2>
    </>
  )
}

export default Profile
