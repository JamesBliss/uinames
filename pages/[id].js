//
import data from '../data/names.json';

// helpers
import { GenerateLists } from './index'

const Selection = ({id}) => {
  const [list, setList] = React.useState(GenerateLists(id));

  //
  return (
    <>
      <h1>Selection: {id}</h1>
      {list}
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setList(GenerateLists(id))}>Another!</button>
    </>
  )
}

Selection.getInitialProps = ({ query }) => {
  return query;
};

export default Selection;