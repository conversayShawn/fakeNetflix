import React, { useEffect, useState } from 'react';

const Cartoon = ({ cartoonId }) => {
  const [cartoon, setCartoon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cartoon data based on the cartoonId prop
    // Replace '/data/cartoons.json' with the actual API endpoint to fetch the cartoon data
    fetch(`/data/cartoons.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedCartoon = data.find((cartoon) => cartoon.id === cartoonId);
        setCartoon(selectedCartoon);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cartoon data:', error);
        setLoading(false);
      });
  }, [cartoonId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!cartoon) {
    return <p>Cartoon not found</p>;
  }

  return (
    <div className="cartoon">
      <img src={cartoon.poster} alt={cartoon.title} />
      <h3>{cartoon.title}</h3>
      <h3>{cartoon.season}</h3>
      <p>{cartoon.description}</p>
    </div>
  );
};

export default Cartoon;
