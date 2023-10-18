import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => { console.log('click')}} >

  </ChildAsFC>
};

export default Parent;
 