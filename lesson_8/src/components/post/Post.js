import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Post() {
    // const news = useParams();
    //
    // console.log(news)
    const [postInfo, setPostInfo] = useState({})
    const navigate = useNavigate()
    const post = useParams()


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
            .then(response => response.json())
            .then(data => setPostInfo(data))
    }, [])

    return (
        <div>
            <button onClick={()=> navigate(-1)}>to back</button>
            <h1>{postInfo.title}</h1>
            <p>{postInfo.body}</p>
        </div>
    );
}

export default Post;