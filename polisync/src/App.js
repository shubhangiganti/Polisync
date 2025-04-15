import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Officer imports
import OfficerHeader from './officer/components/Header';
import OfficerFooter from './officer/components/Footer';
import OfficerHomePage from './officer/pages/OfficerHomePage';

// Citizen imports
import CitizenFooter from './citizen/components/Footer';
import CitizenHomePage from './citizen/components/Home';

function App() {
  const env = process.env.REACT_APP_ENV; // Get the environment variable

  return (
    <Router>
      <div>
        {/* Render components based on the environment */}
        {env === 'officer' && <OfficerHeader />}
        <Routes>
          {env === 'officer' ? (
            <>
              <Route path="/" element={<OfficerHomePage />} />
              <Route path="/officer" element={<OfficerHomePage />} />
              {/* Add more officer-specific routes here */}
            </>
          ) : (
            <>
              <Route path="/" element={<CitizenHomePage />} />
              <Route path="/citizen" element={<CitizenHomePage />} />
              {/* Add more citizen-specific routes here */}
            </>
          )}
        </Routes>
        {env === 'officer' ? <OfficerFooter /> : <CitizenFooter />}
      </div>
    </Router>
  );
}

export default App;
