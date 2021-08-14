var squares = document.querySelectorAll(".squares");
for(var i =0 ; i < squares.length; i++){
    squares[i].addEventListener("mouseout",function(){
        this.style.background = "transparent";
    })
}


// PAD 1
var pad1 = document.querySelector(".pad1");
    $(".pad1").mousedown(function () {
        $(this).css("background","black");
    });
    $(".pad1").mouseup(function () {
        $(this).css("background","transparent");
    });

    // PAD 2
var pad2 = document.querySelector(".pad2");
    $(".pad2").mousedown(function () {
        $(this).css("background","black");
    });
    $(".pad2").mouseup(function () {
        $(this).css("background","transparent");
    });

    // PAD 3
var pad3 = document.querySelector(".pad3");
$(".pad3").mousedown(function () {
    $(this).css("background", "black");
});
$(".pad3").mouseup(function () {
    $(this).css("background", "transparent");
});    



