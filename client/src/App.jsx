import { useState } from 'react'
import Form from './Form';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './Overview';
function App() {
  const [value, setValue] = useState(1);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome value={value} setValue={setValue} />} />
        <Route path="/form" element={<Form value={value} setValue={setValue} />} />
        <Route path="/search" element={<Overview value={value} setValue={setValue} />} />
      </Routes>
    </Router>
  );
}

export default App;
