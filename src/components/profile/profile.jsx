/** @format */

import React from "react";
import "./profile.css";

import MessageIcon from "../svg/MessageIcon";
import VideoCallIcon from "../svg/VideoCallIcon";
import VoiceCallIcon from "../svg/VoiceCallIcon";

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
            <div className="profile-body-container">
                <div className="action-bar">
                    <div className="icon">
                        <div className="circle"></div>
                        <MessageIcon size={24} strokeWidth={1.25} />
                    </div>
                    <div className="icon">
                        <div className="circle"></div>
                        <VideoCallIcon size={24} strokeWidth={1.25} />
                    </div>
                    <div className="icon">
                        <div className="circle"></div>
                        <VoiceCallIcon size={24} strokeWidth={1.25} />
                    </div>
                </div>
                <div>Voice Highlight</div>
                <div>Pop-up Action</div>
                <div>Profile Posts</div>
            </div>
        </div>
    );
}

export default Profile;
