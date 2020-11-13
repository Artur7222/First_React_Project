import React, { Component } from 'react'; 
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://lh3.googleusercontent.com/proxy/jb8CV_XZfmwu-nRj6ssuMsCg4eOaEJKmQVEr8TwUWQXJlKQz4mCjbg0aO_mJ1TeUL5_eBi5pHlc_AIbKl0b3_I81JZOeJvVjJL49ahepvJiere7Ja8IGngJjD8o4sz2JAsJSxGkEr-r0Gqg9ex_wBriWvsGSRPwQvMjfwLtBFKtdiRT26lQEIbb-YamC-BiJM2PkfyAiCTKTqrSID2V8S24nLm7m28PG16hLoYMtzChYAmQEm97kTBqJSybejAVLrkgk12lLZjKvk2Pt2jGClUpTwJzrY7q4hKkGjV4MJ4lcKrR7z9Am8wj93B_QXaJV8GgqnaD-CcDw" alt="post avatar"/>
            Post
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post; 