import React from 'react';

const Cartoon = ({ cartoon }) => {

  if (!cartoon) {
    return <p>Cartoon not found</p>;
  }

  return (
    <div className="cartoon">
      <img src={cartoon.poster} alt={cartoon.alt} />
      <h3>{cartoon.title}</h3>
      <h3>{cartoon.season}</h3>
      <p>{cartoon.description}</p>
    </div>
  );
};

export default Cartoon;
