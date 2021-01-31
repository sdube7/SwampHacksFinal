import Search from './components/search'
import Cards from './components/moreCards';
import {useState} from 'react';

function App() {
  const [data, setData] = useState([]);
  const [track, setTrack] = useState([]);
  const [visible, setVisible] = useState(false);
  const [similar, setSimilar] = useState([]);
  return (
    <div className="mainApp">
        <Search setData={setData} setVisible={setVisible} setTrack={setTrack} setSimilar={setSimilar}/>
      <div>
        {visible ? <Cards data={data} track={track} similar={similar}/> : null}
      </div>
    </div>
  );
}

export default App;
