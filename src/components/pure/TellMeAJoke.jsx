import React, {useState} from 'react';
import getNewJoke from '../../services/axiosService';
import Button from '@mui/material/Button';

const TellMeAJoke = () => {

    const [joke, setJoke] = useState(null);

    const getRandomJoke = () => {
        getNewJoke()
        .then((response)=>{
            console.log(response)
            setJoke(response.data)
            
        }).catch((error)=>console.log(error))
        
    }
    return (
        <div>
            <img alt='Avatar' src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png' style={{width: '200px'}} />
            <p>{joke != null ? joke.value: 'Press button for new joke'}</p>
            <Button variant="contained" onClick={()=>getRandomJoke()} style={{marginBottom: '20px'}}>Tell Me a Joke</Button>
        </div>
    );
}

export default TellMeAJoke;
