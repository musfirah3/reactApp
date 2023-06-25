import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../pages../../../Components/ImageSection'
import { Typography } from 'antd'
import {TbTruckDelivery} from 'react-icons/tb'
import {TbReplace} from 'react-icons/tb'
import {BiShieldQuarter} from 'react-icons/bi'
import {AiOutlineFieldTime } from 'react-icons/ai'
import{GiBrokenShield} from 'react-icons/gi'
import{AiOutlinePlus,AiOutlineMinus}  from 'react-icons/ai'

export default function ProductPage() {

    const { productID } = useParams()
    const [product, setproduct] = useState({})
    const [review, setReview] = useState("")
    const [ratingstar, setratingStar] = useState(0)
    const [productQuantity, setproductQuantity] = useState(1)

    const ratingChanged = (newRating) => {
        setratingStar(newRating)
    }

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: ratingstar
        }
        console.log(payload)


        Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Thanks for reviewing our product',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })

        setReview('')
        setratingStar(0)

    }

    const addToCart = () => {

        const payload = {
            ...product,
            productQuantity,
            totalPrice: product.price * productQuantity
        }

        console.log(payload)

        Swal.fire({
            title: 'Added to Cart!',
            text: 'Check your Cart for Check Out',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productID}`).then(json => setproduct(json.data))

    }, [])


    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-3">

                        {
                            product?.images?.length > 0 && <ImageSection images={product.images} />
                        }

                    </div>


                    <div className="col-md-6">

                        <div className="container mt-5">
                            
                                <h3 className='text-success fw-bold fs-2'>{product.title}</h3>
                                <p className=' text-secondary '>
                                <ReactStars
                                        count={5}
                                        size={24}
                                        edit={false}
                                        value={product.rating}
                                        color2={'#ffd700'}
                                    />  ({product.rating} customer reviews)
                                    </p> 
                                    <Typography.Paragraph className='fs-5 text-success fw-bold'>
                                    Deal of the Day: ${product.price}{" "}
                                    <Typography.Text delete type='danger'>
                                        MRP: $
                                        {parseFloat(product.price +
                                            (product.price * product.discountPercentage) / 100).toFixed(2)}
                                    </Typography.Text>
                                </Typography.Paragraph>
                               
                                <p className="text-secondary">{product.description}</p>
                                <p className="d-flex justify-content-around"><TbTruckDelivery/> <TbReplace/><GiBrokenShield/><BiShieldQuarter/><AiOutlineFieldTime/></p>
                                <p className="d-flex justify-content-around text-secondary fontP"><span>Free delivery</span> <span>30 Days replacement</span> <span>Handle with care</span><span>2 Years warranty</span> <span>On time</span></p>
                                <hr />
                                
                                    <p className=' text-secondary'>Availabe: <strong>{product.stock} are in stocks</strong></p>
                                    <p className=' text-secondary'>Product ID: <strong>{product.id}</strong></p>
                                    <p className=' text-secondary'>Brand: <strong>{product.brand}</strong></p>

                                 <hr className='hr-bw'/> 
                                

                                <div className="my-3 d-flex align-items-center">
                                    <button className="btn btn-light mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}><AiOutlineMinus/></button>
                                    {productQuantity}
                                    <button className="btn btn-light mx-3" onClick={() => setproductQuantity(productQuantity + 1)}><AiOutlinePlus/></button>
                                </div>


                                <button className='btn btn-outline-success' onClick={addToCart}>Add to Cart</button>
                            







                            {/* <div>
                                

                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style={{ height: 100 }}
                                        defaultValue={review}
                                        onChange={(e) => setReview(e.target.value)}
                                    />
                                    <label htmlFor="floatingTextarea2" className='text-secondary'>Share your thoughts about product...</label>
                                </div>

                                <div className='mt-2'>

                                    Rate Us :
                                    <div className="d-flex align-items-center ">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={ratingstar}
                                            onChange={ratingChanged}
                                            color2={'#ffd700'}
                                        />

                                        <span className='ms-3'>({ratingstar})</span>
                                    </div>
                                </div>
                                <button className='my-3 btn btn-outline-success' onClick={submitReview}>Submit review</button>

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}