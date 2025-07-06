/**
 * @name Hotel Room Booking System
 * @author Lalithkishore
 * @description Hotel Room Booking and Management System Software ~ :)

 */

import { notification } from 'antd';

const notificationWithIcon = (type, title, msg) => {
  notification[type]({
    message: title,
    description: msg
  });
};

export default notificationWithIcon;
