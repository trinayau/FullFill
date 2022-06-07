import React from 'react';

const PostLoading = (Component) => {
    return (
        function PostLoadingComponent({isLoading, ...props}) {
            if(!isLoading) return <Component {...props}/>;
            return <p style={{fontSize: '25px'}}>Loading...</p>;
        }
    );
}
 
export default PostLoading;
