document.getElementById("submitBtn").addEventListener("click", runCalc);

// const runCalc = (e) => {
//     e.preventDefault
//     let dataInput = document.getElementById('input').innerHTML
//     console.log(dataInput);
// }

// function getInput (e){
//     e.preventDefault();
//     let dataInput = document.getElementById('input').value;
//     console.log(dataInput);
//     return dataInput;
// }

function runCalc(e) {
  e.preventDefault();

  let dataInput = document.getElementById("input").value;

  // Do calculations
  // const calculationExample = 'kwehrkwer'

  let solution = addAll(dataInput);
  // console.log(solution);

  document.getElementById("output").textContent = solution;
}
// let dataOutput = reverseString(dataInput);

//     document.getElementById('output').innerHTML = dataOutput
