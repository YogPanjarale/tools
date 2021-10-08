import Head from "next/head";
import { useState } from "react";

function Creator() {
	const [input, setInput] = useState("");
	function makeSpoiler(a: string) {
		let result = "";
		for (let i = 0; i < a.length; i++) {
			result += `||${a[i]}||`;
		}
		return result;
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>
					Discord Spoiler Text generator | Tools by Yog Panjarale
				</title>
				<link rel="icon" href="/handyman_black_24dp.svg" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-4xl font-bold">
					<span className="text-blue-600">Discord</span> Spoiler Text
					Generator
				</h1>

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
						{makeSpoiler(input)}
					</code>
				</div>
				<button
					className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-1 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
					type="button"
					onClick={() =>
						navigator.clipboard.writeText(makeSpoiler(input))
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
