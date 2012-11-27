$( function() {
	var tab_counter;
	//tabライブラリの中身触りたくないのでここでnewしたAPIオブジェクトを保持させてください。
	var api;

	var $rightTabs = $( '#right-tabs' ) . tabs( {
	    tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
	    add: function( event, ui ) {
	        $( ui . panel ) . append( '<p>タブの中身</p>' );
	    }
	} );
	
	//addされたタブの中身を生成する。
	var $leftTabs = $( '#left-tabs' ).tabs( {
		//中身切り替えaタグと削除ボタンがテンプレ
	    tabTemplate : "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
	    add : function(event, ui) {
	    	//パス表示
	        $(ui.panel) . append( 'CurrentPath<input class="w100" type="text" value="' + api.res.resultset.path.current + '"</input><hr>'); 
	        //files表示
	        var files = api.res.resultset.files;
	        for(var i = 0; i < files.length; i++){
	        	$(ui.panel).append( '<p>' + files[i].type + ':' + files[i].name + '</p>' );
	        }
	        
	    }
	} );
	
	var $dialog = $( '#jquery-ui-dialog' ) . dialog( {
	    autoOpen: false,
	    modal: true,
	    buttons: {
	        '追加': function() {
	        	//接続情報取得
				var connectInfo = {
						hostName : $('#hostName').val(),
						userName : $('#userName').val(),
						password : $('#password').val(),
						portName : $('#portNumber').val(),
						dirParh : $('#dirPath').val(),
				}
				//ローカルストレージに接続情報セット
				localStorage.setItem($('#tabTitle').val(), JSON.stringify(connectInfo))
				
				api = new Api('getFiles', JSON.stringify(connectInfo));
				//レスポンスをapiオブジェクトにセット
	        	api.res = api.getFiles();
	            addTab();
	            $( this ) . dialog( 'close' );
	        },
	        'キャンセル': function() {
	            $( this ) . dialog( 'close' );
	        }
	    },
	    open: function() {
	    	//ダイアログ開いた際の初期処理を行う
	    },
	    close: function() {
	        $form[ 0 ] . reset();
	    }
	} );
	
	var $form = $( "form", $dialog ) . submit( function() {
	    addTab();
	    $dialog . dialog( 'close' );
	    return false;
	} );
	
	function addTab() {
	    var tabTitle = $( '#tabTitle' ).val();
	    //タブのidが現在連番になっている。タブ移動で必要？
	    tab_counter = $("#left-tabs > ul > li").length + 1;
	    $leftTabs . tabs( 'add', '#left-tabs-' + tab_counter, tabTitle );
	}
	
	$( '#add_tab' ).click(function(){
	        $dialog.dialog( 'open' );
	    });
	
	$( '#left-tabs span.ui-icon-close' ).live( 'click', function() {
	    var index = $( 'li', $leftTabs ) . index( $( this ) . parent() );
	    $leftTabs . tabs( 'remove', index );
	} );
	$( '#right-tabs span.ui-icon-close' ).live( 'click', function() {
	    var index = $( 'li', $rightTabs ) . index( $( this ) . parent() );
	    $rightTabs . tabs( 'remove', index );
	} );
	
	$( '.ui-tabs-nav' ) . sortable( {
        axis: 'x'
    } );
});