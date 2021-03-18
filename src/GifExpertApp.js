import React, {useState} from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Breaking Bad', 'Mr. Robot', 'WandaVision']);

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
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }

        </ul>
        </>
    );

};


export default GifExpertApp;