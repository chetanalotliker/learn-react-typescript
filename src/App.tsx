import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne'
  }
  return (
    <div className="App">
      <Greet name='Chetana' messageCount={20} isLoggedIn={false} />
      <Person name={personName}/>
    </div>
  );
}

export default App;
