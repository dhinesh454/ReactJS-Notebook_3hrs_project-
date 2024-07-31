import  { useContext, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import NoteContext from "../store/NoteContext";




const Modals = (props) => {

    const authCtx = useContext(NoteContext)

    const TitleRef = useRef();
    const DescRef = useRef();


    async function submitHandler(event){
        event.preventDefault();
        props.onHide();

        try {
           const title = TitleRef.current.value;
           const desc = DescRef.current.value;
           const item={title,description:desc}
           const response = await fetch('https://notebook-775c3-default-rtdb.firebaseio.com/notes.json',{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json'
            }
           });


           if(!response.ok){
                throw new Error('Error..check again item not added')
           }
           const data = await response.json();
           item.key = data.name;
           item.id = data.name;
           authCtx.addItem(item);
        } catch (error) {
            console.log(error)
        }
       
    }

    return(
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>Add Notes</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label >Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the Title"
                                ref={TitleRef}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                ref={DescRef}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                    <Button onClick={submitHandler}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default Modals;

