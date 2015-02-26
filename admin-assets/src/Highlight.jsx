/**
 * @jsx React.DOM
 */

var React = require('react');
var hljs = require('highlight.js');

var Highlight = React.createClass({
	getDefaultProps: function () {
		return {
			className: ""
		};
	},
	componentDidMount: function () {
		this.highlightCode();
	},
	componentDidUpdate: function () {
		this.highlightCode();
	},
	highlightCode: function () {
		var domNode = this.getDOMNode();
		var nodes = domNode.querySelectorAll('pre code');
		var i = 0;
		for (; i < nodes.length; i++) {
			hljs.highlightBlock(nodes[i]);
		}
	},
	render: function () {
		return (
			<pre><code className={this.props.className}>{this.props.children}</code></pre>
		);
	}
});

module.exports = Highlight;
