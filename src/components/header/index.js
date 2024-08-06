import React, { useState } from "react";
import styled from "styled-components";
import Logo from '../../images/logo.svg'
import Cart from '../../images/icon-cart.svg'
import Avatar from '../../images/image-avatar.png'
import { useMediaQuery } from "react-responsive";
import Hamburguer from '../../images/icon-menu.svg'
import ProductThumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import Delete from '../../images/icon-delete.svg'

const Header = props => {
    const [showCart, setShowCart] = useState(false)

    const for1304Width = useMediaQuery({query: '(max-width: 1304px)'})
    const for1154Width = useMediaQuery({query: '(max-width: 1154px)'})
    const for1010Width = useMediaQuery({query: '(max-width: 1010px)'})
    const for770Width = useMediaQuery({query: '(max-width: 770px)'})
    const for560Width = useMediaQuery({query: '(max-width: 560px)'})
    const for480Width = useMediaQuery({query: '(max-width: 480px)'})
    const for370Width = useMediaQuery({query: '(max-width: 370px)'})

    return(
        <>
            {!for1304Width && 
                <Div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{paddingRight: '50px', marginBottom: '54px'}} src={Logo}></img>
        
                        <nav style={{display: 'flex'}}>
                            <Li>Collections</Li>
                            <Li>Men</Li>
                            <Li>Women</Li>
                            <Li>About</Li>
                            <Li>Contact</Li>
                        </nav>
                    </div>
        
                    <div style={{position: 'relative', marginBottom: '40px'}}>
                        {(props.quantity > 0) &&
                            <Quantity>{props.quantity}</Quantity>
                        }

                        {showCart &&
                            <CartSection>
                                <h1 style={{fontSize: '20px', borderBottom: 'solid 1px #ccc', padding: '20px 0px 20px 20px'}}>Cart</h1>

                                {(props.quantity <= 0) &&
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px'}}>
                                        <p style={{padding: '50px 50px 50px 50px', opacity: '0.7'}}>Your cart is empty</p>
                                    </div>
                                }

                                {(props.quantity > 0) &&
                                    <>
                                        <div style={{height: '170px', padding: '15px 25px 10px 25px'}}>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                                                <img style={{height: '60px', width: '60px', borderRadius: '5px'}} src={ProductThumbnail1}></img>

                                                <div style={{margin: '0px 12px 0px 10px'}}>
                                                    <p style={{opacity: '0.7', fontSize: '15px', marginBottom: '5px'}}>Fall Limited Edition Sneakers</p>
                                                    
                                                    <div style={{display: 'flex'}}>
                                                        <p style={{opacity: '0.7'}}>$125.00 x {props.quantity}</p>
                                                        <p style={{marginLeft: '6px', fontWeight: 'bold'}}>${props.quantity * 125.00}.00</p>
                                                    </div>
                                                </div>
                                                
                                                <img onClick={() => props.setQuantity(0)} style={{cursor: 'pointer'}} src={Delete}></img>
                                            </div>

                                            <Checkout style={{fontWeight: '600', fontSize: '15px'}}>Checkout</Checkout>
                                        </div>
                                    </>
                                }
                            </CartSection>
                        }

                        <CartDiv onClick={() => {
                            if(!showCart) setShowCart(true)

                            else setShowCart(false)
                        }} style={{height: '25px', width: '27px', position: 'absolute', right: '90px', bottom: '-8px'}} src={Cart}></CartDiv>
                        <AvatarImg style={{height: '60px', width: '60px', position: 'absolute', right: '0px', bottom: '-22px'}} src={Avatar}></AvatarImg>
                    </div>
                </Div>
            }

            {(for1304Width && !for1154Width)&&
                <Div style={{margin: '0px 130px 0px 130px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{paddingRight: '50px', marginBottom: '54px'}} src={Logo}></img>
        
                        <nav style={{display: 'flex'}}>
                            <Li>Collections</Li>
                            <Li>Men</Li>
                            <Li>Women</Li>
                            <Li>About</Li>
                            <Li>Contact</Li>
                        </nav>
                    </div>
        
                    <div style={{position: 'relative', marginBottom: '40px'}}>
                        {(props.quantity > 0) &&
                            <Quantity>{props.quantity}</Quantity>
                        }

                        {showCart &&
                            <CartSection>
                                <h1 style={{fontSize: '20px', borderBottom: 'solid 1px #ccc', padding: '20px 0px 20px 20px'}}>Cart</h1>

                                {(props.quantity <= 0) &&
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px'}}>
                                        <p style={{padding: '50px 50px 50px 50px', opacity: '0.7'}}>Your cart is empty</p>
                                    </div>
                                }

                                {(props.quantity > 0) &&
                                    <>
                                        <div style={{height: '170px', padding: '15px 25px 10px 25px'}}>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                                                <img style={{height: '60px', width: '60px', borderRadius: '5px'}} src={ProductThumbnail1}></img>

                                                <div style={{margin: '0px 12px 0px 10px'}}>
                                                    <p style={{opacity: '0.7', fontSize: '15px', marginBottom: '5px'}}>Fall Limited Edition Sneakers</p>
                                                    
                                                    <div style={{display: 'flex'}}>
                                                        <p style={{opacity: '0.7'}}>$125.00 x {props.quantity}</p>
                                                        <p style={{marginLeft: '6px', fontWeight: 'bold'}}>${props.quantity * 125.00}.00</p>
                                                    </div>
                                                </div>
                                                
                                                <img onClick={() => props.setQuantity(0)} style={{cursor: 'pointer'}} src={Delete}></img>
                                            </div>

                                            <Checkout style={{fontWeight: '600', fontSize: '15px'}}>Checkout</Checkout>
                                        </div>
                                    </>
                                }
                            </CartSection>
                        }

                        <CartDiv onClick={() => {
                            if(!showCart) setShowCart(true)

                            else setShowCart(false)
                        }} style={{height: '25px', width: '27px', position: 'absolute', right: '90px', bottom: '-8px'}} src={Cart}></CartDiv>
                        <AvatarImg style={{height: '60px', width: '60px', position: 'absolute', right: '0px', bottom: '-22px'}} src={Avatar}></AvatarImg>
                    </div>
                </Div>
            }

            {(for1154Width && !for1010Width) &&
                <Div style={{margin: '0px 130px 60px 130px', paddingBottom: '10px', paddingTop: '30px'}}>
                    <div>
                        <img onClick={() => {
                            props.setShowSideBar(true)
                        }} style={{cursor: 'pointer', marginRight: '12px'}} src={Hamburguer}></img>
                        <img style={{paddingRight: '50px'}} src={Logo}></img>
                    </div>
        
                    <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                        {(props.quantity > 0) &&
                            <Quantity style={{bottom: '35px', right: '60px'}}>{props.quantity}</Quantity>
                        }

                        {showCart &&
                            <CartSection style={{top: '70px'}}>
                                <h1 style={{fontSize: '20px', borderBottom: 'solid 1px #ccc', padding: '20px 0px 20px 20px'}}>Cart</h1>

                                {(props.quantity <= 0) &&
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px'}}>
                                        <p style={{padding: '50px 50px 50px 50px', opacity: '0.7'}}>Your cart is empty</p>
                                    </div>
                                }

                                {(props.quantity > 0) &&
                                    <>
                                        <div style={{height: '170px', padding: '15px 25px 10px 25px'}}>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                                                <img style={{height: '60px', width: '60px', borderRadius: '5px'}} src={ProductThumbnail1}></img>

                                                <div style={{margin: '0px 12px 0px 10px'}}>
                                                    <p style={{opacity: '0.7', fontSize: '15px', marginBottom: '5px'}}>Fall Limited Edition Sneakers</p>
                                                    
                                                    <div style={{display: 'flex'}}>
                                                        <p style={{opacity: '0.7'}}>$125.00 x {props.quantity}</p>
                                                        <p style={{marginLeft: '6px', fontWeight: 'bold'}}>${props.quantity * 125.00}.00</p>
                                                    </div>
                                                </div>
                                                
                                                <img onClick={() => props.setQuantity(0)} style={{cursor: 'pointer'}} src={Delete}></img>
                                            </div>

                                            <Checkout style={{fontWeight: '600', fontSize: '15px'}}>Checkout</Checkout>
                                        </div>
                                    </>
                                }
                            </CartSection>
                        }

                        <CartDiv onClick={() => {
                            if(!showCart) setShowCart(true)

                            else setShowCart(false)
                        }} style={{height: '25px', width: '27px', marginRight: '20px'}} src={Cart}></CartDiv>
                        <AvatarImg style={{height: '60px', width: '60px', marginBottom: '5px'}} src={Avatar}></AvatarImg>
                    </div>
                </Div>
            }

            {(for1010Width && !for770Width) &&
                <Div style={{margin: '0px 90px 60px 90px', paddingBottom: '10px', paddingTop: '30px'}}>
                    <div>
                        <img onClick={() => {
                            props.setShowSideBar(true)
                        }} style={{cursor: 'pointer', marginRight: '12px'}} src={Hamburguer}></img>
                        <img style={{paddingRight: '50px'}} src={Logo}></img>
                    </div>
        
                    <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                        {(props.quantity > 0) &&
                            <Quantity style={{bottom: '35px', right: '60px'}}>{props.quantity}</Quantity>
                        }

                        {showCart &&
                            <CartSection style={{top: '70px'}}>
                                <h1 style={{fontSize: '20px', borderBottom: 'solid 1px #ccc', padding: '20px 0px 20px 20px'}}>Cart</h1>

                                {(props.quantity <= 0) &&
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px'}}>
                                        <p style={{padding: '50px 50px 50px 50px', opacity: '0.7'}}>Your cart is empty</p>
                                    </div>
                                }

                                {(props.quantity > 0) &&
                                    <>
                                        <div style={{height: '170px', padding: '15px 25px 10px 25px'}}>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                                                <img style={{height: '60px', width: '60px', borderRadius: '5px'}} src={ProductThumbnail1}></img>

                                                <div style={{margin: '0px 12px 0px 10px'}}>
                                                    <p style={{opacity: '0.7', fontSize: '15px', marginBottom: '5px'}}>Fall Limited Edition Sneakers</p>
                                                    
                                                    <div style={{display: 'flex'}}>
                                                        <p style={{opacity: '0.7'}}>$125.00 x {props.quantity}</p>
                                                        <p style={{marginLeft: '6px', fontWeight: 'bold'}}>${props.quantity * 125.00}.00</p>
                                                    </div>
                                                </div>
                                                
                                                <img onClick={() => props.setQuantity(0)} style={{cursor: 'pointer'}} src={Delete}></img>
                                            </div>

                                            <Checkout style={{fontWeight: '600', fontSize: '15px'}}>Checkout</Checkout>
                                        </div>
                                    </>
                                }
                            </CartSection>
                        }

                        <CartDiv onClick={() => {
                            if(!showCart) setShowCart(true)

                            else setShowCart(false)
                        }} style={{height: '25px', width: '27px', marginRight: '20px'}} src={Cart}></CartDiv>
                        <AvatarImg style={{height: '60px', width: '60px', marginBottom: '5px'}} src={Avatar}></AvatarImg>
                    </div>
                </Div>
            }

            {(for770Width && !for560Width) &&
                <Div style={{margin: '0px 45px 40px 45px', padding: '10px', paddingTop: '25px'}}>
                    <div>
                        <img onClick={() => {
                            props.setShowSideBar(true)
                        }} style={{cursor: 'pointer', marginRight: '12px'}} src={Hamburguer}></img>
                        <img style={{paddingRight: '50px'}} src={Logo}></img>
                    </div>
        
                    <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                        {(props.quantity > 0) &&
                            <Quantity style={{bottom: '35px', right: '60px'}}>{props.quantity}</Quantity>
                        }
                        
                        {showCart &&
                            <CartSection style={{top: '70px'}}>
                                <h1 style={{fontSize: '20px', borderBottom: 'solid 1px #ccc', padding: '20px 0px 20px 20px'}}>Cart</h1>

                                {(props.quantity <= 0) &&
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px'}}>
                                        <p style={{padding: '50px 50px 50px 50px', opacity: '0.7'}}>Your cart is empty</p>
                                    </div>
                                }

                                {(props.quantity > 0) &&
                                    <>
                                        <div style={{height: '170px', padding: '15px 25px 10px 25px'}}>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                                                <img style={{height: '60px', width: '60px', borderRadius: '5px'}} src={ProductThumbnail1}></img>

                                                <div style={{margin: '0px 12px 0px 10px'}}>
                                                    <p style={{opacity: '0.7', fontSize: '15px', marginBottom: '5px'}}>Fall Limited Edition Sneakers</p>
                                                    
                                                    <div style={{display: 'flex'}}>
                                                        <p style={{opacity: '0.7'}}>$125.00 x {props.quantity}</p>
                                                        <p style={{marginLeft: '6px', fontWeight: 'bold'}}>${props.quantity * 125.00}.00</p>
                                                    </div>
                                                </div>
                                                
                                                <img onClick={() => props.setQuantity(0)} style={{cursor: 'pointer'}} src={Delete}></img>
                                            </div>

                                            <Checkout style={{fontWeight: '600', fontSize: '15px'}}>Checkout</Checkout>
                                        </div>
                                    </>
                                }
                            </CartSection>
                        }

                        <CartDiv onClick={() => {
                            if(!showCart) setShowCart(true)

                            else setShowCart(false)
                        }} style={{height: '25px', width: '27px', marginRight: '20px'}} src={Cart}></CartDiv>
                        <AvatarImg style={{height: '60px', width: '60px', marginBottom: '5px'}} src={Avatar}></AvatarImg>
                    </div>
                </Div>
            }

            {for560Width &&
                <Div style={{padding: '30px 25px 30px 25px', border: 'none', margin: '0px', position: 'relative'}}>
                    <div>
                        <img onClick={() => {
                            props.setShowSideBar(true)
                        }} style={{cursor: 'pointer', marginRight: '10px'}} src={Hamburguer}></img>
                        <img style={{paddingRight: '50px', width: '152px'}} src={Logo}></img>
                    </div>
        
                    <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                        {(props.quantity > 0) &&
                            <Quantity style={{bottom: '20px', right: '36px', padding: '1px 7px 1px 7px'}}>{props.quantity}</Quantity>  
                        }

                        <CartDiv onClick={() => {
                            if(!showCart) setShowCart(true)

                            else setShowCart(false)
                        }} style={{height: '20px', width: '22px', marginRight: '12px'}} src={Cart}></CartDiv>
                        <AvatarImg style={{height: '40px', width: '40px'}} src={Avatar}></AvatarImg>
                    </div>

                    {showCart &&
                        <>
                            {!for480Width &&
                                <CartSection style={{top: '90px', width: 'fit-content', right: '0px', margin: '0px 20px'}}>
                                    <h1 style={{fontSize: '20px', borderBottom: 'solid 1px #ccc', padding: '20px 0px 20px 20px'}}>Cart</h1>
        
                                    {(props.quantity <= 0) &&
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '170px'}}>
                                            <p style={{padding: '50px 50px 50px 50px', opacity: '0.7'}}>Your cart is empty</p>
                                        </div>
                                    }

                                    {(props.quantity > 0) &&
                                        <>
                                            <div style={{height: '170px', padding: '15px 25px 10px 25px'}}>
                                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px'}}>
                                                    <img style={{height: '60px', width: '60px', borderRadius: '5px'}} src={ProductThumbnail1}></img>

                                                    <div style={{margin: '0px 12px 0px 10px'}}>
                                                        <p style={{opacity: '0.7', fontSize: '15px', marginBottom: '5px'}}>Fall Limited Edition Sneakers</p>
                                                        
                                                        <div style={{display: 'flex'}}>
                                                            <p style={{opacity: '0.7'}}>$125.00 x {props.quantity}</p>
                                                            <p style={{marginLeft: '6px', fontWeight: 'bold'}}>${props.quantity * 125.00}.00</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <img onClick={() => props.setQuantity(0)} style={{cursor: 'pointer'}} src={Delete}></img>
                                                </div>

                                                <Checkout style={{fontWeight: '600', fontSize: '15px'}}>Checkout</Checkout>
                                            </div>
                                        </>
                                    }
                                </CartSection>
                            }

                            {(for480Width && !for370Width) &&
                                <CartSection style={{top: '90px', width: 'fit-content', right: '0px', margin: '0px 20px'}}>
                                    <h1 style={{fontSize: '20px', borderBottom: 'solid 1px #ccc', padding: '20px 0px 20px 20px'}}>Cart</h1>
        
                                    {(props.quantity <= 0) &&
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px'}}>
                                            <p style={{padding: '50px 50px 50px 50px', opacity: '0.7'}}>Your cart is empty</p>
                                        </div>
                                    }

                                    {(props.quantity > 0) &&
                                        <>
                                            <div style={{height: '150px', padding: '15px 25px 10px 25px'}}>
                                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px'}}>
                                                    <img style={{height: '60px', width: '60px', borderRadius: '5px'}} src={ProductThumbnail1}></img>

                                                    <div style={{margin: '0px 12px 0px 10px'}}>
                                                        <p style={{opacity: '0.7', fontSize: '15px', marginBottom: '5px'}}>Fall Limited Edition Sneakers</p>
                                                        
                                                        <div style={{display: 'flex'}}>
                                                            <p style={{opacity: '0.7'}}>$125.00 x {props.quantity}</p>
                                                            <p style={{marginLeft: '6px', fontWeight: 'bold'}}>${props.quantity * 125.00}.00</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <img onClick={() => props.setQuantity(0)} style={{cursor: 'pointer'}} src={Delete}></img>
                                                </div>

                                                <Checkout style={{fontWeight: '600', fontSize: '15px', padding: '10px 60px 10px 60px'}}>Checkout</Checkout>
                                            </div>
                                        </>
                                    }
                                </CartSection>
                            }

                            {for370Width &&
                                <CartSection style={{top: '90px', width: 'fit-content', right: '0px', margin: '0px 20px'}}>
                                    <h1 style={{fontSize: '18px', borderBottom: 'solid 1px #ccc', padding: '20px 0px 22px 20px'}}>Cart</h1>
        
                                    {(props.quantity <= 0) &&
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px'}}>
                                            <p style={{padding: '50px 50px 50px 50px', opacity: '0.7'}}>Your cart is empty</p>
                                        </div>
                                    }

                                    {(props.quantity > 0) &&
                                        <>
                                            <div style={{height: 'fit-content', padding: '17px 15px 15px 15px'}}>
                                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px'}}>
                                                    <img style={{height: '50px', width: '50px', borderRadius: '5px'}} src={ProductThumbnail1}></img>

                                                    <div style={{margin: '0px 12px 0px 10px'}}>
                                                        <p style={{opacity: '0.7', fontSize: '14px', marginBottom: '5px'}}>Fall Limited Edition Sneakers</p>
                                                        
                                                        <div style={{display: 'flex'}}>
                                                            <p style={{fontSize: '15px', opacity: '0.7'}}>$125.00 x {props.quantity}</p>
                                                            <p style={{fontSize: '15px', marginLeft: '5px', fontWeight: 'bold'}}>${props.quantity * 125.00}.00</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <img onClick={() => props.setQuantity(0)} style={{cursor: 'pointer'}} src={Delete}></img>
                                                </div>

                                                <Checkout style={{fontWeight: '600', fontSize: '15px', padding: '10px 60px 10px 60px'}}>Checkout</Checkout>
                                            </div>
                                        </>
                                    }
                                </CartSection>
                            }
                        </>
                    }
                </Div>
            }
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 200px 0px 200px;
    border-bottom: 1px solid #ccc;
    padding-top: 60px;
`

const Li = styled.li`
    opacity: 0.7;
    cursor: pointer;
    margin: 0px 18px 0px 18px;
    padding-bottom: 50px;
    border-bottom: solid 3px transparent;
    transition: 0.05s ease-in-out;

    &:hover{
        opacity: 1;
        border-color: hsl(26, 100%, 55%);
    }
`

const CartDiv = styled.img`
    cursor: pointer;
`

const CartSection = styled.div`
    position: absolute;
    background-color: white; 
    right: -40px; 
    top: 30px; 
    z-index: 9;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
    width: 350px;
    border-radius: 5px;
`

const AvatarImg = styled.img`
    cursor: pointer;
    border-radius: 50%;
    outline: solid 2px transparent;

    &:hover{
        transition: 0.3s ease-in-out;
        outline-color: hsl(26, 100%, 55%);
    }
`

const Quantity = styled.p`
    background-color: hsl(26, 100%, 55%);
    color: white;
    position: absolute;
    padding: 1px 10px 1px 10px;
    margin-right: 10px;
    border-radius: 15px;
    font-size: 10px;
    bottom: 7px;
    right: 70px;
    z-index: 8;
    cursor: pointer;
`

const Checkout = styled.p`
    text-align: center;
    background-color: rgb(255, 125, 26);
    padding: 18px 60px 18px 60px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    &:hover{
        background-color: rgba(255, 125, 26, 0.8);
    } 
`

export default Header