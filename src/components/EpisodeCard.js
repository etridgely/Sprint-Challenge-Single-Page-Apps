import React from "react";
import { Card} from 'semantic-ui-react'

const EpisodeCard = props => {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.air_date}</Card.Meta>
      <Card.Description>{props.episode}</Card.Description>
    </Card.Content>
    </Card>
  );
}

export default EpisodeCard;