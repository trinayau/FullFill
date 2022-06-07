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
    const [isMember, setIsMember] = useState(false);

    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(`/communities`);
    }

    // checks if user is member of community
    useEffect(()=>{
        async function fetchData() {
            const response = await axiosInstance.get(`http://localhost:8000/api/communities/${id}/memberships/`);
            if(response.data.length > 0){
                setIsMember(true);
            }
        }
        fetchData();
    })

    // fetches description of community
    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get('http://localhost:8000/api/communities/' + id);
            setCommunityTitle(response.data.title)
            setCommunityDescription(response.data.description)
        }
        fetchData();
    }, [id])

    // fetches posts of community
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
// user joins community
const handleJoin = async(e)=>{
    e.preventDefault();
    const response = await axiosInstance.post('http://localhost:8000/api/communities/'+id+'/memberships/', {});
    console.log(response.data)
}

    return (
        <>
        {isMember ? 'Welcome member': <button onClick={handleJoin}>Join Community</button>}
        {/* if member is true, user can post */}
        {isMember &&  <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="text" name="description" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
        <input type="submit" value="submit"/>
    </form>}
       
        {communityTitle && communityTitle?
        <div>
            <h1>{communityTitle}</h1>
            <h2>{communityDescription}</h2>

            <h3>Posts</h3>
            {posts.length>0? posts.map((p, i)=> {
                return (
                    <div key={i} style={{margin:"15px"}} id={p.id}>
                        <h3>{p.title}</h3>
                        <p>User: {p.creator.first_name}</p>
                        <p>{p.description}</p>

        </div>
                )
            }
            ): "No posts"}
</div>: 'nothing to see here'}
</>
    )
}
 
export default Community;
