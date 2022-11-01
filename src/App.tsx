import style from './App.module.scss';
import Header from './root-components/Header';
import Main from './root-components/Main';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
