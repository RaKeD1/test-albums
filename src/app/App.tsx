import "./styles/index.scss";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "../widgets/Navbar";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="page">
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
