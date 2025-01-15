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
import SignupPage from "./pages/Authentication/Signup";
import PublicDarePage from "./pages/PublicDarePage/publicdareindex";
import ChannelProfilepage from "./pages/LiveVideoPage/Livevideopage";
import LiveVideoPage from "./pages/LiveVideoPage/Livevideopage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/following" element={<FollowingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/h" element={<PublicDarePage />}></Route>
        <Route path="/" element={<LiveVideoPage/>}></Route>


      </Routes>
    </Router>
  );
};

export default App;
