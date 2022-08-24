import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playedTime = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(playedTime, data.seconds);
  console.log(data.seconds)
};
const currentTime = localStorage.getItem(playedTime);

player.on('timeupdate', throttle(onPlay, 1000));

if (currentTime) {
  player.setCurrentTime(currentTime);
}












// How does localStorage work?
// To use localStorage in your web applications, there are five methods to choose from:

// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// setItem(): How to store values in localStorage
// Just as the name implies, this method allows you to store values in the localStorage object.

// It takes two parameters: a key and a value. The key can be referenced later to fetch the value attached to it.
