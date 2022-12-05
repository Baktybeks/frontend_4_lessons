import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";


function PostPage() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())

            .then(data => setPosts(data))
    }, [])

    return (
        <>
            {/*<NavLink to='/posts/news5'>post</NavLink>*/}
            {/*<NavLink to='/posts/news2'>post2</NavLink>*/}
            {/*<NavLink to='/posts/news3'>post3</NavLink>*/}
            <button onClick={()=> navigate(-1)}>back</button>
            {posts.slice(0, 10).map(post => <p>
                {post.title}
                <NavLink to={`/posts/${post.id}`}> more....</NavLink>

            </p>)}
        </>
    );
}

export default PostPage;