/** @format */

import React from "react";
import "./sidebar.css";

import HomeIcon from "../svg/HomeIcon";
import SearchIcon from "../svg/SearchIcon";
import MessageIcon from "../svg/MessageIcon";
import StageIcon from "../svg/StageIcon";
import NotificationIcon from "../svg/NotificationIcon";
import CreateIcon from "../svg/CreateIcon";
import BackIcon from "../svg/BackIcon";
import SettingsIcon from "../svg/SettingsIcon";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile-top">
                <BackIcon size={28} strokeWidth={2} />
                <span>Profile</span>
            </div>
            <div className="sidebarItem">
                <HomeIcon size={32} strokeWidth={1.5} />
                <span>Home</span>
            </div>
            <div className="sidebarItem">
                <SearchIcon size={32} strokeWidth={1.5} />
                <span>Search</span>
            </div>
            <div className="sidebarItem">
                <MessageIcon size={32} strokeWidth={1.5} />
                <span>Messages</span>
            </div>
            <div className="sidebarItem">
                <StageIcon size={32} strokeWidth={1.5} />
                <span>Stage</span>
            </div>
            <div className="sidebarItem">
                <CreateIcon size={32} strokeWidth={1.5} />
                <span>Create</span>
            </div>
            <div className="sidebarItem">
                <NotificationIcon size={32} strokeWidth={1.5} />
                <span>Notifications</span>
            </div>
            <div className="settings-bottom">
                <SettingsIcon size={42} strokeWidth={1.5} />
                <span>Settings</span>
            </div>
        </div>
    );
}

export default Sidebar;
