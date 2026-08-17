var tab_btn_1 = document.getElementById("tab-btn-1");
var tab_btn_2 = document.getElementById("tab-btn-2");
var file_btn = document.getElementById("file-btn");


//func calls
tab_btn_1.addEventListener("click",changeBGOfBtn_1);
tab_btn_2.addEventListener("click",changeBGOfBtn_2);
file_btn.addEventListener("click",revealFileInput);
document.addEventListener("DOMContentLoaded",()=>{
    tab_btn_1.classList.add("active_1");
})


//funcs declarations
function changeBGOfBtn_1(){
    tab_btn_1.classList.add("active_1");
    tab_btn_2.classList.remove("active_2");
}
function changeBGOfBtn_2(){
    tab_btn_2.classList.add("active_2");
    tab_btn_1.classList.remove("active_1")
  
}
function revealFileInput(){
    console.log('clicked')
    var file = document.getElementById("file-input");
    file.click();
}

