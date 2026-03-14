import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export   function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

function Item({ name, importance }) {
 return (
    <li className="item">
       {name} 
       {importance > 0 && ' '}
       {importance > 0 && ('Importance:'  + importance) }
       
       
    </li>
  );
}

export   function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9}
          name="Space suit" 
        />
        <Item 
             importance={0}
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6}
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

function Drink({ name }) {
  let plant = (name === 'tea') ? 'leaf' : 'bean';
  




  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
      </dl>
    </section>
  );
}

export   function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

export   function List() {
  const chemists = people.filter(person => 
    person.profession === 'chemist'

  );
  const listItems = chemists.map(person =>
     <li>
     
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
  );
  return <ul>{listItems}</ul>;
}



