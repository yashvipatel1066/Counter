

import { useState } from "react";

export const Usestate = () => {

    const [count , setCount] = useState(0);
    const[step , setStep] = useState(1);

    const handleIncrement = () => {
        setCount(count+Number(step));
    }

    const handleDiscrement = () => {
        setCount(count-Number(step));
    }

    const handleReset = () => {
        setCount(0);
    }

    const handleOnChange = (e) => {
        setStep(e.target.value);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow text-center">
                <h1 className="text-2xl font-bold mb-4">useState Challenge</h1>

                <p className="text-left mb-4">Count: {count}</p>

                <div className="flex items-center justify-start mb-4">
                    <p className="mr-2">Step:</p>
                    <input type="number" value={step} onChange={handleOnChange} className="border border-gray-300 rounded px-2 py-1" />
                </div>

                

                <div className="flex gap-4 justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={handleIncrement}>Increment</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleDiscrement}>Decrement</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};
