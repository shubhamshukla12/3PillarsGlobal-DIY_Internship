let body = document.querySelector("body")
let div = document.querySelector("div")
        // function for identifying prime numbers.
            function isPrime(number) {
            let count = 0
            let j = 1
            while (j <= number) {
                if (number % j == 0) {
                    count++
                }
                j++
            }
            if (count == 2) {
                return true;
            }
            else {
                return false;
            }
        }
   //even numbers     
   for (let i = 0; i <= 104; i++) {
     if (i % 2 === 0 && isPrime(i)) {
          let block = document.createElement("div")
          block.textContent = i
          block.style.backgroundColor = "red"
          block.style.width = "120px";
          block.style.height = "50px"
          block.style.margin = "4px";
          block.style.color = "white";
          block.style.fontSize = '32px';
          block.style.fontWeight = 'bolder';
          block.style.borderRadius = '12px';
          div.appendChild(block)
    }
    else if(i%2 == 0 && !isPrime(i)){
          let block = document.createElement("div")
          block.textContent = i;
          block.style.backgroundColor = "#91ef6e"
          block.style.width = "120px";
          block.style.height = "50px"
          block.style.margin = "4px";
          block.style.color = "white";
          block.style.fontSize = '32px';
          block.style.fontWeight = 'bolder';
          block.style.borderRadius = '12px';
          div.appendChild(block)
    }
    // Odd numbers  
    else if (i % 2 != 0 && isPrime(i)) {
        let block = document.createElement("div")
        block.textContent = i;
        block.style.backgroundColor = "red"
        block.style.width = "120px";
        block.style.height = "50px"
        block.style.margin = "4px";
        block.style.color = "white";
        block.style.fontSize = '32px';
        block.style.fontWeight = 'bolder';
        block.style.borderRadius = '12px';
        div.appendChild(block)
    }
    else if(i%2 != 0 && !isPrime(i)){
        let block = document.createElement("div")
        block.textContent = i;
        block.style.backgroundColor = "yellow"
        block.style.width = "120px";
        block.style.height = "50px"
        block.style.margin = "4px";
        block.style.color = "white";
        block.style.fontSize = '32px';
        block.style.fontWeight = 'bolder';
        block.style.borderRadius = '12px';
        div.appendChild(block)
    }
    // cases for prime numbers only
    else if(isPrime(i)) {
        let block = document.createElement("div")
        block.textContent = i
        block.style.backgroundColor = "red"
        block.style.width = "120px";
        block.style.height = "50px"
        block.style.margin = "4px";
        block.style.color = "white";
        block.style.fontSize = '32px';
        block.style.fontWeight = 'bolder';
        block.style.borderRadius = '12px';
        div.appendChild(block)
    }
}