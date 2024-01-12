import cars from "./Practice";

// destructing array and object and giving them names that need to match with body  
const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

function App() {
  return (
    <div className="App">
        <table>
        <tbody>
          <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
          </tr>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
          </tr>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
          </tr>
        </tbody>
        </table>
    </div>
  );
}

export default App;
