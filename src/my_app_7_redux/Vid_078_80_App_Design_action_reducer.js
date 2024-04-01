import React from "react";
import HomeContainer from "./containers/Vid_078_HomeContainer";

/**
 * Vid 78: Design
 * Vid 79: Action
 * Vid 80: Reducer & rootReducer
 * Vid 81: Container - mapDispatchToProps -  mapStateToProps
 *  - Container:
 *    - connects redux with react
 *    - import react-redux, action & component
 *    - use mapDispatchToProps
 *    - use mapStateToProps *
 * Vid 82: Complete ReduxFlow
 *  - Make Redux wrapper in index file
 *  - What is provider
 *  - make Store
 *  - Check data flow in console
 *  - Call action on button click
 */

/* video 78: Design */
function MyApp() {
  return (
    <div>
      <h1>App Component!</h1>
      <HomeContainer />
    </div>
  );
}

export default MyApp;
