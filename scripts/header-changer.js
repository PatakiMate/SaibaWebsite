let width = window.outerWidth;
console.log("width: " + width);
if(width < 992) {
document.getElementById("header-top").className = 'container';
} else {
    document.getElementById("header-top").className = 'container-fluid'; 
}