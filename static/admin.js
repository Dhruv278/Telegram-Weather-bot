console.log("calling")
window.onload = function() {
    if(localStorage.getItem("Admin")!=='LoggedIn'){
        window.location.href = "https://telegram-weather-bot-git-main-dhruv278.vercel.app/";
    }
}