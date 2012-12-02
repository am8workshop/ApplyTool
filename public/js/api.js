//コンストラクタ
var Api = function(apiName, param){
	this.param = param;
	this.apiName = apiName;
}

Api.prototype.urlMap = {
	getFiles : "/apply/ls/l"
}
Api.prototype.getApiUrl = function(apiName){
	return this.urlMap[apiName];
}

Api.prototype.getFiles = function(){
	var res = this.request();
	return res;
}

Api.prototype.request = function(){
	var res;
	//paramメソッドでオブジェクトをクエリに変換
	var param = $.param(this.param)
	var url = this.getApiUrl(this.apiName);
	$.ajax({
	    'type': 'GET',
	    'url': url,
	    'async' : false,
	    'dataType': 'json',
	    'data': param,
	    'success': function(data) {
	    	res = data;
	    },
	    'error': function() {
	    	alert('error');
	   }
	});
	return res;
}