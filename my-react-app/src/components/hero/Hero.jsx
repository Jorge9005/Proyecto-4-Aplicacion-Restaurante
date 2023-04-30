import './hero.css'
import React from 'react'
import restaurant from '../../assets/img/restaurant-hero.jpg'

const Hero = () => {
    return (
        <div className='restaurant-hero'>
            <div>
                <img src={restaurant} alt="restaurant-hero" />
            </div>
            <div className='hero-content'>
                <h1>¡Ven a disfrutar del mejor restaurante!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sit, soluta reprehenderit possimus voluptates veritatis amet cum labore fugiat ducimus optio sunt dolorem autem alias, impedit inventore mollitia aspernatur eveniet.</p>
                <button className='btn-hero'>Reserva Aquí</button>
            </div>
        </div>
    )
}

export default Hero