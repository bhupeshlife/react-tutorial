import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  // useRef is a React Hook that lets you create a mutable object that persists for the full lifetime of the component.
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    // useCallback is a React Hook that lets you cache a function definition between re-renders.
    // PasswordGenerator = useCallback(function, [dependencies])
    let password = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) {
      string += "0123456789";
    }
    if (characters) {
      string += "!@#$%^&*()_+[]{}|;,<>?";
    }
    for (let i = 1; i <= length; i++) {
      let randomNumber = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(randomNumber);
    }
    setPassword(password);
  }, [length, numbers, characters, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); // For mobile devices
    window.navigator.clipboard.writeText(password);
  }, [password]); // Function to copy the password to clipboard

  useEffect(() => {
    // useEffect is a React Hook that lets you synchronize a component with an external system.
    // useEffect(setup, [dependencies])
    PasswordGenerator();
  }, [length, numbers, characters, PasswordGenerator]);

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-blue-200">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden bg-white text-black">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="cursor-pointer outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 transition-colors duration-200"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 py-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numbersInput"
              className="cursor-pointer"
              onChange={(e) => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numbersInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characters}
              className="cursor-pointer"
              id="charactersInput"
              onChange={(e) => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="charactersInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
