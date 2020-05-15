import React from 'react';
import Header from './components/Header'
import Main from './pages/main'

import './styles.css'

//stateless components
const App = () => (
  <div className="App">
    <Header />
    <Main />
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
