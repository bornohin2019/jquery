$("#login").click(function(){
var pas1 = $("#pas1").val();
var pas2 = $("#pas2").val();


if(pas1 !== "" && pas2 !== ""){
    if(pas1 == pas2){
        alert("matches");
    }
    else{
        alert("not matches");
    }
}
else{
    alert("plase enter your password");
}

})