class Currency {
    constructor(ticker) {
        this.ticker = ticker;
        console.log("constructor");
        this.CurrentQuote = 0.0;
        console.log(this.CurrentQuote);
        this.DayChange = 0.0;
        this.DayPercentChange = 0.0;
        this.DayOpen = 0.0;
        this.OneDayTimeSeries = [];
        this.FiveDayTimeSeries = [];
        this.OneMonthTimeSeries = [];
        this.ThreeMonthTimeSeries = [];
        this.SixMonthTimeSeries = [];
        this.OneYearTimeSeries = [];
    }

    getTicker() {
        return this.ticker;
    }

    getCurrentQuote() {
        return this.CurrentQuote;
    }

    getDayChange() {
        return this.DayChange;
    }

    getDayPercentChange() {
        return this.DayPercentChange;
    }

    setQuoteData() {
        let newData;
        APITodayBasicAPPLData( function(data) {
            console.log(data);
            newData = data;
        });
        this.CurrentQuote = newData["c"];
        this.DayChange = newData["d"];
        this.DayPercentChange = newData["dp"];
        this.DayOpen = newData["o"];
    }

    getOneDayTimeSeriesData() {
        // Redo once APIs.js has been updated
        data = APIIntradayAPPLData();
        return this.OneDayTimeSeriesData;
    }

    getFiveDayTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.FiveDayTimeSeries = APIs.getHistoricData()
        return this.FiveDayTimeSeries;
    }

    getOneMonthTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.OneMonthTimeSeries = APIs.getHistoricData()
        return this.OneMonthTimeSeries;
    }

    getThreeMonthTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.ThreeMonthTimeSeries = APIs.getHistoricData()
        return this.ThreeMonthTimeSeries;
    }

    getSixMonthTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.SixMonthTimeSeries = APIs.getHistoricData()
        return this.SixMonthTimeSeries;
    }

    getOneYearTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.OneYearTimeSeries = APIs.getHistoricData()
        return this.OneYearTimeSeries;
    }
}