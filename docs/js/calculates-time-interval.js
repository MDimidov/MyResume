(function ($) {
    // Returns the month
    let getMonthByName = function getMonthByName(monthName) {
        let months = {
            "Jan": 0,
            "Feb": 1,
            "Mar": 2,
            "Apr": 3,
            "May": 4,
            "Jun": 5,
            "Jul": 6,
            "Aug": 7,
            "Sep": 8,
            "Oct": 9,
            "Nov": 10,
            "Dec": 11
        };
        return months[monthName];
    };

    // Returns the months difference
    // between two dates
    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    // Converts the number of total months
    // to a human-readable format
    // e.g. 16 months => 1 yr 4 mos
    function getBeautifiedTotal(totalMonths) {
        let result = '',
            years = parseInt(totalMonths / 12),
            months = parseInt(totalMonths % 12);

        if (years != 0) {
            if (years === 1) {
                result += years + " yr ";
            } else {
                result += years + " yrs ";
            }
        }
        if (months != 0) {
            if (months === 1) {
                result += months + " mo";
            } else {
                result += months + " mos";
            }
        }        
        return result;
    }

    // Dynamically calculates total time for position and education
    (function calcTotalExperience() {
        let startDates = $(".startDate"),
            lastDates = $(".lastDate"),
            timeTotals = $(".timeTotal");

        for (let i = 0; i < startDates.length; i++) {
            let startText = $(startDates[i]).text().trim(),
                endText = $(lastDates[i]).text().trim();

            let [startMonthName, startYear] = startText.split('-'),
                [endMonthName, endYear] = endText.split('-');

            let startMonth = getMonthByName(startMonthName),
                endMonth = getMonthByName(endMonthName);

            let startDate = new Date(startYear, startMonth, 1),
                endDate = new Date(endYear, endMonth, 1);

            let totalMonths = monthDiff(startDate, endDate) + 1;
            let beautifiedTotal = getBeautifiedTotal(totalMonths);
            console.log(beautifiedTotal)
            $(timeTotals[i]).text(beautifiedTotal);
        }
    })();

})(jQuery);
