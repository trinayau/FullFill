import React, { useEffect, useState, useContext } from 'react'
import axiosInstance from '../utils/axios';
import AuthContext from "../context/AuthContext";
 const Communities = () => {

    const [communities, setCommunities] = useState(null)
    // forms stuff
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')

    const {user} = useContext(AuthContext)

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('http://localhost:8000/api/communities/');
            setCommunities(response.data)
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axiosInstance.post('http://localhost:8000/api/communities/', {
            title: title,
            description: description,
            location: location
        });
        
        setCommunities([...communities, response.data])
    }

  return (
    <div>
    
    {user ? 
    <div>
    <h3>Make a new community:</h3><br/>
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Name" onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="text" name="description" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
        <input type="text" name="Location" placeholder="Location" onChange={(e)=>{setLocation(e.target.value)}} />
        <input type="submit" value="submit"/>
    </form>
    </div>: "Signup or login to make a new community or join one!"
    }
    <h1>All Communities</h1>
    {communities && communities.map((c, i)=> {
            return (
                <div key={i} style={{margin:"15px"}} id={c.id}>
                    <h3>{c.title}</h3>
                    <h5>{c.description}</h5>
                    <p>{c.location}</p>
                    {user? <a href={`/communities/`+ c.id}><button>Go to Community</button></a>:null}
                </div>
            )
    })}
    </div>
  )
 }

export default Communities
