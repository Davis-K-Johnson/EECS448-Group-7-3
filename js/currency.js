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

    /**
     * 
     * @param {*} ticker 
     */
    setTicker(ticker) {
        this.ticker = ticker;
    }

    /**
     * 
     * @returns 
     */
    getTicker() {
        return this.ticker;
    }

    /**
     * 
     * @returns 
     */
    getCurrentQuote() {
        return this.CurrentQuote;
    }

    getDayChange() {
        return this.DayChange;
    }

    getDayPercentChange() {
        return this.DayPercentChange;
    }

    /**
     * 
     */
    setQuoteData(newData) {
        this.CurrentQuote = newData["c"];
        this.DayChange = newData["d"];
        this.DayPercentChange = newData["dp"];
        this.DayOpen = newData["o"];
    }

    setOneDayTimeSeriesData(data) {

    }
    
    /**
     * 
     * @returns 
     */
    getOneDayTimeSeriesData() {
        // Redo once APIs.js has been updated
        data = APIIntradayAPPLData();
        return this.OneDayTimeSeriesData;
    }

    /**
     * 
     * @returns 
     */
    getFiveDayTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.FiveDayTimeSeries = APIs.getHistoricData()
        return this.FiveDayTimeSeries;
    }

    /**
     * 
     * @returns 
     */
    getOneMonthTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.OneMonthTimeSeries = APIs.getHistoricData()
        return this.OneMonthTimeSeries;
    }

    /**
     * 
     * @returns 
     */
    getThreeMonthTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.ThreeMonthTimeSeries = APIs.getHistoricData()
        return this.ThreeMonthTimeSeries;
    }

    /**
     * 
     * @returns 
     */
    getSixMonthTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.SixMonthTimeSeries = APIs.getHistoricData()
        return this.SixMonthTimeSeries;
    }

    /**
     * 
     * @returns 
     */
    getOneYearTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.OneYearTimeSeries = APIs.getHistoricData()
        return this.OneYearTimeSeries;
    }
}