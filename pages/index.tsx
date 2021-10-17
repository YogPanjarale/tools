import Head from "next/head";
import Footer from "@components/Footer";
import data from "@data";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>{data.title}</title>
				<link rel="icon" href="/handyman_black_24dp.svg" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">
					Welcome to{" "}
					<a className="text-blue-600" href="#">
						Tools
					</a>
				</h1>

				<p className="mt-3 text-2xl">
					Get started by clicking{" "}
					<code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
						any of the Tools
					</code>
				</p>

				<div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
					{
						data.tools.map((tool,i) => (<a
							href={tool.href}
							key={i}
							className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
						>
							<h3 className="text-2xl font-bold">
								{tool.title} 
							</h3>
							<p className="mt-4 text-xl">
								{tool.description}
							</p>
						</a>))
					}
					
				</div>
			</main>
			<Footer></Footer>
		</div>
	);
}
