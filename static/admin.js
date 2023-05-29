console.log("calling")
window.onload = function() {
    if(localStorage.getItem("Admin")!=='LoggedIn'){
        window.location.href = "http://127.0.0.1:3000/";
    }
}