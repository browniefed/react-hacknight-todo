var React = require("react/addons");
var RouteHandler = require("react-router").RouteHandler;
var Todo = require('./todo');
var Perf = React.addons.Perf;

require("./style.css");
    function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var Application = React.createClass({
	getInitialState: function() {
        return {
            value: '',
            todos : [
                {
                    name: 'Come to React Hack Night'
                },
                {
                    name: 'Do presentation'
                }, 
                {
                    name: 'Clean up'
                },
                {
                    name: 'Dont die on the max ride home'
                }
            ] 
        };
    },
    componentDidMount: function() {
        Perf.start();
    },
    componentDidUpdate: function() {
        Perf.printDOM();
    },
    handleChange: function(e) {
        this.setState({
            value: e.target.value,
        })
    },
    handleKeyUp: function(e) {
        if (e.key == 'Enter') {
            var todos = this.state.todos.slice(0);
            todos.push({
                name: this.state.value
            });

            this.setState({
                value: '',
                todos: todos
            })
        }
    },
    handleRemove: function(index, e) {
        e.preventDefault();
        var todos = this.state.todos.slice(0);
        todos.splice(index, 1);
        
        this.setState({
            todos: todos
        })
    },
    randomize: function() {
        var todos = shuffle(this.state.todos);

        this.setState({
            todos: todos
        })
    },

	render: function() {
		return (
            <div className="application">
                <input type="text" 
                    value={this.state.value}    
                    onChange={this.handleChange} 
                    onKeyUp={this.handleKeyUp}
                />
                <button onClick={this.randomize}>Randomize</button>
                <ul>
                {
                  this.state.todos.map(function(todo, index) {
                    return (
                        <Todo key={todo.name} onRemove={this.handleRemove.bind(this, index)}>
                            {todo.name}
                        </Todo>
                    )
                  }, this)  
                }
                </ul>
            </div>
          )
	}
});
module.exports = Application;
