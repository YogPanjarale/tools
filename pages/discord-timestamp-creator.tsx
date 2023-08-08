import Head from "next/head";
import { useState } from "react";

function Creator() {
	const [input, setInput] = useState("");
	function makeText(a: string) {

		let result = convertISTtoUnixTimestamp(a);
		if (result === "Invalid format") {
			// setWarning("Invalid format. Please provide the date and time in the format 'MM/DD/YYYY HH:MM'.")
			return "Invalid format";
		}
		// setWarning("");
		return `<t:${result}:f>`;
	}
	function convertISTtoUnixTimestamp(dateTimeIST: string) {
		if (!dateTimeIST) {
			return "Invalid format";
		  }
		
		  // Split the date and time components
		  const dateTimeComponents = dateTimeIST.split(' ');
		
		  if (dateTimeComponents.length !== 2) {
			return "Invalid format";
		  }
		
		  const [date, time] = dateTimeComponents;
		
		  // Split the date components
		  const dateComponents = date.split('/');
		
		  if (dateComponents.length !== 3) {
			return "Invalid format";
		  }
		
		  const [day, month, year] = dateComponents;
		
		  // Split the time components
		  const timeComponents = time.split(':');
		
		  if (timeComponents.length !== 2) {
			return "Invalid format";
		  }
		
		  const [hours, minutes] = timeComponents;
		
		  // Check if the date and time components are valid
		  if (day && month && year && hours && minutes) {
			// Create a new Date object with the IST date and time
			const dateIST = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes), 0);
		
			// Get the Unix timestamp by dividing the time value by 1000
			const unixTimestamp = Math.floor(dateIST.getTime() / 1000);
		
			return unixTimestamp.toString();
		  } else {
			return "Invalid format";
		  }
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>
					Discord Time Text generator | Tools by Yog Panjarale
				</title>

				<link rel="icon" href="/handyman_black_24dp.svg" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-4xl font-bold">
					<span className="text-blue-600">Discord</span> Time Text
					Generator
				</h1>
				<p>Note : Please provide the date and time in the format 'MM/DD/YYYY HH:MM'.</p>
				<div className="mb-4 mt-10">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username"
					>
						Input Text
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						placeholder="Input"
						onChange={(e) => setInput(e.target.value)}
						value={input}
					/>
				</div>

				<div className="mb-4 mt-2">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username"
					>
						Output
					</label>
					<code className="p-3 font-mono text-lg bg-gray-100 rounded-md break-all max-w-md">
						{makeText(input)}
					</code>
				</div>

				<button
					className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-1 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
					type="button"
					onClick={() =>
						navigator.clipboard.writeText(makeText(input))
					}
				>
					Copy to clipboard
				</button>

			</main>
			<footer className="flex items-center justify-center w-full h-24 border-t">
				<a
					className="flex items-center justify-center text-sm "
					href="https://yogpanjarale.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Made by{" "}
					<span className="p-1 font-semibold">Yog Panjarale</span>
				</a>
			</footer>
		</div>
	);
}

export default Creator;
