
import React,{ useState} from 'react';
import NavBar from './components/NavBar';
import MainCard from './components/Maincard';
import Modals from './components/Modals';
import CartProvider from '../src/store/ContextProvider'


function App() {

  const [show,setShow] = useState(false);

  const onclickHandler = () => setShow(true);
  const onHideHandler = () => setShow(false);





  return (
  
    <CartProvider>
    {show && <Modals show={show} onHide={onHideHandler}/>}
    <NavBar/>
    <MainCard onshow={onclickHandler}/>
    


    </CartProvider>
  );
}

export default App;


