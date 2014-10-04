window.onLoad = onLoad();
function onLoad() {
	$(document).ready();
	Parse.initialize("QyD6gU9ea2bFczMYlbyZ0Lu4imllLAyldZVQB5H4",
		"rUvsYvxZuyD9Kf6m3bHSuh6fVlpVvgEOibXhsbzn"
	);
	var AmendablesPortal = Parse.Object.extend("AmendablesPortal");
	var query = new Parse.Query(AmendablesPortal);
	query.find({
		success: function(r) {
			var i = 0, titles = [], objId = [];
			while(i < r.length){
				var obj = r[i];
		   		titles[i] = obj.get("title");
		   		objId[i] = obj.id;
				i++;
			}
			i = 0;
			while(i < r.length){
				$('#title').append('<option value="' + (titles[i].toCamelCase()) + ", " + objId[i] + '">' + titles[i] + '</option>');
				i++;
			}
		}, error: function(error) {
			alert("Error");
		}
	});
}
function find(){
	var a = ($('#title').val()).split(", ");
	var objId = a[1], title = a[0];

	var AmendablesPortal = Parse.Object.extend("AmendablesPortal");
	var query = new Parse.Query(AmendablesPortal);
	$('#wrapper').append('<!--<button onclick="edit()">edit</button>--><br><br>') //this is commented (on inside)

	query.get(objId , {
	  success: function(petition) {
	    var elementIds = ["title", "school", "thesis", "probDetail", "probSupp", "counter", "solutDetail", "solutSupp", "solutAlt", "testimonials", "probSolutDetail"];
	    var elements = [], i = 0;
	    while(i < elementIds.length){
	    	elements[i] = petition.get(elementIds[i]);
	    	i++;
	    }
	    $('#wrapper').append('<h1 id="' + elementIds[0] + '">' + elements[0] + '</h1><h2 id="' + elementIds[1] + '">' + elements[1] + '</h2>');
	    i = 2;
	    while(i < elementIds.length - 2){
	    	$('#wrapper').append('<p id="' + elementIds[i] + '">&nbsp;&nbsp;&nbsp;&nbsp;' + elements[i] + '</p>');
	    	i++;
	    }
	  },
	  error: function(object, error) {
	    alert("I couldn't find the " + object + " of your petition. This is how I weep: " + error);
	  }
	});
}
/*function edit(){
	var a = ($('#title').val()).split(", ");
	var objId = a[1], title = a[0];

	var AmendablesPortal = Parse.Object.extend("AmendablesPortal");
	var query = new Parse.Query(AmendablesPortal);

	query.get(objId , {
	  success: function(petition) {
	    var elementIds = ["title", "school", "thesis", "probDetail", "probSupp", "counter", "solutDetail", "solutSupp", "solutAlt", "testimonials", "probSolutDetail"];
	    var elements = [], i = 0;
	    while(i < elementIds.length){
	    	elements[i] = petition.get(elementIds[i]);
	    	i++;
	    }
	    window.location = "http://rdhs.yashplorer.com/amendablesPortal?school=San Mateo";
	  },
	  error: function(object, error) {
	    alert("I couldn't find the " + object + " of your petition. This is how I weep: " + error);
	  }
	});
}*/
String.prototype.toCamelCase = function() {
      return this
          .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
          .replace(/\s/g, '')
          .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
};