import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import NotebookIndexContainer from "./notebook/notebook_index_container";
import NotebookShowContainer from "./notebook/notebook_show_container";
import NoteIndexContainer from "./notes/note_index_container";
import NoteShowContainer from "./notes/note_show_container";
import TagIndexContainer from "./tags/tag_index_container";

const MainSection = () => {
  return (
    //className="main-section-frame">
    <>
      <Route exact path="/app/notebooks" component={NotebookIndexContainer} />
      <Route
        path="/app/notebooks/:notebookId"
        component={NotebookShowContainer}
      />
      <Route
        path="/app/notebooks/:notebookId/notes/:noteId"
        component={NoteShowContainer}
      />

      <Route path="/app/notes" component={NoteIndexContainer} />
      <Route path="/app/notes/:noteId" component={NoteShowContainer} />
      {/* tags is similar  */}
      <Route exact path="/app/tags" component={TagIndexContainer} />
    </>
  );
};

export default MainSection;
