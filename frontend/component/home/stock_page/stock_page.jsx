import React from 'react'



class StockPage extends React.Component {

    componentDidMount() {
        // this.props.companyInfo("AAPL")
        // this.props.oneDayStockInfo("AAPL")
    
      
    }

    render(){
     let data =  [ {
            "date" : "2020-03-05 16:00:00",
            "open" : 294.480000000000,
            "low" : 291.500000000000,
            "high" : 294.950000000000,
            "close" : 293.750000000000,
            "volume" : 42307577
          }, {
            "date" : "2020-03-05 15:00:00",
            "open" : 295.200000000000,
            "low" : 293.846400000000,
            "high" : 295.790000000000,
            "close" : 294.480000000000,
            "volume" : 32879241
          }, {
            "date" : "2020-03-05 14:00:00",
            "open" : 294.600000000000,
            "low" : 293.450000000000,
            "high" : 296.810000000000,
            "close" : 296.017300000000,
            "volume" : 28940974
          }, {
            "date" : "2020-03-05 13:00:00",
            "open" : 296.430000000000,
            "low" : 293.350000000000,
            "high" : 297.316400000000,
            "close" : 294.234100000000,
            "volume" : 24118252
          }, {
            "date" : "2020-03-05 12:00:00",
            "open" : 297.620900000000,
            "low" : 296.910000000000,
            "high" : 299.540000000000,
            "close" : 297.380000000000,
            "volume" : 18795608
          }, {
            "date" : "2020-03-05 11:00:00",
            "open" : 297.627700000000,
            "low" : 297.450000000000,
            "high" : 299.230000000000,
            "close" : 297.620900000000,
            "volume" : 14026347
          }, {
            "date" : "2020-03-04 16:00:00",
            "open" : 298.980000000000,
            "low" : 298.930000000000,
            "high" : 303.020000000000,
            "close" : 303.020000000000,
            "volume" : 50355700
          }, {
            "date" : "2020-03-04 15:00:00",
            "open" : 298.938100000000,
            "low" : 297.865000000000,
            "high" : 300.190000000000,
            "close" : 298.960000000000,
            "volume" : 39698611
          }, {
            "date" : "2020-03-04 14:00:00",
            "open" : 298.860000000000,
            "low" : 298.560000000000,
            "high" : 300.690000000000,
            "close" : 298.938100000000,
            "volume" : 34555972
          }, {
            "date" : "2020-03-04 13:00:00",
            "open" : 295.434200000000,
            "low" : 295.360000000000,
            "high" : 298.970000000000,
            "close" : 298.935000000000,
            "volume" : 27791087
          }, {
            "date" : "2020-03-04 12:00:00",
            "open" : 295.260000000000,
            "low" : 294.348600000000,
            "high" : 297.400000000000,
            "close" : 295.434200000000,
            "volume" : 23552544
          }, {
            "date" : "2020-03-04 11:00:00",
            "open" : 295.690000000000,
            "low" : 294.548000000000,
            "high" : 296.090000000000,
            "close" : 295.260000000000,
            "volume" : 18301363
          }, {
            "date" : "2020-03-04 10:00:00",
            "open" : 289.320000000000,
            "low" : 289.320000000000,
            "high" : 298.450000000000,
            "close" : 294.870100000000,
            "volume" : 9236634
          }, {
            "date" : "2020-03-03 16:00:00",
            "open" : 290.220000000000,
            "low" : 287.950000000000,
            "high" : 293.370000000000,
            "close" : 289.000000000000,
            "volume" : 75228704
          }, {
            "date" : "2020-03-03 15:00:00",
            "open" : 286.750000000000,
            "low" : 285.930000000000,
            "high" : 290.690000000000,
            "close" : 290.220000000000,
            "volume" : 63417917
          }, {
            "date" : "2020-03-03 14:00:00",
            "open" : 293.690000000000,
            "low" : 288.048200000000,
            "high" : 293.690000000000,
            "close" : 288.180000000000,
            "volume" : 53811468
          }, {
            "date" : "2020-03-03 13:00:00",
            "open" : 295.930000000000,
            "low" : 292.795000000000,
            "high" : 297.360000000000,
            "close" : 293.690000000000,
            "volume" : 46978419
          }, {
            "date" : "2020-03-03 12:00:00",
            "open" : 294.007000000000,
            "low" : 293.410000000000,
            "high" : 296.598800000000,
            "close" : 295.930000000000,
            "volume" : 41643634
          }, {
            "date" : "2020-03-03 11:00:00",
            "open" : 294.141600000000,
            "low" : 294.141600000000,
            "high" : 303.770000000000,
            "close" : 299.460000000000,
            "volume" : 31382046
          }, {
            "date" : "2020-03-03 10:00:00",
            "open" : 301.660000000000,
            "low" : 292.338700000000,
            "high" : 302.720000000000,
            "close" : 294.141600000000,
            "volume" : 14788732
          }, {
            "date" : "2020-03-02 15:00:00",
            "open" : 290.670000000000,
            "low" : 286.890000000000,
            "high" : 291.890000000000,
            "close" : 288.310000000000,
            "volume" : 66112939
          }, {
            "date" : "2020-03-02 14:00:00",
            "open" : 292.160000000000,
            "low" : 287.570000000000,
            "high" : 292.270000000000,
            "close" : 290.640000000000,
            "volume" : 59053171
          }, {
            "date" : "2020-03-02 13:00:00",
            "open" : 292.710000000000,
            "low" : 289.080000000000,
            "high" : 293.530000000000,
            "close" : 292.180000000000,
            "volume" : 52279097
          }, {
            "date" : "2020-03-02 12:00:00",
            "open" : 285.200000000000,
            "low" : 284.989900000000,
            "high" : 292.900000000000,
            "close" : 292.700000000000,
            "volume" : 41589743
          }, {
            "date" : "2020-03-02 11:00:00",
            "open" : 281.410000000000,
            "low" : 279.840000000000,
            "high" : 286.350000000000,
            "close" : 285.080000000000,
            "volume" : 26364365
          }, {
            "date" : "2020-03-02 10:00:00",
            "open" : 282.800000000000,
            "low" : 277.720000000000,
            "high" : 284.080000000000,
            "close" : 281.615000000000,
            "volume" : 13793879
          } ]

        
          var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

        return(
            <div className='Stock-Container'>
                <div className='Stock-Container-Title'>
                    <div className='Stock-Container-Header'>
                        <div className="Stock-Container-Company-Name">
                        {this.props.company.companyName}
                        </div>
                        <div className="Stock-Container-Company-Price">
                        ${this.props.company.price}
                        </div>
                        <div className='Stock-Container-Company-Changes'>
                        {this.props.company.changes}{this.props.company.changesPercentage}
                        Today
                        </div>
                    </div>
                    <div>
                      
                    </div>
                </div>

                <div className="Stock-Container-Chart-Area"> 
                    Chart Area

                    <canvas id="myChart" width="400" height="400"></canvas>
                </div>

                <div className="Stock-Container-Chart-Navigation">
                    <div className="Stock-Container-Chart-Time">
                        <div className="Stock-Container-1D">1D</div>
                        <div className="Stock-Container-1W">1W</div>
                        <div className="Stock-Container-1M">1M</div>
                        <div className="Stock-Container-3M">3M</div>
                        <div className="Stock-Container-1Y">1Y</div>
                        <div className="Stock-Container-5W">5Y</div>
                    </div>
                    <div className="Stock-Container-Chart-Expand">
                        Expand []
                    </div>
                </div>
                    <div className="Stock-Container-About">
                        About
                    </div>
                    <div className="Stock-Container-Description">
                      {this.props.company.description}
                    </div>
                    <div className="Stock-Container-Company-Info">
                        <div>
                            CEO
                            <br/>
                            {this.props.company.ceo}
                        </div>

                        <div>
                            Headquarters
                            <br/>
                            {this.props.company.ceo}
                        </div>

                        <div>
                            
                            <br/>
                            {this.props.company.ceo}
                        </div>

                        <div>
                            CEO
                            <br/>
                            {this.props.company.ceo}
                        </div>
                    </div>
                


                
                
        

                

            </div>
            
        )
    }
}

export default StockPage