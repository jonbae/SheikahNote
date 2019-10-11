# SheikahNote

[visit live site](https://sheikah-note.herokuapp.com/#/)

SheikahNote is an Evernote clone created with React, Redux, Rails, and PostgreSQL. Users can create notes, save them to notebooks, and organize them with tags.

![splash page]()

# Features

- Secure user authentication
- Save and organize notes to notebooks

[Learn about my design process](https://github.com/jonbae/SheikahNote/wiki)

# Technologies

**Frontend**

- React (front-end library)
  - [Redux (state manager)](https://redux.js.org/)
  - [Quill (rich-text editor)](https://quilljs.com/)
  - [React Router (managing URLs and history)](https://reacttraining.com/react-router/)
- AJAX

**Backend**

- Ruby on Rails
- PostgreSQL (database)

# Feature Highlights

**Main Section**
There is a sidebar that persists throughout the site. I could naively add <Sidebar/> to all of the routes on my page but that would not be DRY. The solution was to nest my routes in a bigger a bigger app route. The app route has a <Sidebar/> and a <MainSection/>. All the components that are not the sidebar belong in the MainSection. This also leads to fullscreen capabilities. Toggling fullscreen mode conditionally renders just the <NoteShowContainer>

**React Router**
These routes were implemented using React Router, a popular library for managing the URL and history of the browser.

```
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
    </>

```

# Future Features

- Rich-text editor
- Tags
