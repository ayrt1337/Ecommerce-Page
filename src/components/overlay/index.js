import React, { useEffect } from "react";
import styled from "styled-components";
import Close from '../../images/icon-close.svg'
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'
import ProductThumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import ProductThumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import ProductThumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import ProductThumbnail4 from '../../images/image-product-4-thumbnail.jpg'
import './index.css'
import ArrowNext from '../../images/icon-next.svg'
import ArrowBack from '../../images/icon-previous.svg'
import { useMediaQuery } from "react-responsive";

const Overlay = props => {
    const for1010Width = useMediaQuery({query: '(max-width: 1010px)'})

    const thumbnails = document.getElementsByClassName('thumbnail-overlay')

    var count = props.info[1]

    useEffect(() => {
        thumbnails[count].children[0].style.opacity = '0.5'
        thumbnails[count].classList.remove('not-selected')
        thumbnails[count].classList.add('selected')
        thumbnails[count].style.backgroundColor = 'white'
    }, [props.info])

    function handleClick(event){
        const images = [Product1, Product2, Product3, Product4]

        if(event.target.id === 'btnNext' || event.target.id === 'btnBack'){
            for(let i = 0; i < thumbnails.length; i++){
                thumbnails[i].classList.remove('selected')
                thumbnails[i].classList.add('not-selected')
                thumbnails[i].style.backgroundColor = 'transparent'
                thumbnails[i].children[0].style.opacity = '1'
            }

            if(event.target.id === 'btnNext'){
                count++

                if(count === 4){
                    count = 0
                    thumbnails[count].classList.remove('not-selected')
                    thumbnails[count].classList.add('selected')
                    thumbnails[count].children[0].style.opacity = '0.5'
                    document.getElementById('product').src = images[count]
                    thumbnails[count].style.backgroundColor = 'white'
                }

                else{
                    thumbnails[count].classList.remove('not-selected')
                    thumbnails[count].classList.add('selected')
                    thumbnails[count].children[0].style.opacity = '0.5'
                    document.getElementById('product').src = images[count]
                    thumbnails[count].style.backgroundColor = 'white'
                }
            }

            else{
                count--

                if(count === -1){
                    count = 3
                    thumbnails[count].classList.remove('not-selected')
                    thumbnails[count].classList.add('selected')
                    thumbnails[count].children[0].style.opacity = '0.5'
                    document.getElementById('product').src = images[count]
                    thumbnails[count].style.backgroundColor = 'white'
                }

                else{
                    thumbnails[count].classList.remove('not-selected')
                    thumbnails[count].classList.add('selected')
                    thumbnails[count].children[0].style.opacity = '0.5'
                    document.getElementById('product').src = images[count]
                    thumbnails[count].style.backgroundColor = 'white'
                }
            }
        }

        else{
            for(let i = 0; i < thumbnails.length; i++){
                thumbnails[i].classList.remove('selected')
                thumbnails[i].classList.add('not-selected')
                thumbnails[i].children[0].style.opacity = '1'
                thumbnails[i].style.backgroundColor = 'transparent'
    
                if(event.target.parentElement == thumbnails[i]){
                    count = i
                    thumbnails[i].classList.remove('not-selected')
                    thumbnails[i].classList.add('selected')
                    thumbnails[i].children[0].style.opacity = '0.5'
                    document.getElementById('product').src = images[i]
                    thumbnails[i].style.backgroundColor = 'white'
                }
            }
        }
    }

    return(
        <> 
            {!for1010Width && 
                <>
                    <DivOverlay />

                    <Div>
                        <div style={{textAlign: 'right'}}>
                            <img onClick={() => {
                                if(props.showOverlay) props.setShowOverlay(false)
                            }} style={{cursor: 'pointer', marginBottom: '10px', width: '25px', height: '25px'}} src={Close}></img>
                        </div>

                        <div style={{position: 'relative'}}>
                            <ArrowElement id="btnNext" onClick={handleClick} src={ArrowNext}></ArrowElement>

                            <ArrowElement id="btnBack" onClick={handleClick} src={ArrowBack} style={{left: '0px', margin: '0px 0px 0px -35px'}}></ArrowElement>

                            <img id="product" style={{height: '600px', borderRadius: '20px'}} src={props.info[0]}></img>
                        </div>

                        <div style={{display:'flex', justifyContent: 'space-evenly'}}>
                            <Thumbnail className="thumbnail-overlay not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail-overlay not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail-overlay not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                            </Thumbnail>

                            <Thumbnail className="thumbnail-overlay not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                            </Thumbnail>
                        </div>
                    </Div>
                </>
            }

            {for1010Width &&
                <>
                    <DivOverlay />

                    <Div>
                        <div style={{textAlign: 'right'}}>
                            <img onClick={() => {
                                if(props.showOverlay) props.setShowOverlay(false)
                            }} style={{cursor: 'pointer', marginBottom: '10px', width: '25px', height: '25px'}} src={Close}></img>
                        </div>

                        <div style={{position: 'relative'}}>
                            <ArrowElement style={{width: '50px', height: '50px', padding: '15px', margin: '0px -25px 0px 0px'}} id="btnNext" onClick={handleClick} src={ArrowNext}></ArrowElement>

                            <ArrowElement id="btnBack" onClick={handleClick} src={ArrowBack} style={{width: '50px', height: '50px', padding: '15px', left: '0px', margin: '0px 0px 0px -25px'}}></ArrowElement>

                            <img id="product" style={{height: '450px', borderRadius: '20px'}} src={props.info[0]}></img>
                        </div>

                        <div style={{display:'flex', justifyContent: 'space-evenly'}}>
                            <Thumbnail style={{height: '85px', width: '90px'}} className="thumbnail-overlay not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail1}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '85px', width: '90px'}} className="thumbnail-overlay not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail2}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '85px', width: '90px'}} className="thumbnail-overlay not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail3}></img>
                            </Thumbnail>

                            <Thumbnail style={{height: '85px', width: '90px'}} className="thumbnail-overlay not-selected">
                                <img style={{height: '100%', width: '100%', borderRadius: '15px'}} onClick={handleClick} src={ProductThumbnail4}></img>
                            </Thumbnail>
                        </div>
                    </Div>
                </>
            }
        </>
    )
}

const DivOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
`

const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
`

const Thumbnail = styled.div`
    border-radius: 15px;
    margin-top: 30px;
    height: 100px;
    width: 110px;
`

const ArrowElement = styled.img`
    position: absolute; 
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    right: 0px;
    border-radius: 50%;
    background-color: white;
    width: 70px;
    height: 70px;
    padding: 20px;
    margin-right: -35px;
`

export default Overlay