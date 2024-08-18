import React, { useState } from "react";

const App =()=>{

  const [color, setColor] = useState("purple");
  
  return(
    <div className="h-screen w-full" style={{
      backgroundColor: color
    }}>
      <div className="container m-auto flex justify-between pt-8">
      <button className="bg-white w-[5rem] rounded-lg text-black" onClick={() => setColor("white")}>White</button>
      <button className="bg-black w-[5rem] rounded-lg text-white" onClick={() => setColor("black")}>Black</button>
      <button className="bg-blue-700 w-[5rem] rounded-lg text-white" onClick={() => setColor("blue")}>Blue</button>
      <button className="bg-yellow-500 w-[5rem] rounded-lg text-white" onClick={() => setColor("yellow")}>Yellow</button>
      <button className="bg-red-600 w-[5rem] rounded-lg text-white" onClick={() => setColor("red")}>Red</button>
      <button className="bg-green-600 w-[5rem] rounded-lg text-white" onClick={() => setColor("green")}>Green</button>
      <button className="bg-pink-600 w-[5rem] rounded-lg text-white" onClick={() => setColor("pink")}>Pink</button>
      <button className="bg-lime-600 w-[5rem] rounded-lg text-white" onClick={() => setColor("lime")}>Lime</button>
      </div>
    </div>
  );
}

export default App;