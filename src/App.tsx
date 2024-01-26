import './App.css';
import { Oscar } from './Oscar';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { User } from './components/state/User';

function App() {
  const personName = {
    first:'Bruce',
    last:'Wayne'
  }

  const nameList = [
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Clart',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name='Mark' isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='success' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log("Button clicked",event,id)
      }}/>
      <br/><br/>
      <Input value='' handleChange={(event)=> console.log(event)}/>
      <br/><br/>
      <Container styles={{ border:'1px solid black', padding:'1rem'}}/>
      <User />
    </div>
  );
}

export default App;
