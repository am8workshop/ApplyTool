//コンストラクタ
var Api = function(url, param){
	this.param = param;
	this.url = url;
}

<<<<<<< HEAD
Api.prototype.connectServer = function(){
	return this.request();
}
Api.prototype.request = function(){
	$.ajax({
	    'type': 'GET',
	    'url': this.url,
=======
Api.prototype.getFiles = function(){
	return this.request();
}
Api.prototype.request = function(){
	$.ajax({
	    'type': 'GET',
	    'url': this.url,
	    'async' : false,
>>>>>>> branch 'master' of https://github.com/am8workshop/ApplyTool.git
	    'dataType': 'json',
	    'data': this.param,
	    'success': function(data) {
	    	return data;
	    },
	    'error': function() {
	    	alert('取得error');
	   }
	});
}
