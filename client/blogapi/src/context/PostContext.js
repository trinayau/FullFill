import { createContext, useState } from "react";

const PostContext = createContext({});

export const PostProvider = ({ children }) => {
    const [post, setPost] = useState(null);
    let contextData = {
        post: post,
        setPost: setPost,
    };
    return (
        <PostContext.Provider value={contextData}>
        {children}
        </PostContext.Provider>
    );
}

export default PostContext;
