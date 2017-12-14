$("#next").on("click", function(){
  var colors = ["", "redder", "red", "medred", "black"]
  var sizes = ["", "med", "big", "bigger", "biggest"]
  var meaniespeak = ["Well what do you want?", "I don't have all day", "Speak, puny human", "You are redundant", "and must be destroyed"]
  var userspeak = ["Umm", "...", "I'm sorry?", "???", "!!!"]
  var count = $(this).data("count");
  console.log(count);
  if (count < 3){
    $("#meanie").removeClass(colors[count]).addClass(colors[count+1]);
    $("#meaniesays").text(meaniespeak[count]);
    $("#meanie").removeClass(sizes[count]).addClass(sizes[count+1]);
    $("#usersays").text(userspeak[count]);
  }
  else if (count < 4){
    $("#meanie").removeClass(colors[count]).addClass(colors[count+1]);
    $("#meaniesays").text(meaniespeak[count]);
    $("#meanie").removeClass(sizes[count]).addClass(sizes[count+1]);
    $("#usersays").text(userspeak[count]);
    $("#angryL").removeClass("hide");
    $("#angryR").removeClass("hide");
  }
  else{
    $("#meaniesays").text(meaniespeak[count]);
    $("#usersays").text(userspeak[count]);
    $("#lilmeanie").addClass("hide");
    $("#fullface").removeClass("hide");
  }
  $(this).data("count", count+1);
});
