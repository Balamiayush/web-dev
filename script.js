//?timer 
let timer = 60;
let score = 0;
let hitrn = 0;



function scorefun() {
    score += 10;
    document.getElementById("scoreval").textContent = score;
}
function hitfun() {
    hitrn = Math.floor(Math.random() * 10);
    document.getElementById("hitval").textContent = hitrn;
}
function makebubble() {
    var clutter = ""
    for (let i = 1; i <= 102; i++) {
        let random = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter
}
function runtimer() {
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint)
            document.querySelector("#timerval").innerHTML = "";
        }

    }, 1000)
}

//?addeventlistner 
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    let clicknum = (Number(dets.target.textContent));
    if (clicknum === hitrn) {
        scorefun();
        hitfun();
        makebubble();
    }
})

runtimer();
makebubble();
hitfun();
