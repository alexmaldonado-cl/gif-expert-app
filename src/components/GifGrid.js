import React, {useEffect, useState} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Breaking+Bad&limit=10&api_key=AuM6sBkHBFyrIz0MfFenRSEN8eEfzhuP';

        const response = await fetch(url);
        const {data} = await response.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        setImages(gifs);

        
    };

    useEffect(() => {
        getGifs();
    }, []);

    return (
        <>
           <h3>{category}</h3> 
           
               {
                   images.map(image => {
                       return <GifGridItem
                        key={image.id}
                        {...image} 
                       />
                   })
               }
           
        </>
    );
};
