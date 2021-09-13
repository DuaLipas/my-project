// const {useEffect, useState} = require("react");

// function CryptoCurrency() {
//   useEffect(function () {
//     let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

//     let httpOptions = {method: "GET"};

//     let markup = <p>Loading...</p>;
//     function turnResponseIntoJSON(response) {
//       return response.json();
//     }

//     function handleData(data) {
//       //   console.log(data);
//       //   console.table(data.bpi);
//       //   console.log(data.bpi.USD.code);
//       //   console.log(data.bpi.EUR.code);
//       let currencyUSD = data.bpi.USD;
//       let currencyEUR = data.bpi.EUR;
//       let currencyGBP = data.bpi.GBP;
//       // let convMYR = parseFloat(currencyUSD.rate.replace(/,/g, "") * 4.1);
//       let convMYR = parseFloat(currencyUSD.rate.replace(/,/g, "") * 4.1);

//       let p = document.querySelector("p");
//       p.innerHTML = `
//       The current bitcoin value in ${currencyUSD.code} is rated at ${
//         currencyUSD.rate
//       } ${currencyUSD.symbol} .
//       <br>
//       The current bitcoin value in ${currencyEUR.code} is rated at ${
//         currencyEUR.rate
//       } ${currencyEUR.symbol} .
//       <br>
//       The current bitcoin value in ${currencyGBP.code} is rated at ${
//         currencyGBP.rate
//       } ${currencyGBP.symbol} .
//       <br>
//       Bitcoin value in Malaysian Ringgit from USD$ is RM ${convMYR.toFixed(2)}`;
//     }
//     fetch(url, httpOptions).then(turnResponseIntoJSON).then(handleData);

//     // console.log("This loaded");
//   }, []);
//   return (
//     <div>
//       <p>Loading...</p>
//     </div>
//   );
// }

// module.exports = CryptoCurrency;

// JACK's WORKING CODE BELOW
//
//
import React, {Component} from "react";
import {render} from "react-dom";
const {useEffect, useState} = require("react");

let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
let httpOptions = {method: "GET"};
function turnResponseIntoJSON(response) {
  return response.json();
}

function CryptoCoin() {
  let [data, setData] = useState(null);

  let markup = <p>Loading...</p>;
  if (data !== null) {
    let currencyUSD = data.bpi.USD;
    let currencyEUR = data.bpi.EUR;
    let currencyGBP = data.bpi.GBP;
    let myrConv = parseFloat(currencyUSD.rate);
    markup = (
      <div>
        <p>
          The current bitcoin value in {currencyUSD.code} is rated at{" "}
          {currencyUSD.rate} {currencyUSD.symbol}
        </p>
        <p>
          The current bitcoin value in {currencyEUR.code} is rated at{" "}
          {currencyEUR.rate} {currencyEUR.symbol}
        </p>
        <p>
          The current bitcoin value in {currencyGBP.code} is rated at{" "}
          {currencyGBP.rate} {currencyGBP.symbol}
        </p>
      </div>
    );
  }

  useEffect(function () {
    function handleData(data) {
      setData(data);
    }
    fetch(url, httpOptions).then(turnResponseIntoJSON).then(handleData);
  }, []);
  return <div>{markup}</div>;
}

module.exports = CryptoCoin;
