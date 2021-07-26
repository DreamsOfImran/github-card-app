import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie'

import Form from "./Form";
import CardList from "./CardList";

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const GithubApp = ({ title }) => {
  const [profiles, setProfiles] = useState([]);
  const [profileCookies, setProfileCookies] = useCookies(['profiles'])

  useEffect(() => {
    if(!!profileCookies.profiles) {
      setProfiles(profileCookies.profiles)
    }
  }, [])


  const addNewProfile = (profileData) => {
    console.log()
    setProfiles([...profiles, profileData]);

    setProfileCookies('profiles', [...profiles, profileData], { path: '/' })
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
