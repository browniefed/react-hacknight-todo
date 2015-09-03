var React = require('react');

var Todo = React.createClass({
    componentDidMount: function() {
        console.log(React.findDOMNode(this.props.parent));
        console.log(React.findDOMNode(this));
    },
    render: function() {
        var Wrap = this.props.wrap;
        return (
            <li>
                <span>{this.props.children}</span>
                <a href="#" onClick={this.props.onRemove}>Remove</a>
            </li>
        );  
    }
})
''
module.exports = Todo;