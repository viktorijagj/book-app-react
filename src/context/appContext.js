import { createContext, useState, useContext } from "react";

const AppContext = createContext(null);

// create hook for appContext

export const useAppContextProvider = ()=>{
   const context = useContext(AppContext);

   if(context === undefined){
    throw new Error('App context undefined!')
   }
   return context;
}

const AppContextProvider = ({children})=> {
    // state for favourite Books
    const[fav,setFav] = useState([]);

    // addToFavourties
    const addFav = (book) => {
        const oldFav = [...fav];
        const newFav = oldFav.concat(book)
        setFav(newFav);
    }
    // removeToFavourites
    const removeFav = (id) => {
        const oldFav=[...fav];
        const newFav = oldFav.filter((item)=>item.id !==id);
        setFav(newFav);
    }

return <AppContext.Provider value={{fav,addFav,removeFav}}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;