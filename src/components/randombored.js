// const {useState, useEffect} = require("react");

// let url = "https://www.boredapi.com/api/activity";
// let httpOptions = {method: "GET"};
// function turnResponseIntoJSON(response) {
//   return response.json();
// }

// function RandomBored() {
//   let [data2, setData2] = useState("");

//   let markup = <p>Loading some random stuff...</p>;
//   if (data2 !== null) {
//     console.table(data2);
//     console.log(data2);
//     markup = (
//       <div>
//         <p>asdsadasdasdsad</p>
//       </div>
//     );
//   }
//   useEffect(function () {
//     function handleData2(data2) {
//       setData2(data2);
//     }
//     fetch(url, httpOptions).then(turnResponseIntoJSON).then(handleData2);
//   }, []);
//   return <div>{markup}</div>;
// }

// module.exports = RandomBored;

//
//
// const {useEffect, useState} = require("react");

// let url = "https://www.boredapi.com/api/activity";
// let httpOptions = {method: "GET"};

// function turnResponseIntoJSON(response) {
//   return response.json();
// }

// function handleItem(item) {
//   //   console.log(item);
//   //   console.table(item);
//   let random = item;
//   let p = document.querySelector("p");
//   p.innerHTML = `Activity: ${random.activity} <br> Type: ${random.type} <br> Price: USD$ ${random.price}`;
// }

// function RandomBored() {
//   return (
//     <div>
//       <p>Empty...</p>
//     </div>
//   );
// }

// fetch(url, httpOptions).then(turnResponseIntoJSON).then(handleItem);
// module.exports = RandomBored;
