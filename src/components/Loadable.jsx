import { Suspense } from "react";
import GlobalLoader from "./GlobalLoader";
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<GlobalLoader/>}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
