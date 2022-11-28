let hr = document.getElementById("hr");
let sc = document.getElementById("sc");
let mn = document.getElementById("mn");

setInterval(() =>{
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;
console.log(day);
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;

    let hour = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
});
