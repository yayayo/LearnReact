var SetInputValue = React.createClass({
    getInitialState: function() {
        return {
          value:'hello world!'
        };
      },

      getDefaultProps: function() {
        return {
          name: 'world'
        };
      },

      render:function() {
          return (
            <div>
                <input value={this.state.value}/>
                <h1>hello, {this.props.name}</h1>
            </div>
        )
      }
});

ReactDOM.render(
    <SetInputValue></SetInputValue>,
    document.getElementById('state_props')
  );