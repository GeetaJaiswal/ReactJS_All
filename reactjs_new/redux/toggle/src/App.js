import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { incNumber, decNumber } from './action';

function App() {
  const myState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div class="container">
        <h1>Increment/Decrement Counter</h1>
        <div class="quantity">
        <div class="quantity-ul">
          <button onClick={()=>dispatch(decNumber())} class="count" title="Decrement">-</button>
          <input type="text" name="quantity" value={myState} class="count"/>
          <button onClick={()=>dispatch(incNumber(5))} class="count" title="Increment">+</button>
        </div>  
        </div>
      </div>
    </>
  );
}

export default App;
