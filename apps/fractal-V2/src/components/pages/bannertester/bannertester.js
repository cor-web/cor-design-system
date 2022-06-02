/* ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" */


function dropHandler(ev) {
  console.log('File(s) dropped');
  const imageToReplace = ev.target;

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        
        console.log('... file[' + i + '].name = ' + file.name);

        if (file.type.indexOf('image') == 0) {
          var reader = new FileReader();
          reader.onload = function(e) {
            imageToReplace.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }

      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }
}

function dragOverHandler(ev) {
  ev.preventDefault();
}

function click(ev) {
  console.log(ev);
  ev.preventDefault();
}

const replacableBanners =  document.querySelectorAll('.replaceableBanner');

for (var replacableBanner of replacableBanners) {
  replacableBanner.addEventListener('drop', dropHandler);
  replacableBanner.addEventListener('dragover', dragOverHandler);
}