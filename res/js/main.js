const start = document.getElementById("start");
const main_title = document.getElementById("main_title");
const forsen = document.getElementById("forsen");

const open_cam = document.getElementById("open_cam");
const close_cam = document.getElementById("close_cam");
const map = document.getElementById("map");
const cam1 = document.getElementById("cam1");
const cam2 = document.getElementById("cam2");
const cam3 = document.getElementById("cam3");
const cam4 = document.getElementById("cam4");
const cam5 = document.getElementById("cam5");
const cam6 = document.getElementById("cam6");
const cam7 = document.getElementById("cam7");
const cam8 = document.getElementById("cam8");

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

//------------------------------------------------------------------------------------------

let camera_on = 0;

let leftopen = true;
let rightopen = true;

let forsen_pos = 1;

// 1 = chem_storage
// 2 = mainroom
// 3 = outside_fence
// 4 = loadingbay
// 5 = warehouse
// 6 = vent_front
// 7 = vent_rightdoor
// 8 = office_front
// 9 = leftdoor
// 10 = rightdoor
// 11 = office

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

    forsenmovelogic();
}

//------------------------------------------------------------------------------------------
//Kamerky

open_cam.onclick = () => {
    document.body.style.background = "url(./res/img/chem_storage.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    camera_on++;
    open_cam.style.display = "none";
    close_cam.style.display = "block";
    console.log(camera_on);
    look_left.style.display = "none";
    look_right.style.display = "none";

    map.style.display = "block";
    cam1.style.display = "block";
    cam2.style.display = "block";
    cam3.style.display = "block";
    cam4.style.display = "block";
    cam5.style.display = "block";
    cam6.style.display = "block";
    cam7.style.display = "block";
    cam8.style.display = "block";
}

close_cam.onclick = () => {
    document.body.style.background = "url(./res/img/office.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

    camera_on--;
    open_cam.style.display = "block";
    close_cam.style.display = "none";
    console.log(camera_on);
    look_left.style.display = "block";
    look_right.style.display = "block";

    map.style.display = "none";
    cam1.style.display = "none";
    cam2.style.display = "none";
    cam3.style.display = "none";
    cam4.style.display = "none";
    cam5.style.display = "none";
    cam6.style.display = "none";
    cam7.style.display = "none";
    cam8.style.display = "none";
}

cam1.onclick = () => {
    document.body.style.background = "url(./res/img/chem_storage.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}

cam2.onclick = () => {
    document.body.style.background = "url(./res/img/mainroom.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}

cam3.onclick = () => {
    document.body.style.background = "url(./res/img/outside_fence.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}

cam4.onclick = () => {
    document.body.style.background = "url(./res/img/loadingbay.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}

cam5.onclick = () => {
    document.body.style.background = "url(./res/img/warehouse.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}

cam6.onclick = () => {
    document.body.style.background = "url(./res/img/vent_front.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}

cam7.onclick = () => {
    document.body.style.background = "url(./res/img/vent_rightdoor.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}

cam8.onclick = () => {
    document.body.style.background = "url(./res/img/office_front.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}




//------------------------------------------------------------------------------------------
//Koukání doleva/doprava


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
//Světla

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
//Dveře
    
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

//-------------------------------------------------------------------------------------------
//Forsen AWARE

let movelogic = 0;
function forsenmovelogic(){
    movelogic =  Math.floor((Math.random() * 15000) + 5000);
    console.log("forsen timer " + movelogic)
    forsenmovetimeout(movelogic);

};

function forsenmovetimeout(timeout){
    setTimeout(() => {
    movement();
    console.log("forsen moved to " + forsen_pos);
    forsenmovelogic();
    }, timeout)

};

function movement() {

    console.log(forsen_pos);

    if(forsen_pos == 1){
    logic = Math.floor((Math.random() * 100) + 1);
    if(logic < 50){forsen_pos = 3}
    else if(logic > 50){forsen_pos = 2};
    }

    //Alt Path

    else if(forsen_pos == 3){
    forsen_pos = 4;}
    
    else if(forsen_pos == 4){
    forsen_pos = 5;}


    else if(forsen_pos == 5){
    logic = Math.floor((Math.random() * 100) + 1);
    if(logic > 70){forsen_pos = 2}
    else if(logic < 70){forsen_pos = 6};
    }    

    else if(forsen_pos == 6){
    logic = Math.floor((Math.random() * 100) + 1);
    if(logic > 50){forsen_pos = 8}
    else if(logic < 50){forsen_pos = 7};}

    else if(forsen_pos == 7){
        forsen_pos = 10;}
    
    
    
    //Straight Path

    else if(forsen_pos == 2){
    forsen_pos = 8;
    }

    else if(forsen_pos == 8){
    logic = Math.floor((Math.random() * 100) + 1);
    if(logic < 50){forsen_pos = 9}
    else if(logic > 50){forsen_pos = 10};    
    }

    //At the doors

    else if(forsen_pos == 9 && leftopen == false){
        forsen_pos = 1;
    }

    else if(forsen_pos == 10 && rightopen == false){
        forsen_pos = 1;
    }

    else if(forsen_pos == 9){
        if(leftopen == true){
            forsen_pos = 11
            console.log("u ded")
        }
    }

    else if(forsen_pos == 10){
        if(rightopen == true){
            forsen_pos = 11
            console.log("u ded")
        }
    }


}

console.log(forsen_pos);

