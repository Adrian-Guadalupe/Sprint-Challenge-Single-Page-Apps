import React, { useState } from "react";
import {
  Card, CardImg, CardText, CardBody,
  Collapse, CardHeader, CardFooter, Button
} from 'reactstrap';

export default function EpisodeCard({ episode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return ( 
      <Card className='charCard'>
        <CardHeader tag="h3">{episode.name}</CardHeader>
        {/* <CardImg src={character.image} alt={character.name} />  */}
        <CardBody>
          <CardText tag='h4'>{episode.episode}</CardText>
          {/* <CardText>{episode.url}</CardText> */}
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Read More</Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  Created: {episode.created}
                </CardBody>
              </Card>
            </Collapse>
        </CardBody>
        <CardFooter tag='h4' className="text-muted">{episode.air_date}</CardFooter>
      </Card>
  );
};