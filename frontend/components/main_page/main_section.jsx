import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import NotebookIndexContainer from "./notebook/notebook_index_container";
import NoteIndexContainer from "./notes/note_index_container";

const MainSection = () => {
  // const notesSidebar =  <Route path="/app/notebooks/:notebookId" /> : null
  return (
    <div className="main-section-frame">
      <Switch>
        <Route exact path="/app/notebooks" component={NotebookIndexContainer} />
        {/* <Route
          exact
          path="/app/notebooks/:notebookId/notes/:noteId"
          component={NoteShowContainer}
        /> */}
        {/* <Route
          path="/app/notebooks/:notebookId"
          component={NotebookShowContainer}
        /> */}

        <Route exact path="/app/notes" component={NoteIndexContainer} />
      </Switch>
    </div>
  );
};

export default MainSection;
