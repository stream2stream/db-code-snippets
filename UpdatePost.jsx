import React, { useState, useEffect } from 'react';
import PostView from './PostView';
import SuccessMessage from './SuccessMessage';
import BlogDataService from '../services/blog_service';
import { useParams } from "react-router-dom";

export default function UpdatePost() {
    // this component manages all the state but uses another component
    // PostView to render the form UI
    // This is the Container and Presentational Pattern

    const [postID, setPostID] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [updated_success, setUpdatedSuccess] = useState(false);

    let { post_id } = useParams();

    // ensure the post to be updated is loaded
    useEffect(() => {
        if (title === '') {
            getPostByID(post_id);
        }
    },
        [post_id, title]
    );

    function handleSubmit(e) {
        e.preventDefault();
        update_post();
    }

    function handleChangeTitle(e) {
        setTitle(e.target.value);
    }

    function handleChangeContent(e) {
        setContent(e.target.value);
    }
    function getPostByID(postID) {
        // TODO - you need to call the backend to get the post
    }
    function update_post() {
        // TODO - you need to make a call to the backend to update the post
    }
    return (
        <div>
            {!updated_success &&
                // TODO - use the PostView component, see CreatePost.js
            }
            {updated_success &&
                // TODO - Use the SuccessMessage component
            }
        </div>
    );
}

