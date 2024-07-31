import {  useReducer ,useCallback,useEffect } from "react";
import NoteContext from "./NoteContext";

const defaultCartState ={
    items:[]
}


const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        console.log('state',state);
        console.log('action',action);
        var updatedItem = state.items.concat(action.item)

        return{
            items:updatedItem,
          
        }
    }

   


    if(action.type === 'SET_ITEMS'){
        console.log('Action state')
        let updatedItem = action.items;
        return{
            items:updatedItem,
         
        }
    }

    if(action.type === 'REMOVE'){
        let updatedItems = state.items.filter(item => item.id !== action.id);
        
        return{
            items:updatedItems
        }
    }

return defaultCartState;


   
 }
    

   





const NoteProvider = (props) => {


    const [cartstate , dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );


    ///here we need to fetch the all notes while initially 

    const fetchCartItems = useCallback(async () => {
       
  
        try {
            const response = await fetch('https://notebook-775c3-default-rtdb.firebaseio.com/notes.json');
            if (!response.ok) {
                throw new Error('Fetching cart error, please check again');
            }
            const data = await response.json();
            console.log(data)
            const fetchedItems = [];
  
            for (const key in data) {
                fetchedItems.push({
                    key: key,
                    id: key,
                    title: data[key].title,
                    description: data[key].description
                });
            }


  
            dispatchCartAction({ type: 'SET_ITEMS', items: fetchedItems });
        } catch (error) {
            console.log(error);
        }
    }, []);
  
    useEffect(() => {
       
            fetchCartItems();
       
    }, [fetchCartItems]);


    const addItemHandler = (item) => {
        dispatchCartAction({type:'ADD',item:item})
    }

    const removeItemHandler = (id) => {
        dispatchCartAction({type:'REMOVE',id:id})
    }

    const setItemsHandler = (items) => {
        dispatchCartAction({ type: 'SET_ITEMS', items: items });
      };



    const noteContext = {
        items:cartstate.items,
        setItems: setItemsHandler,
        addItem:addItemHandler,
        removeItem:removeItemHandler

    }













    return(
    <NoteContext.Provider value={noteContext}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteProvider;