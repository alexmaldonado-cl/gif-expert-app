import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Breaking Bad']);

    // const handleAdd = () => {
    //     setCategories([...categories,'Better Call Saul']);
    // };

    return (
        <>

        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>

        <ul>

            {
                categories.map(category => 
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                )
            }

        </ul>
        </>
    );

};


export default GifExpertApp;