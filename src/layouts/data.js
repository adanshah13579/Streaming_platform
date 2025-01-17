const listItemss = [
    { text: "Live Dares", icon: <LiveTvIcon />, onPress: () => navigate("/") },
    { text: "Popular Dares", icon: <StarIcon /> },
    {
      text: "Following",
      icon: <PeopleIcon />,
      onPress: () => navigate("/following"),
    },
    { text: "Start Streaming", icon: <CastIcon /> },
    { text: "Save Clips", icon: <SaveIcon /> },
    { name: "John Doe", avatar: "/path-to-avatar-1.jpg", icon: <WifiIcon /> },
    {
      name: "Jane Smith",
      avatar: "/path-to-avatar-2.jpg",
      icon: <FiberManualRecordIcon />,
    },
    // more items
  ];