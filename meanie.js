$("#meanie").on("click", function(){
  var colors = ["", "lightred", "redder", "red", "medred", "darkred"]
  var sizes = ["", "lil", "med", "big", "bigger", "biggest"]
  var count = $(this).data("count");
  console.log(count);
  $(this).removeClass(colors[count]).addClass(colors[count+1]);
  $(this).removeClass(sizes[count]).addClass(sizes[count+1]);
  $(this).data("count", count+1);
});
