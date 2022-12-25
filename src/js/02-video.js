// localStorage.setItem("settings", JSON.stringify(settings));

import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector('#vimeo-player');
const myPlayer = new Player(iframe);
myPlayer.on('timeupdate',throttle(onTime,1000))
if (localStorage.getItem("videoplayer-current-time")) {
    myPlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}
function onTime({seconds}){
localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
   }

