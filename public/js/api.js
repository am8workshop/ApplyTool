//コンストラクタ
var Api = function(apiName, param){
	this.param = param;
	this.apiName = apiName;
}

Api.prototype.getApiUrl = function(apiName){
	var apiUrlMap = {
						getFiles : "http://localhost:8888/sample/kanai/json.html"
					}
	return apiUrlMap[apiName];
}

Api.prototype.getFiles = function(){
	var res = this.request();
	return res;
}

Api.prototype.request = function(){
	var res;
	var url = this.getApiUrl(this.apiName);
	$.ajax({
	    'type': 'GET',
	    'url': url,
	    'async' : false,
	    'dataType': 'json',
	    'data': this.param,
	    'success': function(data) {
	    	res = data;
	    },
	    'error': function() {
	    	alert('取得error');
	   }
	});
	return res;
}