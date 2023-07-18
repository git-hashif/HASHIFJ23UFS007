window.onload = initAll;

function initAll() {
var ans = prompt("Are you sure you want to do that.?")
if(ans){
    alert("You Said " + ans);
    document.write("You Said " +ans)
}
}