import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/home";
import Profile1 from "./Components/Profiles/profile1";
import Profile2 from "./Components/Profiles/profile2";
import Profile3 from "./Components/Profiles/profile3";
import CalendarPage from "./Components/Scheduler/Calender";

function App() {
  return (
    <div className="App">
      <h3>App Page</h3>
      <BrowserRouter>
      <Routes>
        <Route path="/"         >
          <Route index element={<Home />} />
          <Route path="profile1" element={<Profile1 />} />
          <Route path="profile2" element={<Profile2 />} />
          <Route path="profile3" element={<Profile3 />} />

          <Route path="calenderPage" element={<CalendarPage />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
