import './App.css';
import { ColoredLine } from './ColoredLine';
import { Oscar } from './Oscar';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Counter } from './components/state/Counter';
import { User } from './components/state/User';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';

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
      <br></br>
      <ColoredLine color="black" />
      <p>useReducer</p>
      <Counter/>
      <br></br>
      <ColoredLine color="black" />
      <p>useContext</p>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Private isLoggedIn={true} Component={Profile}/>

      <List items={['Batman','Superman','Wondar Woman']} onClick={(item)=> console.log(item)} />

      <List items={[1,2,3]} onClick={(item)=> console.log(item)}/>

      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
