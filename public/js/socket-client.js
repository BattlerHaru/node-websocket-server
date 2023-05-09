// Referencias HTML
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const socket = io();

socket.on("connect", () => {
  console.log("Conectado");
  lblOnline.style.display = "";
  lblOffline.style.display = "none";
});

socket.on("disconnect", () => {
  console.log("Desconectado");
  lblOnline.style.display = "none";
  lblOffline.style.display = "";
});
