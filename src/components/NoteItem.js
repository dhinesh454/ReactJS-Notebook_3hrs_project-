import React from "react";
import { Card ,Button} from "react-bootstrap";


const NoteItem = (props) => {
    return(
    <Card style={{width:'30rem'}} className="p-2 m-auto">
    
      <Card.Body>
        <Card.Text>
        <h3>{props.title}</h3>
          {props.description}
        </Card.Text>
        <div className="d-flex justify-content-end">
      <Button className="ml-auto" variant="danger" onClick={props.onRemove}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
    )
};

export default NoteItem;