import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { v4 as uuidv4 } from "uuid";
import Protected from "./components/route/Protected";
import useStore from "./hooks/useStore";

function App() {
  const { user } = useStore();
  const { isAuth } = user;
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
              auth={isAuth}
            />
          }
        />
      ))}
    </Routes>
  );
}

export default App;
