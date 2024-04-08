import './App.css';
import Product from './Components/Custom Products/Product';
import Home from './Components/Home/Home';
import NAVBAR from './Components/Navbar/Navbar';
import Photo from './Components/PHOTO Frames/Photo';
import Staiton from './Components/Stationary/Staiton';
import Visitingcard from './Components/Visitingcard/Visitingcard';


function App() {
  return (
    <div className="App">
        <NAVBAR />
        <Home />
        <Visitingcard />
        <Staiton />
        <Product />
        <Photo />
    </div>
  );
}

export default App;
