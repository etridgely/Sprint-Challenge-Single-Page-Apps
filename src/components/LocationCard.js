import React from "react";
import { Card} from 'semantic-ui-react'

const LocationCard = props => {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.type} {props.dimension}</Card.Meta>
      <Card.Description>{props.residents}</Card.Description>
    </Card.Content>
    </Card>
  );
}

export default LocationCard;
