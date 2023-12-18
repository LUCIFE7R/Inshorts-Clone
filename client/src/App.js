
import  Articles  from './components/Articles';
import './App.css';
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
function App() {
  return (
    <div className="App">
     <Header/>
     <div className='InfoHeader'>
     <InfoHeader/>
     <Articles/>
     </div>
    </div>
  );
}

export default App;
