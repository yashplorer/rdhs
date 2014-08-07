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
}