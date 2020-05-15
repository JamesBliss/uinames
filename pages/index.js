import React from 'react'
import Link from 'next/link';

//
import data from '../data/names.json';

// helpers
const randomItem = arr => arr[(Math.random() * arr.length) | 0];
const regions = data.map(v => v.region);

export const GenerateLists = (region) => {
  const foundRegions = data.filter(v => v.region.toLowerCase() === region.toLowerCase())[0]
  const results = Array.apply(null, Array(11));
  return results.map((item, index) => {
      const firstName = randomItem(foundRegions.firstNames);
      const surname = randomItem(foundRegions.surnames);
      return <p key={index}>{firstName} {surname}</p>
    })
}

export default () => {
  const randomRegion = randomItem(regions).toLowerCase();
  const [list, setList] = React.useState(GenerateLists(randomRegion));

  return (
    <>
      <h1>
        <Link href={randomRegion}>
          <a>{randomRegion}</a>
        </Link>
      </h1>
      { list }
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setList(GenerateLists(randomItem(regions).toLowerCase()))}>Another!</button>
    </>
  )
};
