import {LineChart, Line, Tooltip, YAxis, XAxis} from 'recharts';
import React from 'react';

class PortfolioChart extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.currentVal = this.data[this.data.length-1].valuation;
    this.state = {
      price: this.currentVal,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.handleResetPrice = this.handleResetPrice.bind(this);
  }

  customToolTip(e) {
    if (!e.label || !e) return null;
    else {
      const info = e.label.split('T');
      const dateNow = info[0];
      const timeNow = info[1].split('.')[0];
      return (
        <div className="Stock-Tool-Tip" >
          {dateNow}
          <br/>
          {timeNow}
        </div>
      );
    }
    return null;
  }

  handleResetPrice() {
    this.setState({
      price: this.currentVal,
    });
  }


  clickHandler(e) {
    if (e === undefined || e.activePayload === undefined) return;
    this.setState({
      price: e.activePayload[0].value,
    });
  }


  render() {
    return (
      <div>
        <div className='Stock-Container-Title'>
          <div className='Stock-Container-Header'>

            <div className="Stock-Container-Company-Price">
                                Portfolio Value
              <br/>
              {this.state.price.toLocaleString('en', {
                style: 'currency', currency: 'USD'})}

            </div>

          </div>

        </div>
        <div className="Chart-Container">
          <LineChart width={600} height={250} data={this.data}
            onMouseLeave={this.handleResetPrice}
            onMouseMove={this.clickHandler}
          >
            <Line type="monotone"
              dataKey="valuation"
              strokeWidth={1.5}
              dot={false}
              stroke={
                (this.data[this.data.length-1].valuation -
                    this.data[0].valuation >= 0) ?
                    '#21ce99' :
                    '#f45531'
              }
            />
            <YAxis
              type="number"
              domain={['dataMin'-5, 'dataMax'+5]}
              axisLine={false} hide={true} />
            <Tooltip
              position={{y: 0}}
              offset={-50}
              isAnimationActive={false}
              content={this.customToolTip}
              wrapperStyle={{top: -10}}
            />
            <XAxis dataKey='date' hide={true} />

          </LineChart>
        </div>
      </div>

    );
  }
}

export default PortfolioChart;
