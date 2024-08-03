/** @format */

import React from "react";
import "./profile.css";

function Profile() {
    return (
        <div className="profile-content">
            <div className="profile-header">
                <div className="profile-overlay"></div>
                <div className="profile-info">
                    <div className="profile-item">John Abraham</div>
                    <div className="profile-item">@johnAbraham</div>
                    <div className="profile-item">
                        124341 Followers | 1.2K Following
                    </div>
                </div>
            </div>
            <div className="action-bar">Icons</div>
            <div>Voice Highlight</div>
            <div>Pop-up Action</div>
            <div>Profile Posts</div>
        </div>
    );
}

export default Profile;
