import { useEffect } from 'react';
import './App.css';
import ListAggregatedProducts from './Components/ListAggregatedProducts';
import ProductsList from './Components/ProductsList';
import useStore from './store';

function App() {
  const { OpenAddedProductsList,FecthData, } = useStore();
 
  useEffect(()=>{
    FecthData();
  },[])
  
  return (
    <div className="App">
      {
        OpenAddedProductsList ? <ListAggregatedProducts /> : <ProductsList />
      }
    </div>
  );
}

export default App;
