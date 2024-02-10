//your JS code here. If required.
const daysOfAYear = (year) => {
	if (year%100===0) {
		if (year%400===0) {
			return 366;
		} else {
			return 365;
		}
	} else {
		if (year%4===0) {
			return 366;
		} else {
			return 365;
		}
	}
}

const year = prompt("Enter the year");
alert(daysOfAYear(year));
