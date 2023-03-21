import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Likes = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const iLikeIt = () => {
        setLikes(likes+1);
        
    }

    const iDontLikeIt = () => {
        setDislikes(dislikes+1)
    }

    return (
        <div>
            <Button variant="contained" color="success" onClick={()=>iLikeIt()}><ThumbUpIcon></ThumbUpIcon></Button>
            <Button variant="contained" color="error" onClick={()=>iDontLikeIt()}><ThumbDownIcon></ThumbDownIcon></Button>
            <div>
                <p>Yey!: {likes}</p>
                <p>Nope: {dislikes}</p>
            </div>
        </div>
    );
}

export default Likes;
