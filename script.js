// async function getData() {

//     // simulate getting data from a server 
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

async function getData() {
// fetch API example 
let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    // let data = await (await x).json()
    let data = await (await x).text()
     console.log(data)

    //  return 456
  
}


async function main() {
  console.log("Loading modules");
  console.log("Do something else");

  // for wait the asynic function we use await

  console.log("Load data");
  let data = await getData();

  console.log(data);

  console.log("process data");

  console.log("task 2");
}
main()

// data.then((v)=>{

//     console.log(data)

//     console.log("process data")

//     console.log("task 2")

// })
