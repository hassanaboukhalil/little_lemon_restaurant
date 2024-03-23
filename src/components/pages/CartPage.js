import React from 'react'
import Main from '../layout/Main'
import { Button, FormControl, FormLabel, Img, Input } from '@chakra-ui/react'
// import {img1 } from '../../../public/images/appetizers/bruchetta.png'
import '../../css/cart.css';

export default function CartPage() {
  return (
    <Main>
        <section className="cart">
            <div className="container">
                <div className='div-items'>
                  <div className='cart-item'>
                    <Img src='./images/appetizers/bruchetta.png' alt='cart item' />
                    <div className='txts'>
                      <h4 className='title'>Greek salad</h4>
                      <p className='type'>Salads</p>
                    </div>
                    <div className='add-remove'>
                      <div className='minus-btn'>
                        <span>-</span>
                      </div>
                      <span>1</span>
                      <div className='plus-btn'>
                        <span>+</span>
                      </div>
                    </div>
                    <p className='price'>12.5$</p>
                  </div>
                  <div className='cart-item'>
                    <Img src='./images/appetizers/bruchetta.png' alt='cart item' />
                    <div className='txts'>
                      <h4 className='title'>Greek salad</h4>
                      <p className='type'>Salads</p>
                    </div>
                    <div className='add-remove'>
                      <span className='minus-btn'>-</span>
                      <span>1</span>
                      <span className='plus-btn'>+</span>
                    </div>
                    <p className='price'>12.5$</p>
                  </div>
                  <div className='cart-item'>
                    <Img src='./images/appetizers/bruchetta.png' alt='cart item' />
                    <div className='txts'>
                      <h4 className='title'>Greek salad</h4>
                      <p className='type'>Salads</p>
                    </div>
                    <div className='add-remove'>
                      <span className='minus-btn'>-</span>
                      <span>1</span>
                      <span className='plus-btn'>+</span>
                    </div>
                    <p className='price'>12.5$</p>
                  </div>
                  <div className='cart-item'>
                    <Img src='./images/appetizers/bruchetta.png' alt='cart item' />
                    <div className='txts'>
                      <h4 className='title'>Greek salad</h4>
                      <p className='type'>Salads</p>
                    </div>
                    <div className='add-remove'>
                      <span className='minus-btn'>-</span>
                      <span>1</span>
                      <span className='plus-btn'>+</span>
                    </div>
                    <p className='price'>12.5$</p>
                  </div>
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
