import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import './Home.css';

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
  // Array of featured recipes
  const featuredRecipes = [
    {
      title: "Mighty Super Turkish Arabic",
      image: 'https://img.freepik.com/free-photo/turkish-arabic-traditional-ramadan-mix-kebab-plate-kebab-adana-chicken-lamb-beef-lavash-bread-with-sauce-top-view_2829-6169.jpg',
      description: "Luscious recipe for a creamy and light strawberry rose cheesecake."
    },
    {
      title: "Delicious Italian Pizza",
      image: 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_2829-19176.jpg',
      description: "A classic margherita pizza loaded with tomatoes and fresh basil."
    },
    {
      title: "Spicy Chicken Biryani",
      image: 'https://img.freepik.com/free-photo/veg-biryani-veg-pulav-fried-rice-indian-food-generative-ai_1258-151588.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid',
      description: "A flavorful blend of spices and chicken cooked with basmati rice."
    },
    {
      title: "Margherita Pizza",
      image: 'https://img.freepik.com/free-photo/high-angle-arugula-pizza-with-tomatoes_23-2148574282.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid',
      description: " A classic Italian pizza with a crispy, thin crust topped with fresh mozzarella."
    },
    {
      title: "Mango Tango",
      image: 'https://img.freepik.com/free-photo/delicious-thai-food-still-life_23-2149508927.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid',
      description: "Ripe, juicy mangoes blended into a silky, tropical drink that's both sweet and slightly tart."
    },
    {
      title: "Green Detox",
      image: 'https://img.freepik.com/free-photo/water-with-cucumber-herbs-detox_501050-978.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid',
      description: " A nutrient-rich combination of kale, spinach, cucumber, green apple, and a hint of ginger. "
    },
    {
      title: "Watermelon Breeze",
      image: 'https://img.freepik.com/free-photo/glass-watermelon-smoothie-basket-bread-white-table_114579-30482.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid',
      description: " Crisp and hydrating watermelon juice with a touch of mint and lime for a refreshing, cool drink."
    },
    {
      title: "Special Shawarma",
      image: 'https://img.freepik.com/free-photo/view-tasty-shawarma-dish_23-2151805442.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid',
      description: "Thinly sliced marinated meat (usually lamb, beef, or chicken) cooked on a rotating spit,. "
    }
  ];

  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  // Automatically change recipe every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % featuredRecipes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredRecipes.length]);

  // Function to handle next recipe
  const handleNext = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % featuredRecipes.length);
  };

  // Function to handle previous recipe
  const handlePrevious = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex - 1 + featuredRecipes.length) % featuredRecipes.length);
  };

  const superDeliciousRecipes = [
    { title: "Creamy Pesto Pasta", rating: 4, image: 'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg' },
    { title: "Fluffy Glazed Donuts", rating: 5, image: 'https://img.freepik.com/free-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion-with-chopsticks_2829-10785.jpg' },
    { title: "Mighty Breakfast Burger", rating: 4, image: 'https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431678.jpg' },
  ];

  const sweetToothRecipes = [
    { title: "Strawberry Milkshake", rating: 5, image: 'https://img.freepik.com/free-photo/close-up-pink-milkshakes_23-2148635705.jpg' },
    { title: "Chocolate Lava Cake", rating: 4, image: 'https://img.freepik.com/free-photo/fresh-orange-juice-glass-dark-background_1150-45560.jpg' },
    { title: "Blueberry Pancakes", rating: 5, image: 'https://img.freepik.com/free-photo/top-view-father-s-day-dessert-with-pancakes_23-2148548466.jpg' },
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
        <img src={featuredRecipes[currentRecipeIndex].image} alt={featuredRecipes[currentRecipeIndex].title} />
        <div className="featured-content">
          <h2 className='h222'>{featuredRecipes[currentRecipeIndex].title}</h2>
          <p>{featuredRecipes[currentRecipeIndex].description}</p>
        </div>

        {/* Arrow Buttons */}
        <button className="arrow-button left" onClick={handlePrevious}>‹</button>
        <button className="arrow-button right" onClick={handleNext}>›</button>
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
