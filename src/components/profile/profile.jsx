/** @format */

import React from "react";
import "./profile.css";

function Profile() {
    return (
        <div className="profile-content">
            <div className="profile-header">
                <div className="profile-overlay"></div>
                <div className="profile-info">
                    <div className="profile-picture"></div>
                    <div className="profile-item profile-name">
                        John Abraham
                    </div>
                    <div className="profile-item user-name">@johnAbraham</div>
                    <div className="profile-item stats">
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
