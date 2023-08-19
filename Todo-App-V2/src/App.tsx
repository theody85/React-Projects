import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import { BaseLayout, LandingPage } from "./components";

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage message="Welcome Theodora!" />}
          />
          <Route path="/:name" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
