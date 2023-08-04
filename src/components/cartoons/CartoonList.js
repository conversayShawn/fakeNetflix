import React from 'react';
import Cartoon from './Cartoon';

const CartoonList = ({ cartoons }) => {
  if (!cartoons || cartoons.length === 0) {
    return <p>No cartoons available</p>;
  }

  return (
    <div className="cartoon-list">
      {cartoons.map((cartoon) => (
        <Cartoon key={cartoon.id} cartoonId={cartoon.id} />
      ))}
    </div>
  );
};

export default CartoonList;
