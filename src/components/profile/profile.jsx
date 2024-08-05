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
                <div className="post-section">
                    <div className="post-header">
                        <span>My Audios</span>
                        <span>View All</span>
                    </div>
                    <div className="post-feed">
                        <div className="feed-row">
                            <img
                                src="/src/assets/postImg1.jpg"
                                alt=""
                                srcset=""
                                height={148}
                                width={142}
                            />
                            <img
                                src="/src/assets/postImg2.jpg"
                                alt=""
                                srcset=""
                                height={148}
                                width={142}
                            />
                            <div className="image-wrapper overlay-wrapper">
                                <img
                                    src="/src/assets/postImg5.jpg"
                                    alt=""
                                    srcset=""
                                    height={148}
                                    width={142}
                                />
                                <div className="overlay">
                                    <div className="overlay-text">255+</div>
                                </div>
                            </div>
                        </div>
                        <div className="feed-row">
                            <img
                                src="/src/assets/postImg4.jpg"
                                alt=""
                                srcset=""
                                height={148}
                                width={142}
                            />
                            <img
                                src="/src/assets/postImg3.jpg"
                                alt=""
                                srcset=""
                                height={148}
                                width={142}
                            />
                            <div className="image-wrapper overlay-wrapper">
                                <img
                                    src="/src/assets/postImg6.jpg"
                                    alt=""
                                    srcset=""
                                    height={148}
                                    width={142}
                                />
                                <div className="overlay">
                                    <div className="overlay-text">255+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
