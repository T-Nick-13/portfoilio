import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import {pictures} from '../../utils/constants';

function App() {


  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main
          cards={pictures}
        />
        <Footer />
      </div>

    </div>
  );
}


export default App;
