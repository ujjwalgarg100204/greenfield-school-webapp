"use client";

import useNav from "@/src/hooks/useNav";

const Profile = () => {
  const ProfileRef = useNav("Profile");
  return (
    <section ref={ProfileRef} id="profileSection">
      <h1>Profile page is under construction</h1>
    </section>
  );
};

export default Profile;
