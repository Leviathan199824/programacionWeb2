import './App.css';
import Prueba from './Componentes/Prueba';
import Hijo from './Componentes/Hijo';
import Primero from './Componentes/Primero';
import Segundo from './Componentes/Segundo';

function App() {
  return (
    <div>
      <Prueba nombre="juan"></Prueba>
      <p>tengo :</p>
      <Primero edad="24"></Primero>
      <p> años de edad y mi apellido es :</p>
      <Segundo apellido="galarza"></Segundo>
      <Hijo></Hijo>
    </div>
  );
}

export default App;
