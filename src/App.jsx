import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import CategoryPage from './pages/categoryPage';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
