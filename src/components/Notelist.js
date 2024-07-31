import React, { useContext } from "react";
import NoteContext from "../store/NoteContext";
import NoteItem from "./NoteItem";



const Notelist = (props) =>{
    const authCtx = useContext(NoteContext);

    const cartItemRemoveHandler = async (id) => {
        try {
            const res =  await fetch(`https://notebook-775c3-default-rtdb.firebaseio.com/notes/${id}.json`, {
                method: 'DELETE',
            });
            if (!res.ok) {
                throw new Error('Failed to delete cart item.');
            }
        } catch (error) {
            console.error(error);
        }
        authCtx.removeItem(id)
      }  
  
      
    
    console.log(authCtx.items)
    if(props.items.length===0){
        return(
        <p className="text-center m-2 p-2">No Notes Found!!!...</p>
        )
    }

    const noteItems = (<ul className="m-3 p-2">
        {props.items.map(item => <NoteItem
          key ={item.key}
          id={item.id}
          title ={item.title}
          description = {item.description}
          onRemove ={cartItemRemoveHandler.bind(null,item.id)}
       />)}
     </ul>);

     return(
        <div>
            {noteItems}
        </div>
     )
};

export default Notelist;