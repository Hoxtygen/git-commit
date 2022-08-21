export function isValidDate(dateStr: string) {
	return !isNaN(new Date(dateStr).getDate());
}

export function formatDate(dateString: string) {
	if (!isValidDate(dateString)) {
		return 'Invalid date'
	}
	const date = new Date(dateString);
	const dayOfMonth = date.getDate();
	const month = date.toLocaleString("default", {
		month: "long"
	});
	const time = date.toLocaleTimeString("en-US", {
		timeZone: "CET",
		hour12: true,
		hour: "numeric",
		minute: 'numeric'
	});
	return `${month} ${dayOfMonth}, ${time}`;
}
