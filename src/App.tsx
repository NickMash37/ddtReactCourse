import './App.css';
// @ts-ignore
import ToggleText from './components/ToggleText';
import {Clock} from "./components/Clock";

function App() {
  return (
    <div className="App">
       <h1>Hello ddtReactCourse!</h1>
        <ToggleText text={'Я пизже, чем Киркоров!'}/>
        <Clock />
    </div>
  )
}

export default App;
