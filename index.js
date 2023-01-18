document.querySelector(".first-dropdown").addEventListener("click",function(){
var img_src = document.getElementById("my-img").src;

console.log(img_src);
if(img_src === "file:///C:/Users/deban/OneDrive/Desktop/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg"){
  console.log("entering");
  document.getElementById("my-img").src = "images/icon-arrow-up.svg";
}
else{
  document.getElementById("my-img").src = "images/icon-arrow-down.svg";
}
});
document.querySelector(".second-dropdown").addEventListener("click",function(){
var img_src = document.getElementById("my-img1").src;

console.log(img_src);
if(img_src === "file:///C:/Users/deban/OneDrive/Desktop/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg"){

  document.getElementById("my-img1").src = "images/icon-arrow-up.svg";
}
else{
  document.getElementById("my-img1").src = "images/icon-arrow-down.svg";
}
});
const menu = document.getElementById("menu-icon");
menu.addEventListener("click",function(){

  if(menu.src === "file:///C:/Users/deban/OneDrive/Desktop/intro-section-with-dropdown-navigation-main/images/icon-menu.svg"){
    menu.src = "images/icon-close-menu.svg";
  }else{
    menu.src = "images/icon-menu.svg";
  }
})
