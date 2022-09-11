import { useState, useEffect } from "react";

const getWidth = () =>
	window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const dynamicSizeCalculator = (currWidth) => {
	let dynamicSize = 0;

	const sizeQueries = [
		{ 370: "8vw" },
		{ 600: "7vw" },
		{ 900: "6vw" },
		{ 1250: "5vw" },
		{ 1550: "4vw" },
		{ 2400: "3vw" },
	];

	sizeQueries.forEach((querySize) => {
		const compareWidth = parseInt(Object.keys(querySize)[0], 10);
		if (compareWidth < currWidth) {
			dynamicSize = Object.values(querySize)[0];
		}
	});

	return dynamicSize;
};

function useCurrentWidth() {
	// save current window Width in the state object
	let [width, setWidth] = useState(getWidth());

	// in this case useEffect will execute only once because
	// it does not have any dependencies.
	useEffect(() => {
		// timeoutId for debounce mechanism
		let timeoutId = null;
		const resizeListener = () => {
			// prevent execution of previous setTimeout
			clearTimeout(timeoutId);
			// change Width from the state object after 150 milliseconds
			timeoutId = setTimeout(() => setWidth(getWidth()), 150);
		};
		// set resize listener
		window.addEventListener("resize", resizeListener);

		// clean up function
		return () => {
			// remove resize listener
			window.removeEventListener("resize", resizeListener);
		};
	}, []);

	return dynamicSizeCalculator(width);
}

export default useCurrentWidth;
