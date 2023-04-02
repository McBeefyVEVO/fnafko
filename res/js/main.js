const start = document.getElementById("start");
const main_title = document.getElementById("main_title");
const forsen = document.getElementById("forsen");

const open_cam = document.getElementById("open_cam");
const close_cam = document.getElementById("close_cam");

const look_left = document.getElementById("look_left");
const look_right = document.getElementById("look_right");

let camera_on = 0;

start.onclick = () => {
    document.body.style.background = "white";

    start.style.display = "none";
    main_title.style.display = "none";
    forsen.style.display = "none";
    open_cam.style.display = "block";
    look_left.style.display = "block";
    look_right.style.display = "block";

    body.style.background = "white"
    
    
}

open_cam.onclick = () => {
    camera_on++;
    open_cam.style.display = "none";
    close_cam.style.display = "block";
    console.log(camera_on);
    look_left.style.display = "none";
    look_right.style.display = "none";
}

close_cam.onclick = () => {
    camera_on--;
    open_cam.style.display = "block";
    close_cam.style.display = "none";
    console.log(camera_on);
    look_left.style.display = "block";
    look_right.style.display = "block";
}




