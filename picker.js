var tx="";
var nodes=[];
var links=[];
var a=document.getElementsByTagName("body");
getchildtext(a[0]);

for (var i=0; i<nodes.length; i++) {
	nodes[i].appendChild(links[i]);
}

function getchildtext(args) {
	if (args.nodeName == "#text") {
		tmp=args.nodeValue.match(/v=[0-9a-zA-Z_\-]*/);
		if (tmp != null) {
			uri = "http://www.youtube.com/watch?" + tmp[0];
			var link = document.createElement('a');
			link.setAttribute("href", uri);
			link.setAttribute("target", "_blank");
			link.appendChild(document.createTextNode(uri));
			nodes.push(args.parentNode);
			links.push(link);
		} else {
			tmp=args.nodeValue.match(/(s|n)m[0-9]+/);
			if (tmp != null) {
				uri = "http://www.nicovideo.jp/watch/" + tmp[0];
				var link = document.createElement('a');
				link.setAttribute("href", uri);
				link.setAttribute("target", "_blank");
				link.appendChild(document.createTextNode(uri));
				nodes.push(args.parentNode);
				links.push(link);
			} else {
				tmp = args.nodeValue.match(/youtu.be\/[a-zA-Z0-9_]+/);
				if (tmp != null) {
					uri = "http://" + tmp[0];
					var link = document.createElement('a');
					link.setAttribute("href", uri);
					link.setAttribute("target", "_blank");
					link.appendChild(document.createTextNode(uri));
					nodes.push(args.parentNode);
					links.push(link);
				}
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

