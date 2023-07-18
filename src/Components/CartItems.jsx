import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus,AiFillDelete } from 'react-icons/ai'


export default function CartItems({data,onDelete}) {
    
    const [productQuantity, setproductQuantity] = useState(1)
    const totalPrice=data.price * productQuantity
    return (
        <>
        
        <div className="card mb-3 shadow-sm border border-success">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={data.thumbnail}
                        style={{
                            width: '100%',
                            height: '20vh',
                            objectFit: 'contain'
                        }}
                        className="img-fluid rounded-start bg-outline-success" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="card-title">
                                {data?.title?.length > 20 ? data.title.slice(0, 20) + '...' : data.title}
                            </h6>
                            
                            <span className="fw-bold text-success">
                               $ {totalPrice}
                                </span>
                        </div>
                        <div className="my-3 d-flex align-items-center">
                            
                                <button className="btn btn-light mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}><AiOutlineMinus /></button>
                                {productQuantity}
                                <button className="btn btn-light mx-3" onClick={() => setproductQuantity(productQuantity + 1)}><AiOutlinePlus /></button>
                        
                    
                                <button className='btn btn-outline-danger' onClick={() => onDelete(data.id)}><AiFillDelete/></button>
                           
                            </div>


                        <div className="card-text">
                       
                            <small className="text-body-secondary">Last updated 3 mins ago</small>
                            
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
        
        
        </>

    )
}