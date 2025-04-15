import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './officer/components/Header'; // Correct path
import Footer from './officer/components/Footer'; // Correct path
import OfficerHomePage from './officer/pages/OfficerHomePage';

function App() {
  return (
    <Router>
      <div>
        {/* Include Header */}
        <Header />
        <Routes>
          <Route path="/" element={<OfficerHomePage />} />
          <Route path="/officer" element={<OfficerHomePage />} />
          {/* other routes here */}
        </Routes>
        {/* Include Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
