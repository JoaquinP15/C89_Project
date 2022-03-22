function Login()
{
    player1 = document.getElementById("Player1_Name").value;
    player2 = document.getElementById("Player2_Name").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location.replace("quiz_game_index.html");
}