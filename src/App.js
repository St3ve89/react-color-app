import React from 'react';
import Palette from './components/palette/Palette';
import seedColors from './helper/seedColors';
import { generatePalette } from './helper/colorHelpers';

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    <div>
     <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
