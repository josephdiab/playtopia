import React from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>This is game details</h2>
    </div>
  );
};

export default GameDetails;