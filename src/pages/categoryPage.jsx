import { useParams } from 'react-router-dom';
import './categoryPage.css';
import Home from './Home';

const categoryData = {
  chinese: [
    { 
      name: 'Noodles', 
      price: '120₹', 
      img: 'https://img.freepik.com/free-photo/style-still-life-with-noodles-bowl_1150-19766.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Spring Rolls', 
      price: '80₹', 
      img: 'https://img.freepik.com/free-photo/plate-food-with-side-sauce_188544-8402.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Fried Rice', 
      price: '150₹', 
      img: 'https://img.freepik.com/premium-photo/chinesestyle-egg-fried-rice-with-soy-sauce_1230717-326661.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Manchurian', 
      price: '180₹', 
      img: 'https://img.freepik.com/free-photo/pork-meatballs-wooden-surface_1150-43616.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Dim Sum', 
      price: '200₹', 
      img: 'https://img.freepik.com/free-photo/top-view-dumplings-wooden-board_23-2148249232.jpg?t=st=1728492460~exp=1728496060~hmac=f1db7f4c7573a88baccd1c2dc7a751fa22366389d08967a6242da432fad9817b&w=740' 
    }
  ],

  arabian: [
    { 
      name: 'Shawarma', 
      price: '100₹', 
      img: 'https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Kebab', 
      price: '150₹', 
      img: 'https://img.freepik.com/free-photo/top-view-assortment-tasty-kebabs-with-tomatoes-vegetables_23-2148685492.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Falafel', 
      price: '80₹', 
      img: 'https://img.freepik.com/free-photo/falafel-hummus-pita-middle-eastern-arabic-dishes-halal-food-top-view-copy-space_2829-14288.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Hummus', 
      price: '50₹', 
      img: 'https://img.freepik.com/free-photo/view-delicious-food-from-around-world_23-2151596577.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Tabbouleh', 
      price: '120₹', 
      img: 'https://img.freepik.com/free-photo/front-view-minced-vegetables-rice-colored-bright-surface_140725-14450.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    }
  ],

  biriyani: [
    { 
      name: 'Chicken Biriyani', 
      price: '250₹', 
      img: 'https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Mutton Biriyani', 
      price: '300₹', 
      img: 'https://img.freepik.com/free-photo/eid-al-fitr-celebration-with-delicious-food_23-2151205115.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Beef Biriyani', 
      price: '280₹', 
      img: 'https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Fish Biriyani', 
      price: '270₹', 
      img: 'https://img.freepik.com/free-photo/top-view-pan-tasty-seafood-pasta-dish_181624-34753.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Vegetable Biriyani', 
      price: '200₹', 
      img: 'https://img.freepik.com/free-photo/top-view-delicious-vegan-salad-with-various-vegetables_140725-151082.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    }
  ],

  juices: [
    { 
      name: 'Orange Juice', 
      price: '50₹', 
      img: 'https://img.freepik.com/free-photo/fresh-orange-juice-glass-dark-background_1150-45560.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Apple Juice', 
      price: '60₹', 
      img: 'https://img.freepik.com/free-photo/front-view-fresh-natural-delicious-juice-two-glasses-with-red-apple-limes-black-background_140725-140202.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Mango Juice', 
      price: '70₹', 
      img: 'https://img.freepik.com/free-photo/mango-juice-glass-dark-surface_1150-41957.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Pineapple Juice', 
      price: '80₹', 
      img: 'https://img.freepik.com/free-photo/pineapple-juice_144627-22237.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    },
    { 
      name: 'Watermelon Juice', 
      price: '55₹', 
      img: 'https://img.freepik.com/free-photo/front-view-homemade-fresh-watermelon-juice_23-2148293844.jpg?uid=R122928852&ga=GA1.1.1715273335.1728330955&semt=ais_hybrid' 
    }
  ]
};


const CategoryPage = () => {
  const { category } = useParams();
  const items = category ? categoryData[category.toLowerCase()] : [];

  return (
    <div className='app'>
      <div className="item-list">
        <h2>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Menu` : ''}</h2>
        {items.length > 0 ? (
          <section>
          <div className="menu-grid">
            {items.length > 0 && items.slice(0, 5).map((item, index) => (
              <div key={index} className="menu-card">
                <img src={item.img} alt={item.name} className="menu-img" />
                <div className="menu-details">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        ) : (
          <div>
            <Home />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;