class Currency {
    constructor(ticker) {
        this.ticker = ticker;
        this.MostRecentQuote = 0.0;
        this.OpeningQuote = 0.0;
        this.OneDayTimeSeries = [];
        this.FiveDayTimeSeries = [];
        this.OneMonthTimeSeries = [];
        this.ThreeMonthTimeSeries = [];
        this.SixMonthTimeSeries = [];
        this.OneYearTimeSeries = [];
    }

    setTicker(ticker) {
        this.ticker = ticker;
    }

    getTicker() {
        return this.ticker;
    }

    getMostRecentQuote() {
        return this.MostRecentQuote;
    }

    getDailyPercentChange() {
        return (this.MostRecentQuote / this.OpeningQuote);
    }

    getOneDayTimeSeriesData() {
        // Redo once APIs.js has been updated
        // this.OneDayTimeSeries = APIs.getHistoricData()
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