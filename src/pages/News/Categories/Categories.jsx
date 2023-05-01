import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import AllNews from '../AllNews/AllNews';

const Categories = () => {
    const { id } = useParams();
    const catagoryNews = useLoaderData()
    // console.log(catagoryNews);
    return (
        <div>
            {/* <h2>This is category: {id}</h2> */}
            {/* <h2>This is category: {catagoryNews.length}</h2> */}
            {id && <h2>This is category: {catagoryNews.length}</h2>}
            {
                catagoryNews.map( newsdata => <AllNews
                    key={newsdata._id}
                    newsdata ={newsdata}
                ></AllNews>)
            }
        </div>
    );
};

export default Categories;