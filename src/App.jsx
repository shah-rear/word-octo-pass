import { useCallback, useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passGenFn = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (CharAllowed) {
      str += "!@#$%^&*()_+}{[]-~`.,";
    }
    for (let index = 1; index <= length; index++) {
      let charindex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charindex);
    }
    setPassword(pass);
  }, [length, numberAllowed, CharAllowed, setPassword]);

  useEffect(()=> {
    passGenFn()
  }, [length, numberAllowed, CharAllowed, passGenFn])

  return (
    <div className="w-full mx-auto rounded-md shadow-md bg-teal-500 text-slate-50 pb-5">
      <h1 className="text-5xl font-bold py-10 mt-14 mb-18">
        Password Generator
      </h1>

      <div>
        <input
          type="text"
          name="generatedPw"
          id="generatedPw"
          value={password}
          className="w-80 mt-1 px-3 py-2 my-5 bg-white border border-slate-300 rounded-l-md text-lg shadow-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-black"
          readOnly
          placeholder="Generated"
        />
        <button className="px-4 py-2 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          Copy
        </button>
      </div>

      <div className="flex gap-10 items-center justify-center bg-teal-100 mx-20 p-5 rounded">
        <div className="flex items-center gap-4">
          <label
            htmlFor="pw-range"
            className="text-lg font-medium text-gray-900"
          >
            Length: {length}
          </label>
          <input
            type="range"
            min={8}
            // value={14}
            max={20}
            id="pw-range"
            onChange={(e) => setLength(e.target.value)}
            className="ml-2 appearance-none w-40 h-3 bg-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            id="number-checkbox"
            checked = {numberAllowed}
            className="w-4 h-4 border-2  border-blue-500 rounded-sm bg-white text-black"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label
            htmlFor="number-checkbox"
            className="text-lg font-medium text-gray-900"
          >
            {" "}
            Number
          </label>
        </div>

        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            id="char-checkbox"
            checked = {CharAllowed}
            className="w-4 h-4 border-2 border-blue-500 rounded-sm bg-white "
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label
            htmlFor="char-checkbox"
            className="text-lg font-medium text-gray-900"
          >
            {" "}
            Character
          </label>
        </div>
      </div>
      <div className="my-5">
        <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={passGenFn}
        >
          Re Genarate
        </button>
      </div>
    </div>
  );
}
