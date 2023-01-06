import { Divider, Input } from 'antd';


const Search = (props) => {

const search = (e) => {

  props.setFood((current) =>
  current.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase()) ))
    
}

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(e) => {search(e)}} />
    </>
  );
}

export default Search;