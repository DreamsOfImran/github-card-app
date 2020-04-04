import React, { useState } from "react";
import axios from "axios";
import "./App.scss";

const App = () => {
  // GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

  const CardList = (props) => (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.id} profile={profile} />
      ))}
    </div>
  );

  const Card = ({ profile }) => (
    <div className="github-profile">
      <img src={profile.avatar_url} alt={profile.name} />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );

  const Form = (props) => {
    const [userName, setUserName] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const resp = await axios.get(`https://api.github.com/users/${userName}`);
      props.onSubmit(resp.data);
      setUserName("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  };

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
