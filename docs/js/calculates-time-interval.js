(function ($) {
  // Returns the month index (0–11) for дадено име
  let monthsMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };

  function monthDiff(d1, d2) {
    var months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  function getBeautifiedTotal(totalMonths) {
    let result = "",
      years = Math.floor(totalMonths / 12),
      months = totalMonths % 12;

    if (years) result += years + (years === 1 ? " yr " : " yrs ");
    if (months) result += months + (months === 1 ? " mo" : " mos");
    return result || "0 mos";
  }

  (function calcTotalExperience() {
    let startDates = $(".startDate"),
      lastDates = $(".lastDate"),
      timeTotals = $(".timeTotal");

    for (let i = 0; i < startDates.length; i++) {
      let startText = $(startDates[i]).text().trim(),   // "Nov-2021"
        endText = $(lastDates[i]).text().trim();    // "Present" or "May-2024"

      // 1) Implement startDate
      let [startMonthName, startYear] = startText.split("-"),
        startMonthIdx = monthsMap[startMonthName],
        startDate = new Date(parseInt(startYear, 10), startMonthIdx, 1);

      // 2) If it is "Present" or "Current", use today's date
      let endDate;
      if (/^(Present|Current|Now)$/i.test(endText)) {
        endDate = new Date();               // untill today
      } else {
        let [endMonthName, endYear] = endText.split("-");
        let endMonthIdx = monthsMap[endMonthName];
        endDate = new Date(parseInt(endYear, 10), endMonthIdx, 1);
      }

      // 3) Difference to show
      let totalMonths = monthDiff(startDate, endDate) + 1;
      let beautifiedTotal = getBeautifiedTotal(totalMonths);

      $(timeTotals[i]).text(beautifiedTotal);
    }
  })();
})(jQuery);
