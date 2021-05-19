//Function named "convertFahrToCelsius"  (1)

//Conditions to parse
function convertFahrToCelsius(value){
    if(typeof value === "boolean"){
      console.log(`[${value}] is not a valid number but a/an ${typeof(value)}.`)
      return `[${value}] is not a valid number but a/an ${typeof(value)}.`;
    }
    else if (Number(value)){
      let output = calculate(value);
      return output;  
    }
    else if(typeof value === "string"){
      let number = parseInt(value);
      if(isNaN(number) || number === 0) {
        let thisValue = calculate(number);
        return thisValue;
      }
      else if(isNaN(number)){
        let result = JSON.stringify(value);
        console.log(`${result} is not a valid number but a/an ${typeof(result)}.`);
        return `${result} is not a valid number but a/an ${typeof(result)}.`
      }
    }
    else if(Array.isArray(value)){
      console.log(`[${value}] is not a valid number but a/an array`);
      return `[${value}] is not a valid number but a/an array`
    }
    else{
      let result = JSON.stringify(value);
      console.log(`${result} is not a valid number but a/an ${typeof(value)}.`);
      return `${result} is not a valid number but a/an ${typeof(value)}.`
    }
  
  
  };
   
  //Calculate function for conversion 
  function calculate(n){
    //1F = 1.8C + 32 
    let answer = ((n-32) / 1.8);
    let answerFixed = parseFloat(answer.toFixed(4));
  
    console.log(`${answerFixed}`)
    console.log(typeof(answerFixed));
    return `${answerFixed}`
  }
  
  convertFahrToCelsius(22);
  convertFahrToCelsius("62")
  convertFahrToCelsius([2, 4, 18, 96]);
  convertFahrToCelsius({meal: "cake"});
  convertFahrToCelsius("OMO!");
  convertFahrToCelsius("");
  
  
  
  //Function named "checkYuGiOh"  (2))
  
  function checkYuGiOh(n){
    if(!Number(n)){
      let value = JSON.stringify(n);
      return `invalid parameter: "${value}"`
    }
    else{
      let answer = [];
      for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
          answer.push("yu-gi-oh");
        } else if (i % 2 === 0 && i % 3 === 0) {
          answer.push("yu-gi");
        } else if (i % 2 === 0 && i % 5 === 0) {
          answer.push("yu-oh");
        } else if (i % 3 === 0 && i % 5 === 0) {
          answer.push("gi-oh");
        } else if (i % 2 ===0) {
          answer.push("yu");
        } else if (i % 3 === 0){
          answer.push("gi");
        } else if (i % 5 === 0){
          answer.push("oh");
        } else {answer.push(i)}
  
  
        }
    return answer;
    }
  
  
  };
  
  console.log(checkYuGiOh(130));
  console.log(checkYuGiOh("71"));
  console.log(checkYuGiOh("Alberto"));
  console.log(checkYuGiOh([2,4,4,12]));
  console.log(checkYuGiOh({name: "Bibi", country: "Spain"}));
  