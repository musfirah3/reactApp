import { useContext, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs'
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import { CartContext } from '../context/addtoCart/context';
import {FaTrashAlt} from 'react-icons/fa'

function Cart() {
    const [show, setShow] = useState(false);
    
    const { state, dispatch } = useContext(CartContext)
    const handleDeleteProduct = (productData) => {
        dispatch({
          type: "DELETE_PRODUCT",
          payload: productData
        });
      };

    return (
        <>


            <button type="button" onClick={() => setShow(true)} className="btn btn-outline-success position-relative">
                <BsFillCartFill />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {state?.cart?.length}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>


            <Offcanvas show={show} onHide={() => setShow(false)} placement='end' name="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        
                        Shopping Bag
                        <button className='btn btn-outline-danger ms-auto '
                            onClick={
                                () => dispatch({
                                    type: "CLEAR_CART"
                                })
                            }
                        ><FaTrashAlt/></button>
                        
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {
                        state?.cart?.map((val, key) => <CartItems key={key} data={val}onDelete={handleDeleteProduct} />)
                    }



                </Offcanvas.Body>
                
            
            </Offcanvas>
        </>
    );
}

export default Cart;