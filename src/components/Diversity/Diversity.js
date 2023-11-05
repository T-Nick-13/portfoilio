import React from 'react';
const importAll = (r) => {
  const images = {};
  r.keys().forEach((key) => {
    const numericPart = key.match(/(\d+)/)[0];
    images[numericPart] = r(key);
  });
  return images;
};

const images = Object.values(importAll(require.context('../../images/light/diversity', false, /\.(webp)$/)));

function Diversity() {
  return (
    <div className='diversity'>
      {images.map((i) => (
        <img src={i.default} key={i.default} alt='diversity'></img>
      ))}
    </div>
  )
}

export default Diversity;
