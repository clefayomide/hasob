import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { v4 as uuidv4 } from "uuid";
import Protected from "./components/route/Protected";

function App() {
  const isAuthenticated = true;
  return (
    <Routes>
      {routes.map(({ path, component, layout, protected: isProtected }) => (
        <Route
          path={path}
          key={uuidv4()}
          element={
            <Protected
              component={component}
              layout={layout}
              protected={isProtected}
              auth={isAuthenticated}
            />
          }
        />
      ))}
    </Routes>
  );
}

export default App;
