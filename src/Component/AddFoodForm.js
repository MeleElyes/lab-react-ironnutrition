import { Divider, Input } from 'antd';
import { useState } from 'react';

const AddFoodForm = (props) => {
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
  });
  const addFood = (event) => {
    event.preventDefault();
    props.setFood([newFood, ...props.food]);
  };

  const addNewFood = (e) => {
    setNewFood((newFood) => ({ ...newFood, [e.target.name]: e.target.value }));
  };

  console.log(newFood)
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={undefined}
        type="text"
        name="name"
        onChange={(e) => addNewFood(e)}
      />

      <label>Image</label>

      <Input
        value={undefined}
        type="text"
        name="image"
        onChange={(e) => addNewFood(e)}
      />

      <label>Calories</label>
      <Input
        value={undefined}
        type="number"
        name="calories"
        onChange={(e) => addNewFood(e)}
      />

      <label>Servings</label>
      <Input
        value={undefined}
        type="number"
        name="servings"
        onChange={(e) => addNewFood(e)}
      />

      <button type="submit" onClick={(event) => addFood(event)}>
        Create
      </button>
    </form>
  );
};

export default AddFoodForm;
