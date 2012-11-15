$( function() {
	var $tab_title_input = $( '#tab_title' ),
	    $tab_content_input = $( '#tab_content' );
	var tab_counter = 2;

	var $tabs = $( '#right-tabs' ) . tabs( {
	    tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
	    add: function( event, ui ) {
	        var tab_content = $tab_content_input . val() || 'タブ ' + tab_counter + ' の内容。';
	        $( ui . panel ) . append( '<p>' + tab_content + '</p>' );
	    }
	} );
	
	var $tabs = $( '#left-tabs' ) . tabs( {
	    tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>",
	    add: function( event, ui ) {
	        var tab_content = $tab_content_input . val() || 'タブ ' + tab_counter + ' の内容。';
	        $( ui . panel ) . append( '<p>' + tab_content + '</p>' );
	    }
	} );
	
	var $dialog = $( '#jquery-ui-dialog' ) . dialog( {
	    autoOpen: false,
	    modal: true,
	    buttons: {
	        '追加': function() {
				var connectInfo = {
						hostName : $('#hostName').val(),
						userName : $('#userName').val(),
						password : $('#password').val(),
						portName : $('#portNumber').val(),
						dirParh : $('#dirPath').val(),
				}
				localStorage.setItem($('#tabTitle').val(), JSON.stringify(connectInfo))
	        	var api = new Api('http://localhost:8888/sample/kanai/json.html', JSON.stringify(connectInfo));
	        	api.connectServer()
	            addTab();
	            $( this ) . dialog( 'close' );
	        },
	        'キャンセル': function() {
	            $( this ) . dialog( 'close' );
	        }
	    },
	    open: function() {
	        $tab_title_input . focus();
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
	    var tab_title = $tab_title_input . val() || 'タブ ' + tab_counter;
	    $tabs . tabs( 'add', '#left-tabs-' + tab_counter, tab_title );
	    tab_counter++;
	  
	    
	}
	
	
	
	$( '#add_tab' )
	    .button()
	    .click( function() {
	        $dialog.dialog( 'open' );
	    } );
	
	$( '#left-tabs span.ui-icon-close' ).live( 'click', function() {
	    var index = $( 'li', $tabs ) . index( $( this ) . parent() );
	    $tabs . tabs( 'remove', index );
	} );
	$( '#right-tabs span.ui-icon-close' ).live( 'click', function() {
	    var index = $( 'li', $tabs ) . index( $( this ) . parent() );
	    $tabs . tabs( 'remove', index );
	} );
	
	$( '.ui-tabs-nav' ) . sortable( {
        axis: 'x'
    } );
});