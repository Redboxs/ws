var bbfHorizontalMenu = (function() {

	var $listItems = $( '#bbf-hrmenu > ul > li' ),
		$menuItems = $listItems.children( 'a' ),
		$body = $( 'body' ),
		current = -1;

	function init() {
		$menuItems.on( 'click', open );
		$listItems.on( 'click', function( event ) { event.stopPropagation(); } );
	}

	function open( event ) {

		if( current !== -1 ) {
			$listItems.eq( current ).removeClass( 'bbf-hropen' );
		}

		var $item = $( event.currentTarget ).parent( 'li' ),
			idx = $item.index();

		if( current === idx ) {
			$item.removeClass( 'bbf-hropen' );
			current = -1;
		}
		else {
			$item.addClass( 'bbf-hropen' );
			current = idx;
			$body.off( 'click' ).on( 'click', close );
		}

		return false;

	}

	function close( event ) {
		$listItems.eq( current ).removeClass( 'bbf-hropen' );
		current = -1;
	}

	return { init : init };

})();