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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoSlider />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
