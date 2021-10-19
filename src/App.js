import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by Theresa Breitwieser, open-sourced on <a href="https://github.com/TheresaBreitwieser/dictionary-react" target="_blank" rel="noreferrer"> Github</a></footer>
      </div>
    </div>
  );
}


