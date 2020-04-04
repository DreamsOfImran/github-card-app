import React, { useState } from "react";
import "./App.scss";

import CardList from "./components/CardList";
import Form from "./components/Form";

const App = () => {
  // GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

  const App = ({ title }) => {
    const [profiles, setProfiles] = useState([]);

    const addNewProfile = (profileData) => {
      setProfiles([...profiles, profileData]);
    };
    return (
      <div>
        <div className="header">{title}</div>
        <Form onSubmit={addNewProfile} />
        <CardList profiles={profiles} />
      </div>
    );
  };

  return <App title="GitHub Card App" />;
};

export default App;
