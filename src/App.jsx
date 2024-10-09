import "./App.css";
import PreviewCard from './components/PreviewCard';
import Header from './components/Header';
import Recipe from './components/Recipe';

function App() {

  return (
    <>
      <Header/>
       <Recipe />
       <main className="mainContainer">
        <PreviewCard />
      </main>
    </>
  );
}

export default App;
