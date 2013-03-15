ts2013-reveal-template
======================

RevealJS template for my 2013 TechSummit talks

You need to install the Adobe Clean font from sjshare/apps/Release/MAC/English/Fonts/Corp ID Fonts.

Forked from https://github.com/hakimel/reveal.js/

To use the theme in an existing reveal.js deck, just copy the css/theme/adobe file to your existing presentation, and add the following as the first element in your presentation's body.

<code><pre>
&lt;div id='banner'&gt;
            &lt;object id='banner-adobe' data='css/theme/adobe/banner-adobe.svg' type='image/svg+xml'&gt;&lt;/object&gt;
            &lt;object id='banner-large' data='css/theme/adobe/banner-tech-summit-large.svg' type='image/svg+xml'&gt;&lt;/object&gt;
            &lt;object id='banner-small' data='css/theme/adobe/banner-tech-summit-small.svg' type='image/svg+xml'&gt;&lt;/object&gt;
&lt;/div&gt;
</pre></code>

Couldn't do it all in CSS because I'm currently fighting with a WebKit bug.
https://bugs.webkit.org/show_bug.cgi?id=75970

For a preview, see https://git.corp.adobe.com/pages/betravis/ts2013-reveal-template
