/** @format */

import React from "react";
import "./sidebar.css";

import HomeIcon from "../svg/HomeIcon";
import SearchIcon from "../svg/SearchIcon";
import MessageIcon from "../svg/MessageIcon";
import StageIcon from "../svg/StageIcon";
import NotificationIcon from "../svg/NotificationIcon";
import CreateIcon from "../svg/CreateIcon";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <HomeIcon size={24} strokeWidth={1.5} />
                Home
            </div>
            <div className="sidebarItem">
                <SearchIcon size={24} strokeWidth={1.5} />
                Search
            </div>
            <div className="sidebarItem">
                <MessageIcon size={24} strokeWidth={1.5} />
                Messages
            </div>
            <div className="sidebarItem">
                <StageIcon size={24} strokeWidth={1.5} />
                Stage
            </div>
            <div className="sidebarItem">
                <CreateIcon size={24} strokeWidth={1.5} />
                Create
            </div>
            <div className="sidebarItem">
                <NotificationIcon size={24} strokeWidth={1.5} />
                Notification
            </div>
        </div>
    );
}

export default Sidebar;
