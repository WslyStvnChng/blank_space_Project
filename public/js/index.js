$(".img-click").on("click", function(e) {
    var image = $(this).attr("src");
    console.log('here is the id we need', image);
    $.ajax("/image", {
        type: "POST",
        data: {
            src: image
        }
      }).then(
        function(result) {
          console.log("getting image", result);
          //Reload the page to get the updated list
        //   location.reload();
        }
      );
  });