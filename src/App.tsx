import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

/**
 * Main application component with routing setup
 * 
 * @description Root component that sets up React Router with Suspense boundary
 * for code splitting and lazy loading. Handles the main application routing.
 * 
 * @returns {JSX.Element} - Application with routing and loading fallback
 * 
 * @example
 * ```tsx
 * // Usage in main.tsx
 * import App from './App';
 * import { BrowserRouter } from 'react-router-dom';
 * 
 * ReactDOM.createRoot(document.getElementById("root")).render(
 *   <BrowserRouter>
 *     <App />
 *   </BrowserRouter>
 * );
 * ```
 */
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
