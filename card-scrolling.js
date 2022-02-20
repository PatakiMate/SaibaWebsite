window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {

    var imageSrc = document
    .getElementById('sliding-background')
    .style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
    .split(',')[0];

  // I just broke it up on newlines for readability

  var image = new Image();
  image.src = imageSrc;

    var width = image.width,
    height1 = image.height;
    console.log('width =' + width + ', height = ' + height1);


    console.log("ChangedWindowSize");
    let box = document.getElementById('sliding-background');
    let height = box.clientHeight;
console.log("SETTING PROPERTY TO: " + height);
box.style.setProperty('--element-height', height);
  }

  window.onload = function () {
   
  };

