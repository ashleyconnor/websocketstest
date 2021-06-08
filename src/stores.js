import { writable } from "svelte/store";

export const messageStore = writable([]);

const socket = new WebSocket("ws://echo.websocket.org");

// Connection opened
socket.addEventListener("open", function (event) {
  console.log("Connected");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  console.log("Message received");
  messageStore.update((value) => {
    return [event.data, ...value];
  });
});

// Connection closed
socket.addEventListener("close", function (event) {
  console.log("Closed");
});

// Connection error
socket.addEventListener("error", function (event) {
  console.log("Error");
});

export const sendMessage = (message) => {
  if (socket.readyState == 1) {
    socket.send(message);
  }
};
