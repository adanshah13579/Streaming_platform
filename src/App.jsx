import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Correct import
import HomePage from "./pages/Homepage/homepage";
import ModernCard from "./component/Maincard/maincard";
import LiveDares from "./component/LiveDares/Livedares";
import Stories from "./component/Stories/Stories";
import RectangleCard from "./component/Rectanglecard/reactanglecard";
import SquareCard from "./component/Squrecard/sqaurecard";
import PopularCategories from "./component/Popularcategories/popularcategories";
import RecommendedVideos from "./component/Recommendedvideos/recommendedvideos";
import VideoSlider from "./component/VideoSlider/videoslider";
import FollowingPage from "./pages/FollowingPage/followingpage";
import StartStreaming from "./pages/StartStreamingPage/startstreaming";
import MyVideosPage from "./pages/MyVideosPage/myvideospage";
import Login from "./pages/Authentication/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route>
        <Route path="/following" element={<FollowingPage />}></Route> */}
        {/* <Route path="/" element={<FollowingPage />}></Route> */}
        <Route path="/" element={<Login />}></Route>

      </Routes>
    </Router>
  );
};

export default App;
