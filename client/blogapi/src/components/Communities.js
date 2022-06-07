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
            console.log(response.data)
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
        console.log(response)
    }

  return (
    <div>
    Make a new community:<br/>
    {/* I forgot how to do react forms so change if wrong :) */}
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Name" onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="text" name="description" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
        <input type="text" name="Location" placeholder="Location" onChange={(e)=>{setLocation(e.target.value)}} />
        <input type="submit" value="submit"/>
    </form>
    <h1>All Communities</h1>
    {communities && communities.map((c, i)=> {
            return (
                <div key={i} style={{margin:"15px"}} id={c.id}>
                    <h1>{c.title}</h1>
                    <h2>{c.description}</h2>
                    <h3>{c.location}</h3>
                    {user? <a href={`/communities/`+ c.id}><button>Go to Community</button></a>:null}
                </div>
            )
    })}
    </div>
  )
 }

export default Communities
