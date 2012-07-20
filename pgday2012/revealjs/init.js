
			// Parse the query string into a key/value object
			var query = {};
			location.search.replace( /[A-Z0-9]+?=(\w*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			Reveal.initialize({
				// Display controls in the bottom right corner
				controls: true,

				// Display a presentation progress bar
				progress: true,

				// If true; each slide will be pushed to the browser history
				history: true,

				// Flags if mouse wheel navigation should be enabled
				mouseWheel: true,

				// Apply a 3D roll to links on hover
				rollingLinks: false,

				// UI style
				theme: query.theme || 'default', // default/neon

				// Transition style
				transition: query.transition || 'default' // default/cube/page/concave/linear(2d)
			});

			hljs.initHighlightingOnLoad();
