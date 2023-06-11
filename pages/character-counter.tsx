import Head from "next/head";
import { useState } from "react";

function Counter() {
	const [input, setInput] = useState("");

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Character Counter | Tools by Yog Panjarale</title>
				<link rel="icon" href="/handyman_black_24dp.svg" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center">
				<h1 className="text-4xl font-bold">
					<span className="text-blue-600">Character</span> Counter
				</h1>

				<div className="mb-4 mt-10 w-2/3">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username"
					>
						Input Text
					</label>
					<textarea
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Input"
						onChange={(e) => setInput(e.target.value)}
						value={input}
					/>
				</div>

				<div className="mb-4 mt-2">
					<label
						className="block text-blue-500 text-xs font-bold mb-2"
						htmlFor="username"
					>
						{input.length} Characters
					</label>
				</div>
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

export default Counter;
