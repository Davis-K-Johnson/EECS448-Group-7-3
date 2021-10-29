class Currency {
    constructor(ticker) {
        this.ticker = ticker;
        this.CurrentQuote = 0.0;
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
        return this.MostRecentQuote;
    }

    /**
     * 
     */
    setQuoteData() {
        data = APITodayBasicAPPLData();
        this.CurrentQuote = data["c"];
        this.DayChange = data["d"];
        this.DayPercentChange = data["dp"];
        this.DayOpen = data["o"];
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