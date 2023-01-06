// src/App.js
import './App.css';
import foods from './foods.json';
import { useState, useEffect } from 'react';
import FoodBox from './Component/FoodBox';
import AddFoodForm from './Component/AddFoodForm';
import Search from './Component/Search';
import { Divider, Button } from 'antd';
import noContent from './asset/no-more-content.png'

function App() {
  const [food, setFood] = useState([]);
  const [hide, setHide] = useState(false);


  useEffect(() => {
    setFood(foods);
  }, []);

  return (
    <div className="App">
      {!hide && (
        <div className="AddFood">
          <AddFoodForm food={food} setFood={setFood} />
        </div>
      )}
      <div className="button">
        <Button type="primary" onClick={() => setHide(!hide)}>
            {!hide ? 'Hide Form' : 'Add New Food'}
        </Button>
      </div>
      <div className="SearchFood">
        <Search food={food} setFood={setFood} />
      </div>
      <Divider>Food List</Divider>
      {food.length > 0 ? (
        <div className="food">
          {food.map((element, index) => (
            <div key={index}>
              <FoodBox food={element} setFood={setFood} />
            </div>
          ))}
        </div>
      ) : (
        <div className='noContent'>
          <h3>Oops! There is no more content to show</h3>
          <img src={noContent} width="200px" alt="noContent" />
          <h3>Reload Food List? <Button type="primary" onClick={() => window.location.reload()}>
           YES
          </Button></h3>
        </div>
      )}
    </div>
  );
}
export default App;
