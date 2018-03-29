var Counter = React.createClass({
    render:function(){
        return <div>
            <button  onClick={this.props.updateCount}>点击次数</button>
            <h2>{this.props.clickCount}</h2>
        </div>
    }
});
var GetCounter = React.createClass({
    getInitialState: function () {
      return { clickCount: 0 };
    },
    handleClick: function () {
      this.setState(function(state) {
        return {clickCount: state.clickCount + 1};
      });
    },
    render: function () {
      return (<Counter clickCount={this.state.clickCount} updateCount={this.handleClick}></Counter>);
    }
  });

  ReactDOM.render(
    <GetCounter />,
    document.getElementById('api')
  );