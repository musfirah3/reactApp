import React, { useContext ,useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsFillBasketFill } from 'react-icons/bs'
import { CartContext } from '../context/cartContext/CartContext'; 
import CartItems from './CartItem';

function Cart() {
    const [show, setShow] = useState(false);
    const {state,dispatch}=useContext(CartContext)
    return (
        <>
            <button type="button" onClick={() => setShow(true)} className="btn btn-outline-dark position-relative">
                <BsFillBasketFill />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {state.cart.length}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
            <Offcanvas show={show} onHide={() => setShow(false)} placement='end' name="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Cart
                        <button className='ms-4 btn btn-outline-dark'
                            onClick={
                                () => dispatch({
                                    type: "CLEAR_CART"
                                })
                            }
                        >Clear Cart</button>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {
                        state.cart.map((val, key) => <CartItems key={key} data={val} />)
                    }



                </Offcanvas.Body>

            </Offcanvas>
        </>
    )
}

export default Cart