
import React from 'react'
import './productBox.css'
function ProductBox({link, Logo, title, description, bgColor, fontColor, textHover}) {
    return (
        <a className='box' href={link}>
            <Logo style={{ fontSize: 55, marginBottom: 10, color: "black" }}/>
            <h2 className='box__title'>{title}</h2>
            <p className='box__description'>{description}</p>

            {/*Maked other box to transitioni*/}
            <div className='box__hover'style={{background: bgColor, color: fontColor}}>
                <h3>{textHover}</h3>
            </div>
        </a>
    )
}

export default ProductBox
