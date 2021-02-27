import List from './components/List';
import data from './data';
import { useState } from 'react';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {people.length > 0 ? (
          <button onClick={() => setPeople([])}>clear all</button>
        ) : (
          <button>add more</button>
        )}
      </section>
    </main>
  );
}

export default App;
