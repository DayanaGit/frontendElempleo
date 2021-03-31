
// eslint-disable-next-line no-new-object
const from = new Object();

const handleInput = (event, id) => {

  console.log(event.Id);
  console.log(id);
  from[id] = event.Id;
  console.log(from);

};

export default handleInput;

