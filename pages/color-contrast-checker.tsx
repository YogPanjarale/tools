import { MetaTags } from "@components/metatags";
import root from "@data";
import Head from "next/head";
import { useState } from "react";
const data=root.tools[1]
function hexToRgb(hex: string) {
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(
		shorthandRegex,
		function (m: any, r: any, g: any, b: any) {
			return r + r + g + g + b + b;
		}
	);

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
}
function luminance(r: number, g: number, b: number) {
	var a = [r, g, b].map(function (v) {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function ColorInput({ value, setValue, title }) {
	return (
		<div className="mb-4 mt-10">
			<label
				className="block text-gray-700 text-sm font-bold mb-2"
				htmlFor="username"
			>
				{title}
			</label>
			<input
				className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 bg-[${value}]`}
				type="color" // placeholder="Input"
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
            <label
				className="block text-gray-800 text-sm font-bold mb-2"
				htmlFor="username"
			>
				{value}
			</label>
		</div>
	);
}

function Checker() {
	const [c1, setC1] = useState("#ffffff");
	const [c2, setC2] = useState("#ffffff");
	const [result, setResult] = useState<number | string>("");
	const calculate = () => {
		const color1rgb = hexToRgb(c1);
		const color2rgb = hexToRgb(c2);
		// calculate the relative luminance
		const color1luminance = luminance(
			color1rgb.r,
			color1rgb.g,
			color1rgb.b
		);
		const color2luminance = luminance(
			color2rgb.r,
			color2rgb.g,
			color2rgb.b
		);
		// calculate the color contrast ratio
		const ratio =
			color1luminance > color2luminance
				? (color2luminance + 0.05) / (color1luminance + 0.05)
				: (color1luminance + 0.05) / (color2luminance + 0.05);
		// set the result
		setResult(ratio);
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Color Contrast checker | Tools by Yog Panjarale</title>
				<link rel="icon" href="https://pic.onlinewebfonts.com/svg/img_411294.png" />
                <MetaTags title={data.title} description={data.description} image_url="https://pic.onlinewebfonts.com/svg/img_411294.png" url={data.href}/>
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-4xl font-bold">
					<span className="text-blue-600">Color</span> Contrast
					checker
				</h1>
				<div className="inline-flex space-x-2">
					<ColorInput
						title="Color 1"
						value={c1}
						setValue={setC1}
					></ColorInput>
					<ColorInput
						title="Color 2"
						value={c2}
						setValue={setC2}
					></ColorInput>
				</div>
				<div className="mb-4 mt-2">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username"
					>
						Output
					</label>
					<code className="p-3 font-mono text-lg bg-gray-100 rounded-md break-all max-w-md">{result}</code>
				</div>
				<button
					className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-1 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
					type="button"
					onClick={() =>
						// navigator.clipboard.writeText(result.toString())
                        calculate()
					}
				>
Calculate			</button>
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

export default Checker;
