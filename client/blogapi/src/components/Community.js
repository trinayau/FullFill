import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
const Community = () => {
    const {id} = useParams();
    
    const [communityTitle, setCommunityTitle] = useState(null);
    const [communityDescription, setCommunityDescription] = useState('');
    const [posts, setPosts] = useState('');

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(`/communities`);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('http://localhost:8000/api/communities/' + id);
            setCommunityTitle(response.data.title)
            setCommunityDescription(response.data.description)
        }
        fetchData();
    }, [id])

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('http://localhost:8000/api/communities/' + id + '/posts/');
            console.log(response.data)
            setPosts(response.data)

        }
    fetchData();
}, [id])

const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axiosInstance.post('http://localhost:8000/api/communities/posts/', {
        title: title,
        description: description,
        community: id
    });
    setPosts([...posts, response.data])
    console.log(response.data)
}

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="text" name="description" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
        <input type="submit" value="submit"/>
    </form>
        {communityTitle && communityTitle?
        <div>
            <h1>{communityTitle}</h1>
            <h2>{communityDescription}</h2>

            <h3>Posts</h3>
            {posts.length>0? posts.map((p, i)=> {
                return (
                    <div key={i} style={{margin:"15px"}} id={p.id}>
                        <h1>{p.title}</h1>
                        <p>User: {p.creator.first_name}</p>
                        <p>{p.description}</p>

        </div>
                )
            }
            ): "No posts"}
</div>:null}
</>
    )
}
 
export default Community;
