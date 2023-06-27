import React from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';



function Category() {
    const [loading, setLoading]=useState(false)
    const [categories, setCategories] = useState([])



    useEffect(() => {
        setLoading(true)
        axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))
setLoading(false)
    }, [])
    if (loading) {
        return <div className='d-flex justify-content-center align-items-center' style={{ width: '40vw', height: '40vh' }}>
    
    
          <Spin tip="Loading..." size="large">
            <div className="content"/>
          </Spin>
          </div>
      
      }
    return (

        <div className="container ">

             <div className="text-center">
                <h2 className='text-success fw-bold m-3'>Categories</h2>
            </div> 
            <div className="row">
                {
                    categories.map((val, key) => <div className='col-md-3 text-center fw-bold' key={key}>
                        <Link className='text-decoration-none' to={`/products/category/${val}`}>
                            <Card className='my-2 ' border="success">
                                <Card.Body >
                                    <Card.Title>{key + 1} {val.toUpperCase().replace('-', ' ')}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>)

                }
            </div>
         </div>

    );
}

export default Category