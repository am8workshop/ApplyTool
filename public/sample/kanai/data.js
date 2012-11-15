//コンストラクタ
var DataUtil = function(){
	DataUtil.prototype.localStorage = {}
	DataUtil.prototype.api = {}
};
//globalでクラスをもたせる
dataUtil = new DataUtil();

//メソッドセットアップ
DataUtil.prototype.localStorage.setConnectInfo = function (){
						var connectInfo = {
								hostName : $('#hostName').val(),
								userName : $('#userName').val(),
								password : $('#password').val(),
								portName : $('#portNumber').val(),
								dirParh : $('#dirPath').val(),
						}
						dataUtil['connectInfo'] = JSON.stringify(connectInfo);
						localStorage.setItem($('#tabTitle').val(), JSON.stringify(connectInfo));
					}
	
DataUtil.prototype.api.getFiles = function (){
				$.ajax({
				    'type': 'GET',
				    'url': 'http://localhost:8888/sample/kanai/json.html',
				    'dataType': 'json',
				    'data': dataUtil.connectInfo,
				    'success': function(data) {
				    	return data;
				    },
				    'error': function() {
				    	alert('取得error');
				   }
				});
			}