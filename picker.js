var tx="";
var a=document.getElementsByTagName("body");
getchildtext(a[0]);
document.body.innerHTML = tx;
document.body.style.backgroundColor='#FFFFFF';

function getchildtext(args) {
	if (args.nodeName == "#text") {
		tmp=args.nodeValue.match(/v=[0-9a-zA-Z_\-]*/);
		if (tmp != null) {
			uri = "http://www.youtube.com/watch?" + tmp[0];
			tx += '<a target="_blank" href="' + uri + '">' + uri + '</a><br />';
		} else {
			tmp=args.nodeValue.match(/(s|n)m[0-9]+/);
			if (tmp != null) {
				uri = "http://www.nicovideo.jp/watch/" + tmp[0];
				tx += '<a target="_blank" href="' + uri + '">' + uri + '</a><br />';
			}
		}
	}
	if (args.hasChildNodes()) {
		var cld = args.childNodes;
		for (var j=0; j<cld.length;j++) {
			getchildtext(cld.item(j));
		}
	}

}

