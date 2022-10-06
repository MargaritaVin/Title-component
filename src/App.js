import { useState } from 'react';

import Title from "./components/Title";

function App() {
  const [isOpened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
  };

  if(!isOpened) {
    return <button onClick={handleClick}>Open title</button>;
  }

  return <Title name="You opened title" type="normal"/>;
  
  // return (
  //   <div>
  //     <Title name="Products" type="bold"/>
  //     <Title name="Employees" type="normal"/>
  //   </div>
  // );
}

export default App;
