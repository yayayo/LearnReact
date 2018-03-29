var GetWeather = React.createClass({
    render:function(){
        return <div>
            <input type="text" value={this.props.city} onChange={this.props.setCity}/>
            <button onClick={this.props.getWeather}>查询天气</button>
            <h2>{this.props.city} 现在的天气：{this.props.weather}</h2>
        </div>
    }
});

var Weather = React.createClass({
    getDefaultProps: function() {
        return {
            url:'https://free-api.heweather.com/v5/weather'
        };
      },
    getInitialState: function() {
      return {              
        key:'8a439a7e0e034cdcb4122c918f55e5f3',
        city:'',
        weather:''     
      };
    },
   
    handleChange: function(event) {
        this.setState({city: event.target.value,weather:''});
        
      },

    handleClick: function() {
        this.serverRequest = $.post(this.props.url,{city:this.state.city,key:this.state.key} ,function (result) {
            var status = result.HeWeather5[0].status;
            if(status=='ok'){
                var weather = result.HeWeather5[0].now.cond.txt;
                this.setState({weather:weather});
            }else{
                this.setState({weather:'输入有误！'});
            }
            
          }.bind(this));
    },
   
    
   
    render: function() {
      return (  
        <GetWeather getWeather={this.handleClick} setCity={this.handleChange} city={this.state.city} weather={this.state.weather} />    
      );
    }
  });
   
  ReactDOM.render(
    <Weather  />,
    document.getElementById('ajax')
  );