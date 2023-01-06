import { Divider, Input } from 'antd';


const AddFoodForm = (props) => {

const addFood = (event) => {
    event.preventDefault();
let arrayInput = document.querySelectorAll("input")
let newObjectToAdd = {
    "name": arrayInput[0].value,
    "calories": arrayInput[1].value,
    "image": arrayInput[2].value,
    "servings": arrayInput[3].value
  }
props.setFood([newObjectToAdd,...props.food])
}
   
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text"  />

      <label>Image</label>
      
      <Input value={undefined} type="text"  />

      <label>Calories</label>
      <Input value={undefined} type="number"  />

      <label>Servings</label>
      <Input value={undefined} type="number"  />

      <button type="submit" onClick={(event)=> addFood(event)}>Create</button>
    </form>


  );
}

export default AddFoodForm;
