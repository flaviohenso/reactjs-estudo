import React from 'react';
import Header from './components/Header'

import Routes from './routes'

import './styles.css'

//stateless components
const App = () => (
  <div className="App">
    <Header />
    <Routes/>

  </div>
)

//stateless components
/* function App() {
  return (
    <div className="App">
      <h1>Ola Flávio Henrique</h1>
    </div>
  );
}
 */
export default App;
