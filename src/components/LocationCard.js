import React, { useState } from "react";
import {
  Card, CardText, CardBody,
  Collapse, CardHeader, CardFooter, Button
} from 'reactstrap';

export default function LocationCard({ location }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return ( 
      <Card className='charCard'>
        <CardHeader tag="h3">{location.name}</CardHeader>
        <CardBody>
          <CardText tag='h4'>{location.dimension}</CardText>
          <CardText>Type: {location.type}</CardText>
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Read More</Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  Created: {location.created}
                </CardBody>
              </Card>
            </Collapse>
        </CardBody>
        <CardFooter tag='h4' className="text-muted"></CardFooter>
      </Card>
  );
};
