import './App.css'; 
import { Route, Routes } from 'react-router';
import Main from './componets/Main';
import BookDetails from './componets/BookDetails';
import Favourites from './componets/Favourites';
import Header from './componets/Header';
import Footer from './componets/Footer';
import SearchedResult from './componets/SearchedResult';

function App() {
  return (
    
    <div className="flex flex-col h-screen text-center">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/details/:id' element={<BookDetails/>} />
        <Route path='/favourites' element={<Favourites/>} />
        <Route path='/searched/:search' element={<SearchedResult/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
