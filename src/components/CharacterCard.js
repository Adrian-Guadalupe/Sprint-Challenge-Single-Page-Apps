import React, { useState } from "react";
import {
  Card, CardImg, CardText, CardBody,
  Collapse, CardHeader, CardFooter, Button
} from 'reactstrap';

export default function CharacterCard({ character }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return ( 
      <Card className='charCard'>
        <CardHeader tag="h3">{character.name}</CardHeader>
        <CardImg src={character.image} alt={character.name} /> 
        <CardBody>
          <CardText tag='h4'>Status: {character.status}</CardText>
          <CardText>Gender: {character.gender}</CardText>
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Read More</Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  Created: {character.created}
                </CardBody>
              </Card>
            </Collapse>
        </CardBody>
        <CardFooter tag='h4' className="text-muted">Species: {character.species}</CardFooter>
      </Card>
  );
};