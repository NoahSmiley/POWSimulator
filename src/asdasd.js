import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// import CryptoJS from 'crypto-js'
import sha256 from "crypto-js/sha256";
// import Buffer from "crypto-js/buffer";
// import enc from "crypto-js/enc";
// import Hex from "crypto-js/hex";
import BigBoi from"./components/BigBoi";

const App = () => {
  const [hash, setHash] = useState(
    sha256("prev_block_hash--transaction_list--proof_of_work")
  );

// //   function timeout(delay) {
// //     return new Promise( res => setTimeout(res, delay) );
// // }
//   const [mine, setMine] = useState(false);
//   const mineButtonHandler=()=>{
//     setMine((prevVal) =>{return(!prevVal)})
//   }
//   const [binary, setBinary] = useState("");
//   let counter = 0;
//   // const bigBoi = (val) => {
//   //   setBinary("");
//   //   for (let x in val.words) {
//   //     if (val.words[x] >= 0) {
//   //       setBinary(
//   //         (prev) => (prev += val.words[x].toString(2).padStart(32, "0"))
//   //       );
//   //     } else {
//   //       setBinary(
//   //         (prev) => (prev += (~val.words[x]).toString(2).padStart(32, "0"))
//   //       );
//   //     }
//   //     setBinary((prev) => (prev += "\n"));
//   //   }
//   // }
//one second
  // while (mine) {
  //   // bigBoi(hash);
  //   setHash(sha256(`prev_block_hash---transaction_list--- + ${counter}`));
  //   // await timeout(1000)
  //   counter+=1
  // }

  return (
    <div className="App">

      <BigBoi val={hash}/>
      <button
     
      >
        Mine Time
      </button>
    </div>
  );
}

export default App;
