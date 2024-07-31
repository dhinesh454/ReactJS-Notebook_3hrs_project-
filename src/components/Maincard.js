import React, { useContext,useState,useEffect } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import NoteContext from "../store/NoteContext";
import Notelist from "./Notelist";

const MainCard = (props) => {


    const ctx = useContext(NoteContext);

    const [filteredItems, setFilteredItems] = useState(ctx.items); // State to hold filtered items

    useEffect(() => {
        setFilteredItems(ctx.items); // Initialize filteredItems with all items on load
    }, [ctx.items]);

    function searchHandler(event) {
        const searchTerm = event.target.value.toLowerCase();
        const searchArray = ctx.items.filter((item) => 
            item.title.toLowerCase().includes(searchTerm)
        );
        setFilteredItems(searchArray); // Update state with filtered items
    }
    

    return(
        <>
        <Card style={{width:'30rem'}} className="m-auto p-2">
            <Card.Header>NoteBooks</Card.Header>
            <Card.Body>
               
                
               <InputGroup >
                <Form.Label className="m-1 p-1 ">Search</Form.Label><br/>
                 <Form.Control
                    type="text"
                    id="inputtext"
                    onChange={searchHandler}
                 />   
               </InputGroup>

               <div className="d-flex justify-start
            flex-column gap-2 m-2 p-1">
                <p>TotalNotes:{ctx.items.length}</p>
                <p>Showing:{filteredItems.length}</p>
                
                </div>

               <Button className="m-2" variant="dark" onClick={props.onshow}>Add NoteBook</Button>
            </Card.Body>
        </Card>
        <Notelist items={filteredItems}/>
        </>

    )
};

export default MainCard;