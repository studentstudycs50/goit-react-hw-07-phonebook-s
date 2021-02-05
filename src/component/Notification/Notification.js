import React from "react";
import NotificationStyled from "../Notification/NotificationStyled";

const Notification = ({ notification }) => {
  return (
    <NotificationStyled>
      <p className="notification-title">{notification}</p>
    </NotificationStyled>
  );
};

export default Notification;