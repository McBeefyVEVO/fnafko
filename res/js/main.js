const start = document.getElementById("start");
const main_title = document.getElementById("main_title");
const forsen = document.getElementById("forsen");

const open_cam = document.getElementById("open_cam");
const close_cam = document.getElementById("close_cam");

const look_left = document.getElementById("look_left");
const look_right = document.getElementById("look_right");
const look_left_back = document.getElementById("look_left_back");
const look_right_back = document.getElementById("look_right_back");

let camera_on = 0;
let leftopen = 1;
let rightopen = 1;

let lighton_left = 0;
let lighton_right = 0;

//------------------------------------------------------------------------------------------
//Startík

start.onclick = () => {
    document.body.style.background = "url(./res/img/office.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    start.style.display = "none";
    main_title.style.display = "none";
    forsen.style.display = "none";
    open_cam.style.display = "block";
    look_left.style.display = "block";
    look_right.style.display = "block";
}

//------------------------------------------------------------------------------------------
//Kamerky

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


//------------------------------------------------------------------------------------------
//Koukání doleva/doprava + dveře a světla


look_left.onclick = () => {
    document.body.style.background = "url(./res/img/left_open.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    if(leftopen == 0){
    document.body.style.background = "url(./res/img/left_closed.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    }

    open_cam.style.display = "none";
    look_left.style.display = "none";
    look_right.style.display = "none";
    look_left_back.style.display = "block";
}

look_right.onclick = () => {
    document.body.style.background = "url(./res/img/right_open.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    if(rightopen == 0){
    document.body.style.background = "url(./res/img/right_closed.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    }


    open_cam.style.display = "none";
    look_left.style.display = "none";
    look_right.style.display = "none";
    look_right_back.style.display = "block";
}

look_left_back.onclick = () => {
    document.body.style.background = "url(./res/img/office.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    open_cam.style.display = "block";
    look_left.style.display = "block";
    look_right.style.display = "block";
    look_left_back.style.display = "none";
}

look_right_back.onclick = () => {
    document.body.style.background = "url(./res/img/office.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    open_cam.style.display = "block";
    look_left.style.display = "block";
    look_right.style.display = "block";
    look_right_back.style.display = "none";
}