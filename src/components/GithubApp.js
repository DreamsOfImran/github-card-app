import React, { useState } from "react";

import Form from "./Form";
import CardList from "./CardList";

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const GithubApp = ({ title }) => {
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

export default GithubApp;
