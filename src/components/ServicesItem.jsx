import React from 'react'

function ServicesItem({path,label,src,text,text2}) {
    return (
        <>
        <li className="cards__item">
            <a className="cards__item__link" href="#subscribe">
                <figure className="cards__item__pic-wrap" data-category={label}>
                    <img src={src} alt="" className="cards__item__img"/>
                </figure>

                <div className="cards__item__info">
                    <h5 className="cards__item__text">
                        {text}
                    </h5>
                    <p className="cards__item__text">{text2}</p>
                </div>
            </a>
        </li>
            
        </>
    )
}

export default ServicesItem