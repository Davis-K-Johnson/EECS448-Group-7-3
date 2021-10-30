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
        return this.CurrentQuote;
    }

    getDayChange() {
        return this.DayChange;
    }

    getDayPercentChange() {
        let temp = "(" +this.DayPercentChange + "%)";
        return temp;
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
        let closes = data["c"];
        let times = data["t"];
        let isos = times.map(t => UNIXtoISOConversion(t));
        let gData = closes.map((c, i) => {return {t:isos[i], y:c}});
        let bgc = CreateBackgroundColors(gData.length);
        let bc = CreateBorderColors(gData.length);
        this.OneDayTimeSeries = {
            labels: isos,
            datasets: [{
            label: this.ticker,
            data: gData,
            backgroundColor: bgc,
            borderColor: bc,
            borderWidth: 1
            }]
        };
    }

    /**
     * 
     * @returns 
     */
    getOneDayTimeSeriesData() {
        return this.OneDayTimeSeries;
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