import React from 'react';
import Cartoon from './Cartoon'; // Assuming you have a Cartoon component

const CartoonList = ({ cartoons }) => {
  return (
    <div className="cartoon-list">
      {cartoons.map((cartoon) => (
        <Cartoon key={cartoon._id} cartoon={cartoon} /> // Assuming _id is a unique identifier for cartoons
      ))}
    </div>
  );
};

export default CartoonList;
