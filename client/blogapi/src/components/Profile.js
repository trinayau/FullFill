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
    <>
        <h1>{user? user.username +"'s" :'null'} Profile</h1>
        <h2>These are the communities you have joined:</h2>
        {communities? communities.map((c, i)=> {
            return (
                <div key={i} style={{margin:"15px"}} id={c.id}>
                    <h1>{c.title}</h1>
                    <h2>{c.description}</h2>
                    <h3>{c.location}</h3>
                    <a href={`/communities/`+ c.id}><button>Go to Community</button></a>
                </div>
            )
        }
  )
  : "No communities, why not join one today?"}
</>
  )
}

export default Profile
