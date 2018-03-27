
//hold until the handlers are loaded 

$(function() {
   $("#linkBtn").on("click", function(event) {
    

    event.preventDefault();
     console.log("clicked!");

    //new object that collects the Post data
    var newPost = {
      title : $('#title').val().trim(),
      username : $('#username').val().trim(),
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
        //location.reload();
      }
    );


  });
});