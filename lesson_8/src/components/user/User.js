import React from 'react';
import {Card, Button, Col} from "react-bootstrap";

function User({info}) {

    return (
        <Col xl={3}>
            <Card style={{width: '100%', marginBottom: "25px"}}>
                <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default User;