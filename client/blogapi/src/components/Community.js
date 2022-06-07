import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const Community = () => {
    const {id} = useParams();
    const [communityTitle, setCommunityTitle] = useState(null);
    const [communityDescription, setCommunityDescription] = useState('');
    const [posts, setPosts] = useState('');

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(`/communities`);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:8000/api/communities/' + id);
            setCommunityTitle(response.data.title)
            setCommunityDescription(response.data.description)
           
        }
        fetchData();
    }, [id])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:8000/api/communities/' + id + '/posts/');
            console.log(response.data)
            setPosts(response.data)

        }
    fetchData();
}, [])

    return (
        <>
        {communityTitle?
        <div>
            <h1>{communityTitle}</h1>
            <h2>{communityDescription}</h2>

            <h3>Posts</h3>
            {posts.length>0? posts.map((p, i)=> {
                return (
                    <div key={i} style={{margin:"15px"}} id={p.id}>
                        <h1>{p.title}</h1>
                        <h2>{p.description}</h2>
                        <h3>{p.location}</h3>

        </div>
                )
            }
            ): "No posts"}
</div>: handleRedirect()}
</>
    )
}
 
export default Community;
