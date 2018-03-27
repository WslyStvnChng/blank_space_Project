//for steven: you could use handlebars here to load specific info
//or get an ajax call to get info from server
//request the tags for a specific image img/imgId
//call to route, the method, the callback, inside there is where 
//we would create the content for these popovers. 
// var tags = require('../../../models/tags');


//Row A [1]
$(document).ready(function() {

  $('[data-toggle="popover-row-a"]').popover({
    html: true,
    title: 'Title: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b> Lions Back, Moab!<br><hr><br><b>User2:</b>  How high is that?<br><hr><br>" +
      "<hr><b>User3:</b> Looks STEEP!" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
    });
      $("[data-toggle=popover-row-a]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
    })



//Row B [2]
  $('[data-toggle="popover-row-b"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  This looks BEAUTIFUL!<br><hr><br><b>User2:</b>  It really is!<br><hr><br>" +
      "<hr><b>User3:</b> I'm afraid of heights." +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
    });
      $("[data-toggle=popover-row-b]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
    }); 

//Row C [3]
  $('[data-toggle="popover-row-c"]').popover({
      html: true,
      title: 'Username: <a class="close" href="#");">&times;</a>',
      content:
        "<b>User1:</b>Are those Ray Bans?<br><hr><br><b>User2:</b>Looks like a douche! Is that John Stamos?<br><br>" +
        "<hr><b>User3:</b>Beautiful nose!<br>" +
        "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
      placement: "auto"
    });
      $("[data-toggle=popover-row-c]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
    });

//Row D [4]
  $('[data-toggle="popover-row-d"]').popover({
      html: true,
      title: 'Username: <a class="close" href="#");">&times;</a>',
      content:
        "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
        "<hr><b>User3:</b>  What's gucci mean?" +
       "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",       
      placement: "auto"
    });
      $("[data-toggle=popover-row-d]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
    });

//Row E [5]
  $('[data-toggle="popover-row-e"]').popover({
      html: true,
      title: 'Username: <a class="close" href="#");">&times;</a>',
      content:
        "<b>User1:</b>Dolla Dolla Bills Y'all<br><hr><br><b>User2:</b>Leo makin' it rain.<br><br>" +
        "<hr><b>User3:</b>  Are those ones?<br>" +
        "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>", 
      placement: "auto"
    });
      $("[data-toggle=popover-row-e]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
  });

//Row F [6]
  $('[data-toggle="popover-row-f"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-f]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
  
//Row G 7]
  $('[data-toggle="popover-row-g"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-g]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
//Row H [8]
  $('[data-toggle="popover-row-h"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>Dad bod!<br><hr><br><b>User2:</b>He's got a bit of a tum tum.<br><br>" +
      "<hr><b>User3:</b>Is he hiding an Oscar in there?<br>" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-h]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
  //Row I [9]
  $('[data-toggle="popover-row-i"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-i]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
  //Row J [10]
  $('[data-toggle="popover-row-j"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  Gucci brand belt buckle?<br><hr><br><b>User2:</b> No no no. That's definitely a leather belt<br><br>" +
      "<hr><b>User3:</b> Are we really tagging underneath his belt?!?<br>" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-j]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
});



  /*$('[data-toggle="popover-row-a"]').popover({
    html: true,
    title: 'Title: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b> Lions Back, Moab!<br><hr><br><b>User2:</b>  How high is that?<br><hr><br>" +
      "<hr><b>User3:</b> Looks STEEP!" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
    });
      $("[data-toggle=popover-row-a]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
    })



//Row B [2]
  $('[data-toggle="popover-row-b"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
    });
      $("[data-toggle=popover-row-b]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
    }); 

//Row C [3]
  $('[data-toggle="popover-row-c"]').popover({
      html: true,
      title: 'Username: <a class="close" href="#");">&times;</a>',
      content:
        "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
        "<hr><b>User3:</b>  What's gucci mean?" +
        "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
      placement: "auto"
    });
      $("[data-toggle=popover-row-c]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
    });

//Row D [4]
  $('[data-toggle="popover-row-d"]').popover({
      html: true,
      title: 'Username: <a class="close" href="#");">&times;</a>',
      content:
        "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
        "<hr><b>User3:</b>  What's gucci mean?" +
       "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",       
      placement: "auto"
    });
      $("[data-toggle=popover-row-d]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
    });

//Row E [5]
  $('[data-toggle="popover-row-e"]').popover({
      html: true,
      title: 'Username: <a class="close" href="#");">&times;</a>',
      content:
        "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
        "<hr><b>User3:</b>  What's gucci mean?" +
        "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>", 
      placement: "auto"
    });
      $("[data-toggle=popover-row-e]").on("shown.bs.popover", function() {
      $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
  });

//Row F [6]
  $('[data-toggle="popover-row-f"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-f]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
  
//Row G 7]
  $('[data-toggle="popover-row-g"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-g]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
//Row H [8]
  $('[data-toggle="popover-row-h"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-h]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
  //Row I [9]
  $('[data-toggle="popover-row-i"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-i]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
  //Row J [10]
  $('[data-toggle="popover-row-j"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?" +
      "<form><input type='text'></input><button id='btn-post-button'>Post</button></form>",
    placement: "auto"
  });
    $("[data-toggle=popover-row-j]").on("shown.bs.popover", function() {
    $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
  });
});*/






//End of object



//separation of concerns
//array of objects (aka tags)
// loop to go through our array of tags, and build the popovers for us

// var tags = [{
//   imageUrl: "google.jpg",
//   // associated location on grid: #imagelocation-D3,
//   comment: "blahblah",
//   link: "google.com",
//   foreignKey: true
// }]


// for(i = 0, i=tags.length(), i++){
// $('[data-toggle="popover-row-a"]').popover({
//   html: true,

//   title: 'Username: <a class="close" href="#");">tags of [i].name</a>',

//   comment:
//     "<b>User1:</b>  tags[i].comment <br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
//     "<hr><b>User3:</b>  What's gucci mean?",

//   placement: "auto"
// });
// 