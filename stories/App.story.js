import React from 'react';
import {storiesOf} from '@kadira/storybook';

import {Board, Lane, Card} from '../components';

const data = require('./data.json');

storiesOf('react-kanban', module)

  .add('Initial Load', () => (
    <Board>
      {data.lanes.map((lane) => {
        return <Lane key={lane.key}
                     title={lane.description}
                     rightHeader={`${lane.overdueCount}/${lane.totalCount}`}>
          {
            lane.cards && lane.cards.map((card) => {
              return <Card  title={card.title}
                            description={card.description}
                            rightHeader={card.sla}/>
            })
          }
        </Lane>
      })}
    </Board>
  ));