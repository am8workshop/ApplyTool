//コンストラクタ
var Api = function(apiName, param){
	this.param = param;
	this.apiName = apiName;
}

<<<<<<< HEAD
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
=======
Api.prototype.urlMap = {
	getFiles : "http://localhost:8888/sample/kanai/json.html"
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
>>>>>>> branch 'master' of https://github.com/am8workshop/ApplyTool.git
	   }
	});
	return res;
}