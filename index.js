let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date(); 
    date = a.toLocaleDateString(undefined, options);
    time = a.toLocaleTimeString('en-US')
    document.getElementById('time').innerHTML = time + "<br>" + date +" (IST)";
}, 1000);