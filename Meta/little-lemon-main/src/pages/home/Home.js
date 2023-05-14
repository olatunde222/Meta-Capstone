import React from 'react';
import { Link } from "react-router-dom";
import Main from "../../assets/main.png";
import GreekSalad from "../../assets/greek-salad.webp";
import Bruschetta from "../../assets/bruschetta.png";
import Cake from "../../assets/Lemon-cake.jpeg";
import Person1 from '../../assets/person1.png';
import Person2 from '../../assets/person2.png';
import Person3 from '../../assets/person3.png';
import Person4 from '../../assets/person4.png';
import "./Home.css"
import CardMenu from '../../components/CardMenu';
import Testimonials from '../../components/Testimonials';
import AboutUs from '../../components/AboutComp';

export default function Hero() {

    return (
      <>
            <div className='hero'>
                <div className='hero-title'>
                  <h1>Little Lemon</h1>
                  <h3>Chicago</h3>
                  <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                  <Link to='/reservation' >Reserve a table</Link>
                </div>
                <img src={Main} alt="hero" />
            </div>
            <div className='special-online' >
              <h4 className='specials'> Specials</h4>
              <Link className='online-menu' to='/menu' >Online Menu</Link>

            </div>
            <div className="card-container">
              <CardMenu img={GreekSalad} title={"Greek Salad"} desc={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}/>
              <CardMenu img={Bruschetta} title={"Bruschetta"} desc={"Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."}/>
              <CardMenu img={Cake} title={"Lemon Cake"} desc={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}/>
            </div>
            <div className='testi-container'>
            <h1 className='testimonial-title'>Testimonials</h1>
              <div className="testimonial-cards">
                <Testimonials  img={Person1} name={"Michael B."} comment={<q>The service was incredible from check in.</q>}    />
                <Testimonials  img={Person2} name={"Briana J."} comment={<q>The greek salad was amazing.</q>}/>
                <Testimonials  img={Person3} name={"Jack A."} comment={<q>The best lemon cake ever!</q>}/>
                <Testimonials  img={Person4} name={"Karen W."} comment={<q>The best greek salad I ever tested.</q>}/>
              </div>
            </div>
            <AboutUs />
        </>
    )
}
  