const body = document.querySelector("body")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    console.log(btn)
    addEventListener("click", (e) => {
        //    console.log(e) 
        //    console.log(e.target)
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "black") {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
    })
});

