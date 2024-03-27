import React from "react";

/** Redux is mostly used with React, but can be used with Angular, Vue etc.
 * Redux is a container (huge array) where you can store your whole application data.
 * So we also call it state management.
 * It doesn't belong to the component state.
 * Only one store per application.
 * Data is unideirectional. Check diagram: 002. Vid 74 - Redux Architecture.png
 * 2 components use props to communicate mutually
 * Redux also use props to communicate
 */
function MyApp() {
  return (
    <div>
      <h2>App Component!</h2>
    </div>
  );
}

export default MyApp;
