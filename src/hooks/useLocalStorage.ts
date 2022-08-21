import { useEffect, useState } from "react";

export function useLocalStorage (key: string, defaultValue: string) {
	const [value, setValue] = useState(
		JSON.parse(localStorage.getItem(key)!) || defaultValue
	);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
}