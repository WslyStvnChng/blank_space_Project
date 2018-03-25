/**window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  function(e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false
);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    var list = document.createElement("ul");
    fileList.appendChild(list);
    for (var i = 0; i < files.length; i++) {
      var li = document.createElement("li");
      list.appendChild(li);

      var img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      };
      li.appendChild(img);
      var info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}**/


//hold until the handlers are loaded 

$(function() {
   $("#linkBtn").on("click", function(event) {

    event.preventDefault();

    //new object that collects the Post data
    var newPost = {
      title : $('#title').val().trim(),
      username : $('#textinput').val().trim(),
      link : $('#link').val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/posts", {
      type: "POST",
      data: newPost
    }).then(
      function() {
        console.log("created new post");
        // Reload the page to get the updated list
        location.reload();
      }
    );


  });
});