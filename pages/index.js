import React from 'react'
import Link from 'next/link';

//
import data from '../data/names.json';

// helpers
const randomItem = arr => arr[(Math.random() * arr.length) | 0];
const fetcher = url => fetch(url).then(res => res.json())

export default () => {
  // mapping
  const regions = data.map(v => v.region);
  const randomRegion = randomItem(regions).toLowerCase();
  const foundRegions = data.filter(v => v.region.toLowerCase() === randomRegion.toLowerCase())[0]
  const results = Array.apply(null, Array(11));

  return (
    <>
      <h1>
        <Link href={randomRegion}>
          <a>{randomRegion}</a>
        </Link>
      </h1>
      {results.map((item, index) => {
        const firstName = randomItem(foundRegions.firstNames);
        const surname = randomItem(foundRegions.surnames);
        return <p key={index}>{firstName} {surname}</p>
      })}
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => window.location.href = '/'}>Another!</button>
    </>
  )
};
