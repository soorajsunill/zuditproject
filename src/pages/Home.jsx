import React from 'react';
import { Star } from 'lucide-react';
import './Home.css'
import turkish from "../assets/turkish-arabic-min.jpg";

import chicken_skewers from "../assets/chicken-skewers-with-slices-sweet-peppers-dill-min.jpg";
import chicken_zucchini from "../assets/chicken-zucchini-sweet-min.jpg";
import pre_prepared_food from "../assets/pre-prepared-food-showcasing-ready-eat-delicious-meals-go-min.jpg";

import pink_milkshakes from "../assets/close-up-pink-milkshakes-min.jpg";
import fresh_orange from "../assets/fresh-orange-min.jpg";
import fruits_smoothie from "../assets/healthy-fruits-smoothie-min.jpg";

import biriyani_1234 from "../assets/biriyani-1234-min.jpg";
import pizza_filled from "../assets/pizza-pizza-filled-with-tomatoes-salami-olives-min.jpg";
import grilled_chicken from "../assets/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl-min.jpg";

import brenda_godinez from "../assets/brenda-godinez-nkHBFwVBzkg-unsplash-min.jpg";
import tara_evans from "../assets/tara-evans-lnz6eLsQrMM-unsplash-min.jpg";
import meat_burger from "../assets/front-view-tasty-meat-burger-with-cheese-salad-dark-background-min.jpg";

const FoodCard = ({ title, rating, image }) => (
  <div className="food-card">
    <img src={image} alt={title} className="food-card-image" />
    <div className="food-card-content">
      <h3>{title}</h3>
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < rating ? "star filled" : "star"}
          />
        ))}
      </div>
    </div>
  </div>
);

const CategoryButton = ({ icon, label }) => (
  <button className="category-button">
    <img src={icon} alt={label} className="category-icon" />
    <span>{label}</span>
  </button>
);

const Home = () => {
  const featuredRecipe = {
    title: "Mighty Super Turkish Arabic",
    image: turkish,
    description: "Luscious recipe for a creamy and light strawberry rose cheesecake.",
  };

  const superDeliciousRecipes = [
    { title: "Creamy Pesto Pasta", rating: 4, image: chicken_skewers },
    { title: "Fluffy Glazed Donuts", rating: 5, image: chicken_zucchini },
    { title: "Mighty Breakfast Burger", rating: 4, image: pre_prepared_food },
  ];

  const sweetToothRecipes = [
    { title: "Strawberry Milkshake", rating: 5, image: pink_milkshakes },
    { title: "Chocolate Lava Cake", rating: 4, image: fresh_orange },
    { title: "Blueberry Pancakes", rating: 5, image: fruits_smoothie },
  ];

  const categories = [
    { icon: biriyani_1234, label: "Chicken Biriyani" },
    { icon: pizza_filled, label: "Pizza" },
    { icon: grilled_chicken, label: "Vegan" },
    { icon: brenda_godinez, label: "Desserts" },
    { icon: tara_evans, label: "Smoothies" },
    { icon: meat_burger, label: "Burgers" },
  ];

  return (
    <div className="app">
      <div className="featured-recipe">
        <img src={featuredRecipe.image} alt={featuredRecipe.title} />
        <div className="featured-content">
          <h2>{featuredRecipe.title}</h2>
          <p>{featuredRecipe.description}</p>
        </div>
      </div>

      <section>
        <h2>Super Delicious</h2>
        <div className="recipe-grid">
          {superDeliciousRecipes.map((recipe, index) => (
            <FoodCard key={index} {...recipe} />
          ))}
        </div>
      </section>

      <section>
        <h2>Sweet Tooth</h2>
        <div className="recipe-grid">
          {sweetToothRecipes.map((recipe, index) => (
            <FoodCard key={index} {...recipe} />
          ))}
        </div>
      </section>

      <section>
        <h2>Popular Categories</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <CategoryButton key={index} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;