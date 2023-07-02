
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Viewcuisine from './components/Viewcuisine';
import AddCuisine from './components/AddCuisine';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Viewcuisine/>}/>
        <Route path ='/add' element = {<AddCuisine data={{"CuisineName": "", 
        "Duration": "",
        "Servings": "", 
        "Image": ""}} method="post"/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
