"use client";

import useNav from "@/src/app/_hooks/useNav";

const Profile = () => {
    const ProfileRef = useNav("Profile");
    return (
        <section ref={ProfileRef} id="profileSection">
            <h1>Profile page is under construction</h1>
        </section>
    );
};

export default Profile;
