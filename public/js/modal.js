//for steven: you could use handlebars here to load specific info
//or get an ajax call to get info from server
//request the tags for a specific image img/imgId
//call to route, the method, the callback, inside there is where 
//we would create the content for these popovers. 


//Row A [1]
$(document).ready(function() {
  $('[data-toggle="popover-row-a"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-a]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
});

//Row B [2]
$(document).ready(function() {
  $('[data-toggle="popover-row-b"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-b]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
});

//Row C [3]
$(document).ready(function() {
  $('[data-toggle="popover-row-c"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-c]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
});

//Row D [4]
$(document).ready(function() {
  $('[data-toggle="popover-row-d"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-d]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + -20 + "px");
});

//Row E [5]
$(document).ready(function() {
  $('[data-toggle="popover-row-e"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-e]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + 40 + "px");
});

//Row F [6]
$(document).ready(function() {
  $('[data-toggle="popover-row-f"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-f]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + 20 + "px");
});

//Row G [7]
$(document).ready(function() {
  $('[data-toggle="popover-row-g"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-g]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + 40 + "px");
});

//Row H [8]
$(document).ready(function() {
  $('[data-toggle="popover-row-h"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-h]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + 40 + "px");
});

//Row I [9]
$(document).ready(function() {
  $('[data-toggle="popover-row-i"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-i]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + 40 + "px");
});

//Row J [10]
$(document).ready(function() {
  $('[data-toggle="popover-row-j"]').popover({
    html: true,
    title: 'Username: <a class="close" href="#");">&times;</a>',
    content:
      "<b>User1:</b>  You gucci my dude?<br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
      "<hr><b>User3:</b>  What's gucci mean?",
    placement: "auto"
  });
});

$("[data-toggle=popover-row-j]").on("shown.bs.popover", function() {
  $(".popover").css("middle", parseInt($(".popover").css("middle")) + 50 + "px");
});




//separation of concerns
//array of objects (aka tags)
// loop to go through our array of tags, and build the popovers for us

/*var tags = [{
  imageUrl: "google.jpg",
  associated location on grid: #imagelocation-D3,
  comment: "blahblah",
  link: "google.com"
}]


for(i = 0, i=tags.length(), i++){
$('[data-toggle="popover-row-a"]').popover({
  html: true,

  title: 'Username: <a class="close" href="#");">tags of [i].name</a>',

  comment:
    "<b>User1:</b>  tags[i].comment <br><hr><br><b>User2:</b>  I'm gucci bro, what's up<br><hr><br>" +
    "<hr><b>User3:</b>  What's gucci mean?",

  placement: "auto"
});
}