
import './App.css';
import Header from './Component/Header';
import Model from './Component/Model';
import ProductList from './Component/ProductList';
function App() {

  return (
    <div className="App" >
     <Header/>
      <div className="overlay"></div>
     <Model/>
     
    </div>
  );
}

export default App;
