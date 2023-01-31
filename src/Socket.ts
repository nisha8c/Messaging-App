import io from "socket.io-client";

export const socket = io("http://localhost:5000/");

socket.on("connect", () => {
  console.log("socket connected");
});