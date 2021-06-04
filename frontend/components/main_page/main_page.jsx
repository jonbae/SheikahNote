import React from "react";

import NoteShowContainer from "./notes/note_show_container";
import SidebarContainer from "./sidebar/sidebar_container";
import MainSection from "./main_section";

const MainPage = props => {
  // fullscreen mode
  if (props.fullScreen === true) {
    return (
      <main className="main-page-frame">
        <NoteShowContainer />
      </main>
    );
  } else {
    // normal mode
    return (
      <main className="main-page-frame">
        <SidebarContainer />
        <MainSection />
      </main>
    );
  }
};

export default MainPage;
