import React from 'react';
import { sites } from '../../utils/constants';

function SiteList() {

  return (
    <section className="sites">

      {sites.map((i) => {
        return (
          <a href={i.src} target="_blank" className="sites__link" key={i.link}>
            <img src={i.link} alt={i.name} className="sites__img" />
            <div className="sites__overlay"></div>
          </a>
        )
      })}

    </section>
  );
}

export default SiteList;
