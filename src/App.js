import store from "store/index";
import { Provider as ReduxProvider } from "react-redux";
import routes from "routes/routes";
import { useRoutes } from "react-router-dom";


function App() {
    // routes configuration
    const content = useRoutes(routes);
  return (
   
    <ReduxProvider store={store}>
     {content}
    </ReduxProvider>
  );
}

export default App;
