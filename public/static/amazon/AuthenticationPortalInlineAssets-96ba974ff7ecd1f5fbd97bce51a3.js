(function(h){var l=window.AmazonUIPageJS||window.P,p=l._namespace||l.attributeErrors,c=p?p("AuthenticationPortalInlineAssets"):l;c.guardFatal?c.guardFatal(h)(c,window):c.execute(function(){h(c,window)})})(function(h,l,p){h.when("A","ready").register("cross-domain-sso",function(c){var a=c.state("central-identity-provider-state");if(a&&a.sloDomainsToPing&&Array.isArray(a.sloDomainsToPing))for(var a=a.sloDomainsToPing,e=0;e<a.length;e++)0<a[e].length&&c.post("https://"+a[e]+"/ap/sso/clear",{withCredentials:!0})})});