import React from "react";
import ReactQuill from "react-quill";

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
}

export default Editor;

// class Editor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { editorHtml: "", theme: "snow" };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(html) {
//     this.setState({ editorHtml: html });
//   }

//   handleThemeChange(newTheme) {
//     if (newTheme === "core") newTheme = null;
//     this.setState({ theme: newTheme });
//   }

//   render() {
//     return React.createElement(
//       "div",
//       null,
//       React.createElement(ReactQuill, {
//         theme: this.state.theme,
//         onChange: this.handleChange,
//         value: this.state.editorHtml,
//         modules: Editor.modules,
//         formats: Editor.formats,
//         bounds: ".app",
//         placeholder: this.props.placeholder
//       }),

//       React.createElement(
//         "div",
//         { className: "themeSwitcher" },
//         React.createElement("label", null, "Theme "),
//         React.createElement(
//           "select",
//           { onChange: e => this.handleThemeChange(e.target.value) },
//           React.createElement("option", { value: "snow" }, "Snow"),
//           React.createElement("option", { value: "bubble" }, "Bubble"),
//           React.createElement("option", { value: "core" }, "Core")
//         )
//       )
//     );
//   }
// }

// /*
//  * Quill modules to attach to editor
//  * See https://quilljs.com/docs/modules/ for complete options
//  */
// Editor.modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" }
//     ],
//     ["link", "image", "video"],
//     ["clean"]
//   ],

//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false
//   }

//   /*
//    * Quill editor formats
//    * See https://quilljs.com/docs/formats/
//    */
// };
// Editor.formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "video"
// ];

// /*
//  * PropType validation
//  */
// Editor.propTypes = {
//   placeholder: PropTypes.string

//   /*
//    * Render component on page
//    */
// };
// ReactDOM.render(
//   React.createElement(Editor, { placeholder: "Write something..." }),
//   document.querySelector(".app")
// );
