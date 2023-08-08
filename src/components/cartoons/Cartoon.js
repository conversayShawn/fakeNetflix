import React from 'react';

const Cartoon = ({ cartoon }) => {

  if (!cartoon) {
    return <p>Cartoon not found</p>;
  }

  return (
    <div className="cartoon">
      <img src={cartoon.poster} alt={cartoon.alt} />
      <h3>{cartoon.title}</h3>
      <h2>{cartoon.season}</h2>
      <p>{cartoon.description}</p>
    </div>
  );
};

export default Cartoon;
