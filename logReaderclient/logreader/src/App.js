import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Logger from './components/logger';


// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path='/' element={<Logger/>} />
//       </Routes>
//     </div>
//   );
// }

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Logger /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
