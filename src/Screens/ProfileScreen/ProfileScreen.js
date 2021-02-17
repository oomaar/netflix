import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '../../Components';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../lib/firebase';
import "./styles/ProfileScreen.css";

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    return (
        <div className="profile">
            <Navbar />
            <div className="profile__container">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img src="/images/users/4.png" alt="User Avatar" />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profile__plans">
                            <h3>Plans</h3>
                            <button
                                className="profile__signoutButton"
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileScreen;
