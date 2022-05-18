import style from "./style.css";
import homeSvg from "./img/home-outline.svg";
import exploreSvg from "./img/map-marker-circle.svg";
import notificationsSvg from "./img/bell-outline.svg";
import messagesSvg from "./img/message-outline.svg";
import bookmarksSvg from "./img/bookmark-outline.svg";

const home = document.getElementById("home");
const explore = document.getElementById("explore");
const notifications = document.getElementById("notifications");
const messages = document.getElementById("messages");
const bookmarks = document.getElementById("bookmarks");

const homeIcon = document.createElement("button");
homeIcon.setAttribute("class", "menuBtn");
homeIcon.innerHTML = homeSvg;

const exploreIcon = document.createElement("button");
exploreIcon.setAttribute("class", "menuBtn");
exploreIcon.innerHTML = exploreSvg;

const notificationsIcon = document.createElement("button");
notificationsIcon.setAttribute("class", "menuBtn");
notificationsIcon.innerHTML = notificationsSvg;

const messagesIcon = document.createElement("button");
messagesIcon.setAttribute("class", "menuBtn");
messagesIcon.innerHTML = messagesSvg;

const bookmarksIcon = document.createElement("button");
bookmarksIcon.setAttribute("class", "menuBtn");
bookmarksIcon.innerHTML = bookmarksSvg;

//appends
home.appendChild(homeIcon);
explore.appendChild(exploreIcon);
notifications.appendChild(notificationsIcon);
messages.appendChild(messagesIcon);
bookmarks.appendChild(bookmarksIcon);
