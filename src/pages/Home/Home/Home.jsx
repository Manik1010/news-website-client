import React, { useEffect, useState } from 'react';
import AllNews from '../../News/AllNews/AllNews';

const Home = () => {

    const [newsdatas, setNewsdatas] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:4000/news')
        .then( res => res.json())
        // .then( data => console.log(data))
        .then( data => setNewsdatas(data))
        // .catch( error => console.log(error))
    } , [])

    return (
        <div>
            {
                // newsdatas.map( newsdata => <p>{newsdata.title}</p>)
                newsdatas.map( newsdata => <AllNews
                    key={newsdata._id}
                    newsdata={newsdata}
                ></AllNews>)
            }
        </div>
    );
};

export default Home;