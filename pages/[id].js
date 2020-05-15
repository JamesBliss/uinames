import { useRouter } from 'next/router'
import Link from 'next/link'

//
import data from '../data/names.json';

// helpers
const randomItem = arr => arr[(Math.random() * arr.length) | 0];

const Selection = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return null;

  // mapping
  const foundRegions = data.filter(v => v.region.toLowerCase() === id.toLowerCase())[0]
  const results = Array.apply(null, Array(11));

  //
  return (
    <>
      <h1>Selection: {id}</h1>
      {results.map((item, index) => {
        console.log('ht')
        const firstName = randomItem(foundRegions.firstNames);
        const surname = randomItem(foundRegions.surnames);
        return <p key={index}>{firstName} {surname}</p>
      })}

      <br />
      <br />
      <br />
      <br />
      <button onClick={ () => window.location.href = `/${id}`}>Another!</button>
    </>
  )
}

export default Selection;