import Header from './root-components/Header';
import Main from './root-components/Main';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
