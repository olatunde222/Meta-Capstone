import React from "react";
import GreekSalad from "../../assets/greek-salad.webp";
import Bruschetta from "../../assets/bruschetta.png";
import Pasta from "../../assets/pasta.png";
import Fish from "../../assets/fish.png";
import Cake from "../../assets/Lemon-cake.jpeg";
import './Menu.css'


export default function Menu() {
  return (
    <div className="special-menu">
        <p className="week-special">This week specials!</p>
      <div className="menu-list">
        <div>
          <img src={GreekSalad} alt="greek salad" />
          <div>
            <h2>Greek Salad</h2>
            <span>$12.99</span>
          </div>
          <div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
          </div>
          <div>
            <p>Order a delivery</p>
          </div>
        </div>
        <div>
          <img src={Bruschetta} alt="bruschetta" />
          <div>
            <h2>Bruschetta</h2>
            <span>$5.99</span>
          </div>
          <div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.{" "}
            </p>
          </div>
          </div>
          <div>
          <img src={Pasta} alt="pasta" />
          <div>
            <h2>Pasta</h2>
            <span>$10.99</span>
          </div>
          <div>
            <p>
              Our pasta is made from grate italian sauce that has been smeared
              with garlic and seasoned with salt and olive oil.{" "}
            </p>
          </div>
        </div>
        <div>
          <img src={Fish} alt="fish" />
          <div>
            <h2>Fish And Chips</h2>
            <span>$10.99</span>
          </div>
          <div>
            <p>
              Our Fish and chips is the best that has been smeared
              with garlic and seasoned with salt and olive oil.{" "}
            </p>
          </div>
        </div>
        <div>
          <img src={Cake} alt="lemon-dessert" />
          <div>
            <h2>Lemon Dessert</h2>
            <span>$5.00</span>
          </div>
          <div>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.{" "}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
