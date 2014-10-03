window.onLoad = onLoad();
function onLoad() {
	$(document).ready()
	var titleHeight = $("#amendTitle").height();
	var formHeight = $("#amendForm").height();
	var formWidth = $("#amendForm").width();
	$("#vertLine").css({
		"top": titleHeight + 30 + 'px',
		"height": formHeight - 50 + 'px'
	});
	$("#rightColumn").css({
		"width": formWidth + 'px',
		"height": formHeight - 70 + 'px'
	});
	Parse.initialize("QyD6gU9ea2bFczMYlbyZ0Lu4imllLAyldZVQB5H4",
		"rUvsYvxZuyD9Kf6m3bHSuh6fVlpVvgEOibXhsbzn"
	);
}

function save() {
	var t = ($('#title').val()).toCamelCase();
	var AmendablesPortal = Parse.Object.extend("AmendablesPortal");
	var t = new AmendablesPortal();

	t.set('title',			 $('#title').val());
	t.set('school',			 $('#school').val());
    t.set('thesis',			 $('#thesis').val());
    t.set('probDetail',		 $('#probDetail').val());
    t.set('probSupp',		 $('#probSupp').val());
    t.set('counter',		 $('#counter').val());
    t.set('solutDetail',	 $('#solutDetail').val());
    t.set('solutSupp',		 $('#solutSupp').val());
    t.set('solutAlt',		 $('#solutAlt').val());
    t.set('testimonials',	 $('#testimonials').val());
    t.set('probSolutDetail', $('#probSolutDetail').val());
    
    t.save();
}

String.prototype.toCamelCase = function() {
      return this
          .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
          .replace(/\s/g, '')
          .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
};