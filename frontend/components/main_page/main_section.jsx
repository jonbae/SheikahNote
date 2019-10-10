import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import NotebookIndexContainer from "./notebook/notebook_index_container";
import NoteIndexContainer from "./notes/note_index_container";

const MainSection = () => {
  return (
    <div className="main-section-frame">
      <Route exact path="/app/notebooks" component={NotebookIndexContainer} />

      {/* <Route
        exact
        path="/app/notebooks/:notebookId"
        component={NotebookShowContainer}
      /> */}
      {/* <Route path="/app/notebooks/:notebookId" component={NoteShowContainer} /> */}

      <Route exact path="/app/notes" component={NoteIndexContainer} />
      {/* <Route path="/app/notes" component={NoteShowContainer} /> */}

      {/* tags is similar  */}
    </div>
  );
};

export default MainSection;
