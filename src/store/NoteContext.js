import React from "react";



const NoteContext = React.createContext({
    items:[],
    addItem:()=>{},
    setItems: () => {}, // Add setItems method
    removeItem:()=>{}
});

export default NoteContext;