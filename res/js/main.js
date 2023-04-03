const start = document.getElementById("start");
const main_title = document.getElementById("main_title");
const forsen = document.getElementById("forsen");

const open_cam = document.getElementById("open_cam");
const close_cam = document.getElementById("close_cam");

const look_left = document.getElementById("look_left");
const look_right = document.getElementById("look_right");
const look_left_back = document.getElementById("look_left_back");
const look_right_back = document.getElementById("look_right_back");

const lightbutton_left = document.getElementById("lightbutton_left");
const lightbutton_right = document.getElementById("lightbutton_right");

const opendoorbutton_left = document.getElementById("opendoorbutton_left");
const opendoorbutton_right = document.getElementById("opendoorbutton_right");

const closedoorbutton_left = document.getElementById("closedoorbutton_left");
const closedoorbutton_right = document.getElementById("closedoorbutton_right");

let camera_on = 0;

let leftopen = true;
let rightopen = true;


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

    open_cam.style.display = "none";
    look_left.style.display = "none";
    look_right.style.display = "none";
    look_left_back.style.display = "block";

    lightbutton_left.style.display = "block";
    closedoorbutton_left.style.display = "block";

    if(leftopen == false){
        document.body.style.background = "url(./res/img/left_closed.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";   
        
        lightbutton_left.style.display = "none";
    }
}

look_right.onclick = () => {
    console.log(rightopen)
    document.body.style.background = "url(./res/img/right_open.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    open_cam.style.display = "none";
    look_left.style.display = "none";
    look_right.style.display = "none";
    look_right_back.style.display = "block";

    lightbutton_right.style.display = "block";
    closedoorbutton_right.style.display = "block";

    if(rightopen == false){
        document.body.style.background = "url(./res/img/right_closed.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";  
        
        lightbutton_right.style.display = "none";
    }
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

    lightbutton_left.style.display = "none";
    closedoorbutton_left.style.display = "none";
    opendoorbutton_left.style.display = "none";
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

    lightbutton_right.style.display = "none";
    closedoorbutton_right.style.display = "none";
    opendoorbutton_right.style.display = "none";
}

//--------------------------------------------------------------------------------------------------------------

lightbutton_left.onmousedown = () => {
            
    document.body.style.background = "url(./res/img/left_open_light.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    };

lightbutton_left.onmouseup = () => {
            
    document.body.style.background = "url(./res/img/left_open.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    
    }
    
lightbutton_right.onmousedown = () => {
            
        document.body.style.background = "url(./res/img/right_open_light.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
    
        };
    
lightbutton_right.onmouseup = () => {
                
        document.body.style.background = "url(./res/img/right_open.png)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        
        }    

//-------------------------------------------------------------------------------------------

    
opendoorbutton_left.onclick = () => {

    leftopen = true;
    console.log(leftopen)

    document.body.style.background = "url(./res/img/left_open.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
        
    opendoorbutton_left.style.display = "none";
    closedoorbutton_left.style.display = "block";

    lightbutton_left.style.display = "block";
}        

closedoorbutton_left.onclick = () => {

    leftopen = false;
    console.log(leftopen)

    document.body.style.background = "url(./res/img/left_closed.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
        
    opendoorbutton_left.style.display = "block";
    closedoorbutton_left.style.display = "none";

    lightbutton_left.style.display = "none";
}

opendoorbutton_right.onclick = () => {

    rightopen = true;
    console.log(rightopen)

    document.body.style.background = "url(./res/img/right_open.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
        
    opendoorbutton_right.style.display = "none";
    closedoorbutton_right.style.display = "block";

    lightbutton_right.style.display = "block";
}        

closedoorbutton_right.onclick = () => {

    rightopen = false;
    console.log(rightopen)

    document.body.style.background = "url(./res/img/right_closed.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
        
    opendoorbutton_right.style.display = "block";
    closedoorbutton_right.style.display = "none";

    lightbutton_right.style.display = "none";
}        
