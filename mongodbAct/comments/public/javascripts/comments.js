$(document).ready(function(){
    $("#serialize").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
	var url = "comment";
	$.ajax({
	  url:url,
 	  type: "POST",
	  data: jobj,
	  contentType: "application/json; charset=utf-8",
	  success: function(data,textStatus) {
  		$("#done").html(textStatus);
  	  }
	});
    });

    $("#getThem").click(function() {
	$.getJSON('comment', function(data) {
	    console.log(data);
	    var everything = "<ul>";
	    var boolys = 0;
	    for(var comment in data) {
		com = data[comment];
		everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
		boolys++;
	    }
	    everything += "</ul>";
	    $("#comments").html(everything);
	    var boolyset = "<p>Here are " + boolys + " Boolys for " + boolys + " comments</p>";
	    var boolyurl = "http://ec2-52-91-71-84.compute-1.amazonaws.com/cs360/viewables/booly.png";
	    for(var i = 0; i < boolys; i++)
	    {
		boolyset += "<img src='" + boolyurl + "'";
		boolyset += "id = 'booly" + i + "'";
		boolyset += "alt = 'A Booly'>";
	    }
	    $("#boolydiv").html(boolyset);
	})
    });

});

