"use strict";

var options = {
	src: "./app",
	dst: "./static"
};

var less = {
	"style.css": "style.less"
};

module.exports = {
	options: options,

	"default": {
		css: less
	},

	"belt:css": {
		options: {
			src: "less",
			dst: "css",
			browsers: "last 2 versions"
		},

		tools: ["src-file", "less", "autoprefixer", "dst-file"]
	}
};
