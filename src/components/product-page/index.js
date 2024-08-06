import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'
import ProductThumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import ProductThumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import ProductThumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import ProductThumbnail4 from '../../images/image-product-4-thumbnail.jpg'
import Minus from '../../images/icon-minus.svg'
import Plus from '../../images/icon-plus.svg'
import Cart from '../../images/icon-cart-black.svg'
import { useMediaQuery } from "react-responsive";
import ArrowNext from '../../images/icon-next.svg'
import ArrowBack from '../../images/icon-previous.svg'
import './index.css'

const ProductPage = props =>{
    var [count, setCount] = useState(0)
    var [quantity, setQuantity] = useState(0)

    const for1624Width = useMediaQuery({query: '(max-width: 1624px)'})
    const for1563Width = useMediaQuery({query: '(max-width: 1563px)'})
    const for1372Width = useMediaQuery({query: '(max-width: 1372px)'})
    const for1304Width = useMediaQuery({query: '(max-width: 1304px)'})
    const for1190Width = useMediaQuery({query: '(max-width: 1190px)'})
    const for1154Width = useMediaQuery({query: '(max-width: 1154px)'})
    const for900Width = useMediaQuery({query: '(max-width: 900px)'})
    const for680Width = useMediaQuery({query: '(max-width: 680px)'})
    const for560Width = useMediaQuery({query: '(max-width: 560px)'})
    const for380Width = useMediaQuery({query: '(max-width: 380px)'})

    useEffect(() => {
        document.getElementById('quantity').innerHTML = quantity
    }, [quantity])

    useEffect(() => {
        const images = [Product1, Product2, Product3, Product4]

        if(count === 4){
            setCount(0)
        }

        else if(count === -1){
            setCount(3)
        }

        document.getElementById('product').src = images[count]
    }, [count])

    function handleClick(event){
        const images = [Product1, Product2, Product3, Product4]

        if(!for560Width){
            const thumbnails = document.getElementsByClassName('thumbnail')
        
            for(let i = 0; i < thumbnails.length; i++){
                thumbnails[i].classList.remove('selected')
                thumbnails[i].classList.add('not-selected')
                thumbnails[i].children[0].style.opacity = '1'

                if(event.target.parentElement == thumbnails[i]){
                    event.target.parentElement.classList.remove('not-selected')
                    event.target.parentElement.classList.add('selected')
                    event.target.style.opacity = '0.5'
                    document.getElementById('product').src = images[i]
                    props.setInfo([images[i], i])
                }
            }
        }
    }

    return(
        <>
            {!for1624Width &&
                <div style={{display: 'flex', padding: '80px 350px 120px 270px'}}>
                    <div>
                        <img id="product" onClick={() => {
                            if(!props.showOverlay){
                                props.setShowOverlay(true)
                            }
                        }} src={Product1} style={{height: '480px', borderRadius: '20px', cursor: 'pointer'}}></img>
                        
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Thumbnail className="thumbnail selected">
                                <img style={{opacity: '0.5', height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                            </Thumbnail>
                        </div>
                    </div>
        
                    <div style={{marginLeft: '80px', marginTop: '40px'}}>
                        <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '15px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>
        
                        <h1 style={{fontSize: '55px', margin: '20px 0px 30px 0px'}}>Fall Limited Edition Sneakers</h1>
        
                        <Text>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
        
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h1>$125.00</h1>
                            <Discount>50%</Discount>
                        </div> 
        
                        <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
        
                        <div style={{display: 'flex', marginTop: '20px'}}>
                            <Number>
                                <Img onClick={() => {
                                    if(quantity > 0) setQuantity(quantity - 1)                                   
                                }} id="minus" src={Minus}></Img>
        
                                <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
        
                                <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                            </Number>
        
                            <AddCart onClick={() => props.setQuantity(props.quantity + quantity)}>
                                <img src={Cart}></img>
        
                                <p style={{fontWeight: '600', marginLeft: '10px', fontSize: '15px'}}>Add to cart</p>
                            </AddCart>
                        </div>
                    </div>
                </div>
            }

            {(for1624Width && !for1563Width)&&
                <div style={{display: 'flex', padding: '80px 270px 110px 270px'}}>
                    <div>
                        <img id="product" onClick={() => {
                            if(!props.showOverlay){
                                props.setShowOverlay(true)
                            }
                        }} src={Product1} style={{height: '480px', borderRadius: '20px', cursor: 'pointer'}}></img>
                        
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Thumbnail className="thumbnail selected">
                                <img style={{opacity: '0.5', height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                            </Thumbnail>
                        </div>
                    </div>
        
                    <div style={{marginLeft: '80px', marginTop: '40px'}}>
                        <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '15px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>
        
                        <h1 style={{fontSize: '55px', margin: '20px 0px 30px 0px'}}>Fall Limited Edition Sneakers</h1>
        
                        <Text>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
        
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h1>$125.00</h1>
                            <Discount>50%</Discount>
                        </div> 
        
                        <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
        
                        <div style={{display: 'flex', marginTop: '20px'}}>
                            <Number>
                                <Img onClick={() => {
                                    if(quantity > 0) setQuantity(quantity - 1)
                                }} id="minus" src={Minus}></Img>
        
                                <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
        
                                <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                            </Number>
        
                            <AddCart onClick={() => props.setQuantity(props.quantity + quantity)}>
                                <img src={Cart}></img>
        
                                <p style={{fontWeight: '600', marginLeft: '10px', fontSize: '15px'}}>Add to cart</p>
                            </AddCart>
                        </div>
                    </div>
                </div>
            }

            {(for1563Width && !for1304Width) &&
                <div style={{display: 'flex', padding: '100px 230px 120px 230px'}}>
                    <div>
                        <img id="product" onClick={() => {
                            if(!props.showOverlay){
                                props.setShowOverlay(true)
                            }
                        }} src={Product1} style={{height: '420px', borderRadius: '20px', cursor: 'pointer'}}></img>
                        
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Thumbnail style={{height: '90px', width: '90px'}} className="thumbnail selected">
                                <img style={{opacity: '0.5', height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '90px', width: '90px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '90px', width: '90px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '90px', width: '90px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                            </Thumbnail>
                        </div>
                    </div>
        
                    <div style={{marginLeft: '78px', marginTop: '40px'}}>
                        {!for1372Width &&
                            <> 
                                <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '15px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>
                                <h1 style={{fontSize: '45px', margin: '20px 0px 30px 0px'}}>Fall Limited Edition Sneakers</h1>
                                <Text>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
                            </>
                        }

                        {for1372Width &&
                            <>
                                <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '13px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>
                                <h1 style={{fontSize: '40px', margin: '20px 0px 30px 0px'}}>Fall Limited Edition Sneakers</h1>
                                <Text style={{fontSize: '16px'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
                            </>
                        }
        
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h1>$125.00</h1>
                            <Discount>50%</Discount>
                        </div> 
        
                        <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
        
                        <div style={{display: 'flex', marginTop: '20px'}}>
                            <Number>
                                <Img onClick={() => {
                                    if(quantity > 0) setQuantity(quantity - 1)
                                }} id="minus" src={Minus}></Img>
        
                                <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
        
                                <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                            </Number>

                            {!for1372Width &&
                                <AddCart onClick={() => props.setQuantity(props.quantity + quantity)} style={{padding: '18px 50px 18px 50px'}}>
                                    <img src={Cart}></img>
            
                                    <p style={{fontWeight: '600', marginLeft: '10px', fontSize: '15px'}}>Add to cart</p>
                                </AddCart>
                            }

                            {for1372Width &&
                                <AddCart onClick={() => props.setQuantity(props.quantity + quantity)} style={{padding: '18px 25px 18px 25px'}}>
                                    <img style={{width: '20', height: '18px'}} src={Cart}></img>
            
                                    <p style={{fontSize: '15px', fontWeight: '600', marginLeft: '10px'}}>Add to cart</p>
                                </AddCart>
                            }
                        </div>
                    </div>
                </div>
            }

            {(for1304Width && !for1154Width) &&
                <div style={{display: 'flex', padding: '110px 180px 130px 180px'}}>
                    <div>
                        {!for1190Width &&
                            <>
                                <img id="product" onClick={() => {
                                    if(!props.showOverlay){
                                        props.setShowOverlay(true)
                                    }
                                }} src={Product1} style={{height: '420px', borderRadius: '20px', cursor: 'pointer'}}></img>
                        
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <Thumbnail style={{height: '90px', width: '90px'}} className="thumbnail selected">
                                        <img style={{opacity: '0.5', height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                                    </Thumbnail>

                                    <Thumbnail style={{height: '90px', width: '90px'}} className="thumbnail not-selected">
                                        <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                                    </Thumbnail>

                                    <Thumbnail style={{height: '90px', width: '90px'}} className="thumbnail not-selected">
                                        <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                                    </Thumbnail>

                                    <Thumbnail style={{height: '90px', width: '90px'}} className="thumbnail not-selected">
                                        <img style={{height: '100%', width: '100%', borderRadius: '20px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                                    </Thumbnail>
                                </div>
                            </>
                        }

                        {for1190Width &&
                            <>
                                <img id="product" onClick={() => {
                                    if(!props.showOverlay){
                                        props.setShowOverlay(true)
                                    }
                                }} src={Product1} style={{height: '390px', borderRadius: '20px', cursor: 'pointer', marginTop: '20px'}}></img>
                        
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <Thumbnail style={{height: '80px', width: '80px', borderRadius: '15px'}} className="thumbnail selected">
                                        <img style={{opacity: '0.5', height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                                    </Thumbnail>

                                    <Thumbnail style={{height: '80px', width: '80px', borderRadius: '15px'}} className="thumbnail not-selected">
                                        <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                                    </Thumbnail>

                                    <Thumbnail style={{height: '80px', width: '80px', borderRadius: '15px'}} className="thumbnail not-selected">
                                        <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                                    </Thumbnail>

                                    <Thumbnail style={{height: '80px', width: '80px', borderRadius: '15px'}} className="thumbnail not-selected">
                                        <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                                    </Thumbnail>
                                </div>
                            </>
                        }
                    </div>
                    
                    {!for1190Width &&
                        <div style={{marginLeft: '60px', marginTop: '40px'}}>
                            <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '13px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>

                            <h1 style={{fontSize: '40px', margin: '20px 0px 30px 0px'}}>Fall Limited Edition Sneakers</h1>

                            <Text style={{fontSize: '16px'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
                
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <h1>$125.00</h1>
                                <Discount>50%</Discount>
                            </div> 
            
                            <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
            
                            <div style={{display: 'flex', marginTop: '20px'}}>
                                <Number>
                                    <Img onClick={() => {
                                    if(quantity > 0) setQuantity(quantity - 1)
                                }} id="minus" src={Minus}></Img>
            
                                    <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
            
                                    <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                                </Number>
                
                                <AddCart onClick={() => props.setQuantity(props.quantity + quantity)} style={{padding: '18px 25px 18px 25px'}}>
                                    <img style={{width: '20', height: '18px'}} src={Cart}></img>
                
                                    <p style={{fontSize: '15px', fontWeight: '600', marginLeft: '10px'}}>Add to cart</p>
                                </AddCart>
                            </div>
                        </div>
                    }

                    {for1190Width &&
                        <div style={{marginLeft: '60px', marginTop: '40px'}}>
                            <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '13px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>

                            <h1 style={{fontSize: '40px', margin: '20px 0px 30px 0px'}}>Fall Limited Edition Sneakers</h1>

                            <Text style={{fontSize: '16px'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
                
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <h1>$125.00</h1>
                                <Discount>50%</Discount>
                            </div> 
            
                            <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
            
                            <div style={{display: 'flex', marginTop: '20px'}}>
                                <Number>
                                    <Img onClick={() => {
                                        if(quantity > 0) setQuantity(quantity - 1)
                                    }}id="minus" src={Minus}></Img>
            
                                    <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
            
                                    <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                                </Number>
                
                                <AddCart onClick={() => props.setQuantity(props.quantity + quantity)} style={{padding: '18px 25px 18px 25px'}}>
                                    <img style={{width: '18', height: '16px'}} src={Cart}></img>
                
                                    <p style={{fontSize: '15px', fontWeight: '600', marginLeft: '10px'}}>Add to cart</p>
                                </AddCart>
                            </div>
                        </div>
                    }
                </div>                    
            }

            {(for1154Width && !for900Width) &&
                <div style={{display: 'flex', padding: '0px 130px 100px 130px', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                        <img id="product" onClick={() => {
                            if(!props.showOverlay){
                                props.setShowOverlay(true)
                            }
                        }} src={Product1} style={{height: '500px', width: '530px',  borderRadius: '20px', cursor: 'pointer'}}></img>

                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                            <Thumbnail style={{height: '98px', width: '110px', borderRadius: '15px', margin: '0px 0px 20px 0px'}} className="thumbnail selected">
                                <img style={{opacity: '0.5', height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '98px', width: '110px', borderRadius: '15px', margin: '0px 0px 20px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '98px', width: '110px', borderRadius: '15px', margin: '0px 0px 20px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '98px', width: '110px', borderRadius: '15px', margin: '0px 0px 20px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                            </Thumbnail>
                        </div>
                    </div>
                    
                    <div style={{marginTop: '25px', paddingLeft: '35px'}}>
                        <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '13px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>

                        <h1 style={{fontSize: '40px', margin: '10px 0px 30px 0px'}}>Fall Limited Edition Sneakers</h1>

                        <Text style={{fontSize: '18px', width: '700px'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
                
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h1>$125.00</h1>
                            <Discount>50%</Discount>
                        </div> 
            
                        <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
            
                        <div style={{display: 'flex', marginTop: '20px'}}>
                            <Number>
                                <Img onClick={() => {
                                        if(quantity > 0) setQuantity(quantity - 1)
                                    }} id="minus" src={Minus}></Img>
            
                                <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
            
                                <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                            </Number>
                
                            <AddCart onClick={() => props.setQuantity(props.quantity + quantity)} style={{padding: '18px 60px 18px 60px'}}>
                                <img style={{width: '20', height: '18px'}} src={Cart}></img>
                
                                <p style={{fontSize: '15px', fontWeight: '600', marginLeft: '10px'}}>Add to cart</p>
                            </AddCart>
                        </div>
                    </div>
                </div>                    
            }

            {(for900Width && !for680Width) &&
                <div style={{display: 'flex', padding: '0px 0px 100px 0px', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                        <img id="product" onClick={() => {
                            if(!props.showOverlay){
                                props.setShowOverlay(true)
                            }
                        }} src={Product1} style={{height: '400px', width: '430px',  borderRadius: '20px', cursor: 'pointer'}}></img>

                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                            <Thumbnail style={{height: '75px', width: '85px', borderRadius: '15px', margin: '0px 0px 20px 0px'}} className="thumbnail selected">
                                <img style={{opacity: '0.5', height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '75px', width: '85px', borderRadius: '15px', margin: '0px 0px 20px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '75px', width: '85px', borderRadius: '15px', margin: '0px 0px 20px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '75px', width: '85px', borderRadius: '15px', margin: '0px 0px 20px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                            </Thumbnail>
                        </div>
                    </div>
                    
                    <div style={{marginTop: '25px', paddingLeft: '18px'}}>
                        <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '13px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>

                        <h1 style={{fontSize: '35px', margin: '10px 0px 30px 0px'}}>Fall Limited Edition Sneakers</h1>

                        <Text style={{fontSize: '17px', width: '550px'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
                
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h1>$125.00</h1>
                            <Discount>50%</Discount>
                        </div> 
            
                        <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
            
                        <div style={{display: 'flex', marginTop: '20px'}}>
                            <Number>
                                <Img onClick={() => {
                                        if(quantity > 0) setQuantity(quantity - 1)
                                    }} id="minus" src={Minus}></Img>
            
                                <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
            
                                <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                            </Number>
                
                            <AddCart onClick={() => props.setQuantity(props.quantity + quantity)} style={{padding: '18px 60px 18px 60px'}}>
                                <img style={{width: '20', height: '18px'}} src={Cart}></img>
                
                                <p style={{fontSize: '15px', fontWeight: '600', marginLeft: '10px'}}>Add to cart</p>
                            </AddCart>
                        </div>
                    </div>
                </div>                    
            }

            {(for680Width && !for560Width) &&
                <div style={{display: 'flex', padding: '0px 0px 100px 0px', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex'}}>
                        <img onClick={() => {
                            if(!props.showOverlay){
                                props.setShowOverlay(true)
                            }}} id="product" src={Product1} style={{height: '340px', width: '370px',  borderRadius: '20px', cursor: 'pointer'}}></img>

                        
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20px'}}>
                            <Thumbnail style={{height: '65px', width: '75px', borderRadius: '15px', margin: '0px 0px 12px 0px'}} className="thumbnail selected">
                                <img style={{opacity: '0.5', height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '65px', width: '75px', borderRadius: '15px', margin: '0px 0px 12px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '65px', width: '75px', borderRadius: '15px', margin: '0px 0px 12px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '65px', width: '75px', borderRadius: '15px', margin: '0px 0px 12px 0px'}} className="thumbnail not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                            </Thumbnail>
                        </div>
                    </div>
                    
                    <div style={{marginTop: '25px', paddingRight: '60px'}}>
                        <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '13px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>

                        <h1 style={{fontSize: '30px', margin: '10px 0px 15px 0px'}}>Fall Limited Edition Sneakers</h1>

                        <Text style={{fontSize: '16px', width: '400px'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
                
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h1>$125.00</h1>
                            <Discount>50%</Discount>
                        </div> 
            
                        <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
            
                        <div style={{display: 'flex', marginTop: '20px'}}>
                            <Number>
                                <Img onClick={() => {
                                        if(quantity > 0) setQuantity(quantity - 1)
                                    }} id="minus" src={Minus}></Img>
            
                                <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
            
                                <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                            </Number>
                
                            <AddCart onClick={() => props.setQuantity(props.quantity + quantity)} style={{padding: '18px 60px 18px 60px'}}>
                                <img style={{width: '20', height: '18px'}} src={Cart}></img>
                
                                <p style={{fontSize: '15px', fontWeight: '600', marginLeft: '10px'}}>Add to cart</p>
                            </AddCart>
                        </div>
                    </div>
                </div> 
            }

            {for560Width &&
                <>
                    <div style={{position: 'relative'}}>
                        {!for380Width &&
                            <>
                                <ArrowElement id="btnNext" onClick={() => setCount(count + 1)} src={ArrowNext}></ArrowElement>

                                <ArrowElement id="btnBack" onClick={() => setCount(count - 1)} src={ArrowBack} style={{left: '0px', margin: '0px 0px 0px 15px'}}></ArrowElement>
                            </>
                        }

                        {for380Width &&
                            <>
                                <ArrowElement id="btnNext" onClick={() => setCount(count + 1)} style={{width: '40px', height: '40px', padding: '10px'}} src={ArrowNext}></ArrowElement>

                                <ArrowElement id="btnBack" onClick={() => setCount(count - 1)} src={ArrowBack} style={{left: '0px', margin: '0px 0px 0px 15px', width: '40px', height: '40px', padding: '10px'}}></ArrowElement>
                            </>
                        }

                        <img id="product" src={Product1} style={{maxHeight: '500px', width: '100%'}}></img>
                    </div>
                        
                    <div style={{marginTop: '25px', padding: '0px 30px 50px 25px'}}>
                        <p style={{color: '#8c8f95', fontWeight: 'bold', fontSize: '14px', letterSpacing: '3px'}}>SNEAKER COMPANY</p>

                        <h1 style={{fontSize: '35px', margin: '10px 0px 15px 0px'}}>Fall Limited Edition Sneakers</h1>

                        <Text style={{fontSize: '16px', lineHeight: '25px', marginBottom: '15px'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>
                    
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <h1>$125.00</h1>
                            <Discount>50%</Discount>
                        </div> 
                
                        <p style={{color: '#8c8f95', fontWeight: '500', fontSize: '18px', marginTop: '5px', textDecoration: 'line-through'}}>$250.00</p>
                
                        <Number style={{width: '100%', padding: '18px 30px 18px 30px', margin: '20px 0px 20px 0px'}}>
                            <Img onClick={() => {
                                        if(quantity > 0) setQuantity(quantity - 1)
                                    }} id="minus" src={Minus}></Img>
                
                            <p id="quantity" style={{fontWeight: 'bold'}}>0</p>
                
                            <Img onClick={() => setQuantity(quantity + 1)} id="plus" src={Plus}></Img>
                        </Number>
                    
                        <AddCart onClick={() => props.setQuantity(props.quantity + quantity)} style={{padding: '18px 60px 18px 60px', margin: '0px', width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <img style={{width: '20', height: '18px'}} src={Cart}></img>
                    
                            <p style={{fontSize: '15px', fontWeight: '600', marginLeft: '10px'}}>Add to cart</p>
                        </AddCart>
                    </div>
                </>    
            }           
        </>
    )
}

const Thumbnail = styled.div`
    border-radius: 20px;
    margin-top: 30px;
    height: 90px;
    width: 100px;
`

const Discount = styled.p`
    background-color: black; 
    color: white; 
    margin-left: 15px; 
    fontSize: 18px;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
`

const Number = styled.div`
    display: flex;  
    background-color: hsl(223, 64%, 98%);
    align-items: center;
    padding: 18px 15px 18px 15px;
    border-radius: 8px;
    justify-content: space-between;
    width: 150px;
`

const AddCart = styled.div`
    display: flex;  
    background-color: rgb(255, 125, 26);
    align-items: center;
    padding: 18px 60px 18px 60px;
    border-radius: 8px;
    margin-left: 20px;
    cursor: pointer;
    transition: 0.1s ease-in-out;

    &:hover{
        background-color: rgba(255, 125, 26, 0.8);
    }   
`

const Img = styled.img`
    cursor: pointer;
    transition: 0.05s ease-in-out;

    &:hover{
        opacity: 0.7;
    }
`

const Text = styled.p`
    color: #8c8f95;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 25px;
`

const ArrowElement = styled.img`
    position: absolute; 
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    right: 0px;
    border-radius: 50%;
    background-color: white;
    width: 50px;
    height: 50px;
    padding: 13px;
    margin-right: 15px;
`

export default ProductPage