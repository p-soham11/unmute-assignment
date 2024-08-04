/** @format */

import React from "react";
import "./profile.css";

import MessageIcon from "../svg/MessageIcon";
import VideoCallIcon from "../svg/VideoCallIcon";
import VoiceCallIcon from "../svg/VoiceCallIcon";
import QrIcon from "../svg/QrIcon";

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
                <div className="id-stats">
                    <span> john.ab96 &nbsp;</span> • <span>&nbsp; 45,679 </span>
                </div>
                <div className="profile-voice">
                    <img
                        src="/src/assets/voice-note.png"
                        alt="VoiceNoteImg"
                        height={72}
                        width={354}
                    />
                </div>
                <div className="banner">
                    <div className="banner-icon">
                        <QrIcon size={26} strokeWidth={1.2} />
                    </div>
                    <div className="banner-content">
                        <div className="banner-text">
                            Find friends on Snapchat
                        </div>
                        <div className="banner-text">
                            Tap to sync your contact
                        </div>
                    </div>
                </div>
                <div>Profile Posts</div>
            </div>
        </div>
    );
}

export default Profile;
