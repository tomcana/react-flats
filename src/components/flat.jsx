import React from 'react';

const Flat = (flat) => {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)),url('${flat.imageUrl}')`
  }
  return (
    <div className="card" style={bgStyle}>
      <p>{flat.priceCurrency}{flat.price}</p>
      <h4>{flat.name}</h4>
    </div>
  );
}

export default Flat;
