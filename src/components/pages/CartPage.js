import React, { useEffect } from 'react'
import Main from '../layout/Main'
import { Button, FormControl, Img, Input } from '@chakra-ui/react'
import '../../css/cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../store/cartSlice';


export default function CartPage() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);


  return (
    <Main>
        <section className="cart">
            <div className="container">
                <div className='div-items'>
                  {cart.data && (
                      <>
                        {cart.data.map((item) => (
                          <div className='cart-item'>
                            <div className='image-and-name'>
                              <Img src={item.img} alt='cart item' />
                              <div className='txts'>
                                <h4 className='title'>{item.name}</h4>
                                <p className='price'>{item.price}</p>
                              </div>
                            </div>
                            <div className='add-remove'>
                              <span className='minus-btn'>-</span>
                              <span>{item.amount}</span>
                              <span className='plus-btn'>+</span>
                            </div>
                          </div>
                        ))}
                      </>
                    )
                  }
                </div>
                <div className='pay-section'>
                  <div className='promocode-div'>
                    <h3>ENTER THE PROMOCODE</h3>
                    <form className='promocode-form'>
                      <FormControl className='promocode-input' role='group'>
                          <Input type='text' placeholder='PromoCode' aria-label='Enter the promocode' required/>
                      </FormControl>
                      <Button className='btn' type="submit" w="100%" bg="#7f5ad5" isLoading={false} aria-label="On Click">
                          Submit
                      </Button>
                    </form>
                  </div>
                  <div className='all-prices-div'>
                    <div className='price-div'>
                      <p>Price</p>
                      <p>55$</p>
                    </div>
                    <div className='delivery-div'>
                      <p>Delivery</p>
                      <p>3$</p>
                    </div>
                    <div className='discount-div'>
                      <p>Discount</p>
                      <p>-0$</p>
                    </div>
                    <div className='total-div'>
                      <p>Estimated Total</p>
                      <p>58$</p>
                    </div>
                  </div>
                  <Button className='btn' type="submit" w="100%" bg="#7f5ad5" isLoading={false} aria-label="On Click">
                    Pay For Order
                  </Button>
                </div>
            </div>
        </section>
    </Main>
  )
}
