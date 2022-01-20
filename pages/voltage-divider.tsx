import Head from "next/head";
import { useState } from "react";
const n =(v:string)=>{
    if (v.trim()==""){return null}
    return Number(v)
}
function Input({label,value,onChange}) {
	return (
        <div className="flex flex-row justify-center items-center space-x-2">
            <label
						className="block text-gray-700 text-xl font-bold mb-2"
						htmlFor="username"
					>
						{label}
					</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Input"
                        onChange={(e) => onChange(n(e.target.value))}
                        value={value}
                    />
        </div>
	);
}

function calculateV2(v1:number,r1:number,r2:number){
    return (v1/r1+r2)*r2
}
function calculateV1(v2:number,r1:number,r2:number){
	return 
}
function calculateRatio(v1:number,v2:number){
	const current = 1;

}
function Creator() {
	const [v1, setV1] = useState<number>();
	const [v2, setV2] = useState<number>();
	const [r1, setR1] = useState<number>();
	const [r2, setR2] = useState<number>();
    const [error,setError] = useState("")
    const validate = ()=>{
        const isFUll = [v1,v2,r1,r2].filter((v)=>!!v ).length>=3
        isFUll?setError(""):setError("3 valid values needed")
    }
    const calculate = ()=>{
        validate()
		if(r2>r1){
			let t = r2
			setR2(r1)
			setR1(t)
		}
        if (v1&&r1&&r2){
            setV2(calculateV2(v1,r1,r2))
        }
        if (v1&&v2){
			calculateRatio(v1,v2)
		}
    }

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>
					Voltage Drop Calculator | Tools by Yog
					Panjarale
				</title>
				<link rel="icon" href="/handyman_black_24dp.svg" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-4xl font-bold">
				 Voltage Drop Calculator
				</h1>

				<div className="py-4 flex flex-col space-y-2">
					<Input label="V1" value={v1} onChange={setV1}/>
					<Input label="V2" value={v2} onChange={setV2}/>
					<Input label="R1" value={r1} onChange={setR1}/>
					<Input label="R2" value={r2} onChange={setR2}/>
					
				</div>
                {error&&<span className="text-red-600 font-light">{error}</span>}
				<div className="mb-4 mt-2">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username"
					>
						Output
					</label>
					<code className="p-3 font-mono text-lg bg-gray-100 rounded-md break-all max-w-md">
						V1:{v1},V2:{v2},R1:{r1},R2:{r2},Current: {v1/(r1+r2)}
					</code>
				</div>
				<button
					className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-1 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
					type="button"
                    onClick={calculate}
				>
					Calculate
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
