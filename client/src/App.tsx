import './App.scss';
import { Account } from './Components/Account';
import { LeftBlock } from './Components/LeftBlock';
import { MiddleBlock } from './Components/MiddleBlock';

function App() {
  return (
    <div className="App">
      <LeftBlock/>
      <MiddleBlock/>
      <Account/>
    </div>
  );
}

export default App;
