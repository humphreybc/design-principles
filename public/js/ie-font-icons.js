/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'projectx\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-star' : '&#xe000;',
			'icon-share' : '&#xe001;',
			'icon-quote' : '&#xe002;',
			'icon-bag' : '&#xe003;',
			'icon-video' : '&#xe004;',
			'icon-music' : '&#xe005;',
			'icon-pictures' : '&#xe006;',
			'icon-twitter' : '&#xe007;',
			'icon-facebook' : '&#xe008;',
			'icon-googleplus' : '&#xe009;',
			'icon-cog' : '&#xe00a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};