import React, {useEffect} from 'react'

export const GifGrid = ({category}) => {



    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Breaking+Bad&limit=10&api_key=AuM6sBkHBFyrIz0MfFenRSEN8eEfzhuP';

        const response = await fetch(url);
        const {data} = await response.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                img: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        
    };

    useEffect(() => {
        getGifs();
    }, []);

    return (
        <>
           <h3>{category}</h3> 
        </>
    );
};
