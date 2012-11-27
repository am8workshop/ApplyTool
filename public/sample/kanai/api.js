//コンストラクタ
var Api = function(url, param){
	this.param = param;
	this.url = url;
}

Api.prototype.connectServer = function(){
	return this.request();
}
Api.prototype.request = function(){
	$.ajax({
	    'type': 'GET',
	    'url': this.url,
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