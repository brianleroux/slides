;(function() {
var pp = window.location.search.match( /print-pdf/gi ) ? 'pdf' : 'paper'
document.write( '<link rel="stylesheet" href="css/print/' + pp + '.css" type="text/css" media="print">' )
});
