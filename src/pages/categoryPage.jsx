import { useParams } from 'react-router-dom';
import './firstpage.css';
import Home from './Home';

const categoryData = {
  chinese: [
    { name: 'Noodles', price: '120₹', img: 'images/pexels-kunal-lakhotia-781256899-28674525-min.jpg' },
    { name: 'Spring Rolls', price: '80₹', img: 'images/pexels-jerchung-2059151-min.jpg' },
    { name: 'Fried Rice', price: '150₹', img: 'images/pexels-huzaifabukhari-16845748-min.jpg' },
    { name: 'Manchurian', price: '180₹', img: 'images/pexels-kunal-lakhotia-781256899-28674530-min.jpg' },
    { name: 'Dim Sum', price: '200₹', img: 'images/pexels-yassir-abbas-157457256-15503579-min.jpg' }
  ],
  arabian: [
    { name: 'Shawarma', price: '100₹', img: 'images/chicken-wrap-served-with-fries-salad (1)-min.jpg' },
    { name: 'Kebab', price: '150₹', img: 'images/chicken-skewers-with-slices-sweet-peppers-dill (1)-min.jpg' },
    { name: 'Falafel', price: '80₹', img: 'images/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food-min.jpg' },
    { name: 'Hummus', price: '50₹', img: 'images/view-delicious-hummus-plate-still-life-min.jpg' },
    { name: 'Tabbouleh', price: '120₹', img: 'images/suchandra-varma-05tbxjYFWFA-unsplash-min.jpg' }
  ],
  biriyani: [
    { name: 'Chicken Biriyani', price: '250₹', img: 'images/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table-min.jpg' },
    { name: 'Mutton Biriyani', price: '300₹', img: 'images/Mutton Biriyani-min.jpg' },
    { name: 'Beef Biriyani', price: '280₹', img: 'images/Beef Biriyani-min.jpg' },
    { name: 'Fish Biriyani', price: '270₹', img: 'images/Fish Biriyani-min.jpg' },
    { name: 'Vegetable Biriyani', price: '200₹', img: 'images/Vegetable Biriyani-min.jpg' }
  ],
  juices: [
    { name: 'Orange Juice', price: '50₹', img: 'images/pexels-mirrographer-1194028-min.jpg' },
    { name: 'Apple Juice', price: '60₹', img: 'images/apple.webp' },
    { name: 'Mango Juice', price: '70₹', img: 'images/Mango Juice-min.jpg' },
    { name: 'Pineapple Juice', price: '80₹', img: 'images/Pineapple Juice-min.jpg' },
    { name: 'Watermelon Juice', price: '55₹', img: 'images/Watermelon Juice-min.jpg' }
  ]
};

const CategoryPage = () => {
  const { category } = useParams();
  const items = category ? categoryData[category.toLowerCase()] : [];

  return (
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
  );
};

export default CategoryPage;
