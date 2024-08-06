import React from "react";
import Header from "../header";
import ProductPage from "../product-page";
import Overlay from "../overlay";
import { useState } from "react";
import Product from '../../images/image-product-1.jpg'
import SideBar from "../side-bar";

const Content = () => {
    const [showOverlay, setShowOverlay] = useState(false)
    const [info, setInfo] = useState([Product, 0])
    const [showSideBar, setShowSideBar] = useState(false)
    const [quantity, setQuantity] = useState(0)

    return(
        <>
            {showOverlay &&
                <Overlay 
                    showOverlay={showOverlay} 
                    setShowOverlay={setShowOverlay}
                    info={info}
                    showSideBar={showSideBar}
                />
            }

            {showSideBar &&
                <SideBar 
                    showSideBar={showSideBar}
                    setShowSideBar={setShowSideBar}
                />
            }

            <Header 
                setShowSideBar={setShowSideBar}
                quantity={quantity}
                setQuantity={setQuantity}
            />

            <ProductPage 
                showOverlay={showOverlay} 
                setShowOverlay={setShowOverlay}
                setInfo={setInfo}
                setQuantity={setQuantity}
                quantity={quantity}
            />
        </>
    )
}

export default Content