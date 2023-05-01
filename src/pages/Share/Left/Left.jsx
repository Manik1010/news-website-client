import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftFooter from './LeftFooter';

const Left = () => {

    // cosnt [categories, setCategories] = useState([]);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/categories/')
            .then(res => res.json())
            // .then( data => console.log(data))
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <div>
                <h4>All Caterogy</h4>
                {
                    // console.log(categories);
                    categories.map(category => <p
                        key={category.id}
                    ><Link to={`/catagories/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <LeftFooter></LeftFooter>
        </div>
    );
};

export default Left;