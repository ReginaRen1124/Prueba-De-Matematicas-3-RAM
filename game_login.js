function addUser(){
j1 = document.getElementById("j1").value;
j2 = document.getElementById("j2").value;

localStorage.setItem("j1", j1);
localStorage.setItem("j2", j2);

window.location = "quiz_game_page.html";
}
