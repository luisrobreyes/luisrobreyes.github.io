document.addEventListener("DOMContentLoaded", () => {
    // Your code that depends on the DOM being fully loaded goes here
    let choice1 = document.querySelector("#choice1");
    let choice2 = document.querySelector("#choice2");

    let decision1 = document.querySelector("#decisionInput1");
    let decision2 = document.querySelector("#decisionInput2");

    let firstButton = document.querySelector("#firstButton");

    let baguaSelect1 = document.querySelector("#baguaSelect1");
    let baguaSelect2 = document.querySelector("#baguaSelect2");

    let symbolImage1 = document.querySelector("#symbolImage1");
    let symbolImage2 = document.querySelector("#symbolImage2");

    let vizButton1 = document.querySelector("#vizButton1"); // 2nd Vizualize Panel Button
    let vizButton2 = document.querySelector("#vizButton2"); // 2nd Vizualize Panel Button
    
    let firstViz = document.querySelector("#firstViz"); // 1st Vizualize Panel
    let secondViz = document.querySelector("#secondViz"); // 2nd Vizualize Panel
   
    let prosPanel1 = document.querySelector("#prosPanel1");
    let prosPanel2 = document.querySelector("#prosPanel2");

    let prosInput1 = document.querySelector("#prosInput1");
    let prosInput2 = document.querySelector("#prosInput2");

    let prosButton1 = document.querySelector("#prosButton1");
    let prosButton2 = document.querySelector("#prosButton2");

    let or = document.querySelector(".or");


    let range1 = document.querySelector("#range1");
    let range2 = document.querySelector("#range2");

    let middleImage = document.querySelector(".middleImageContainer");



    let trigrams = ['&#9776;','&#9780;','&#9781;', '&#9782;','&#9783;','&#9779;','&#9778;','&#9777;'];
    let symbolValues = ['heaven','wind','water','mountain','earth','thunder','fire','river'];
    let prosArr1 = [];
    let prosArr2 = [];


    // - Projecting Choice Names START
    decision1.addEventListener("input", () => {
      const choiceLeftElement = document.querySelector(".choiceLeft");
      if (decision1.value === "") {
        choice1.innerText = "Do this ";
        choiceLeftElement.classList.remove("choiceProj");
      } else {
        choice1.innerText = decision1.value;
        choice1.style.color = '#a2d6f9';
        choiceLeftElement.classList.add("choiceProj");
      };
    });
    decision2.addEventListener("input", () => {
      const choiceRightElement = document.querySelector(".choiceRight");
      if (decision2.value === "") {
        choice2.innerText = " Do that";
        choiceRightElement.classList.remove("choiceProj");
      } else {
        choice2.innerText = decision2.value;
        choice2.style.color = 'aliceblue';
        choiceRightElement.classList.add("choiceProj");
      };
    });
// - Projecting Choice Names END

    function enableAllOptions(select) {
      const options = select.querySelectorAll("option");
      options.forEach(option => {
          option.disabled = false;
      });
    }
    function decideWinner(array1, array2) {
      let sum1 = 0;

      array1.forEach(item => {
        let valNum = parseInt(item.range);
        if (!isNaN(valNum)) {
          sum1 += valNum;
        }
      });
      console.log(`sum for array 1 ${sum1}`);
      let sum2 = 0;
      array2.forEach((item) => {
        let valNum = parseInt(item.range);
        if (!isNaN(valNum)) {
          sum2 += valNum;
        }
      });
      console.log(`sum for array 2 ${sum2}`);
      if (sum1 > sum2) {
        console.log("array1 wins");
        or.innerText = ">";
        or.classList.add('finalText');
        symbolImage2.classList.add("loser");
        if (symbolImage2.classList.contains("winner")) {
          symbolImage2.classList.remove("winner");
        }
        symbolImage1.classList.add("winner");
        if (symbolImage1.classList.contains("loser")) {
          symbolImage1.classList.remove("loser");
        }
      } else if (sum2 > sum1) {
        console.log("array2 wins")
        or.innerText = "<";
        or.classList.add('finalText');
        symbolImage1.classList.add("loser");
        if (symbolImage1.classList.contains("winner")) {
          symbolImage1.classList.remove("winner");
        }
        symbolImage2.classList.add("winner");
        if (symbolImage2.classList.contains("loser")) {
          symbolImage2.classList.remove("loser");
        }
      } else if (sum1 == sum2) {
        console.log("it's a tie");
        or.classList.add('finalText');
        or.innerText = "Tie!";
        symbolImage1.classList.add("winner");
        if (symbolImage1.classList.contains("loser")) {
          symbolImage1.classList.remove("loser");
        }
        symbolImage2.classList.add("winner");
        if (symbolImage2.classList.contains("loser")) {
          symbolImage2.classList.remove("loser");
        }
      }
    }

// - Projecting Choice SYMBOL START
    baguaSelect1.addEventListener("change", (e) => {
      e.preventDefault();
      if (baguaSelect1.value === 'undefined'){
        symbolImage1.innerHTML = '&#9868;' //greater yang HTML code
      } else {
        let value = baguaSelect1.value; //generating symbol start
        let symbolIndex = symbolValues.indexOf(value);
        // --DISABLE OTHER SELECT OPTION--start
        if (symbolIndex !== -1) {
          let disabledOption2 = document.querySelector(`#secondSelect${symbolIndex + 2}`)
          enableAllOptions(baguaSelect2);
          disabledOption2.disabled = true;
          // --DISABLE OTHER SELECT OPTION--end
        };
        let chosenSymbol = trigrams[symbolIndex];
        symbolImage1.innerHTML = chosenSymbol; //end
    }});
    baguaSelect2.addEventListener("change", (e) => {
      e.preventDefault();
      if (baguaSelect2.value === -1){
        symbolImage2.innerHTML = '&#9871;' //greater yin HTML code
      } else {
      let value = baguaSelect2.value; //generating symbol start
      let symbolIndex = symbolValues.indexOf(value);
      // --DISABLE OTHER SELECT OPTION--start
      if (symbolIndex !== 'undefined') {
        let disabledOption1 = document.querySelector(`#firstSelect${symbolIndex + 2}`)
        enableAllOptions(baguaSelect1);
        disabledOption1.disabled = true;
        // --DISABLE OTHER SELECT OPTION--end
      };
      let chosenSymbol = trigrams[symbolIndex];
      symbolImage2.innerHTML = chosenSymbol; //end
      }
    });
    firstButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (firstViz.style.display = "none") {
        firstViz.style.display = "flex"; //this works well and 'firstViz' appears
      }
      if (secondViz.style.display = "none") {
        secondViz.style.display = "flex"; //this only works if 'firstButton' has been clicked
      }
    });
    //adding second range event listener, for number input
    range1.addEventListener("keydown", (e) => {
      const inputValue1 = parseInt(e.key, 10);
      if (!isNaN(inputValue1) && inputValue1 >= 1 && inputValue1 <= 9) {
        range1.value = inputValue1;
        rangeProj1.innerText = inputValue1;
      }
    });

    range1.addEventListener("change", (e) => {
      rangeProj1.innerHTML = range1.value;
    });
    //number input range event listener END ---

    range2.addEventListener("change", (e) => {
      e.preventDefault();
      rangeProj2.innerHTML = range2.value;
    });

    range2.addEventListener("keydown", (e) => {
      const inputValue2 = parseInt(e.key, 10);
      if (!isNaN(inputValue2) && inputValue2 >= 1 && inputValue2 <= 9) {
        range2.value = inputValue2;
        rangeProj2.innerText = inputValue2;
      }
    });

    vizButton1.addEventListener("click", (e) => {
      e.preventDefault();
      firstViz.style.display = "none";
      prosPanel1.style.display = "flex";
      prosInput1.focus();
    });
    vizButton2.addEventListener("click", (e) => {
      e.preventDefault();
      secondViz.style.display = "none";
      prosPanel2.style.display = "flex";
      prosInput2.focus();
    });
    prosButton1.addEventListener("click", (e) => {
      e.preventDefault();
      //scraping input values start
      const prosValue = prosPanel1.querySelector("#prosInput1").value;
      const rangeValue = prosPanel1.querySelector("#range1").value;

      prosArr1.push({ pro: prosValue, range: rangeValue });
      console.log("pros list one:")
      console.log(prosArr1);

      let lastIndex = prosArr1.length - 1;

      const parentDiv = document.querySelector("#prosCol1");

      //create h3 element w/ appropriate class and new pro value
      const newH3 = document.createElement('h3');
      newH3.classList.add('prosLi');
      newH3.textContent = (prosArr1[lastIndex].pro) + ' ';

      //create new b element w/ class and new range value
      const newB = document.createElement('b');
      newB.classList.add('valueNum');
      newB.textContent = prosArr1[lastIndex].range;

      //append the h3 with b inside of parent div
      newH3.append(newB);
      parentDiv.append(newH3);

      if (prosArr1.length >= 1 && prosArr2.length >= 1) {
        if (!middleImage.classList.contains("readySelect")) {
          middleImage.classList.add("readySelect");
        }
      }

      //reset input fields -start
      prosInput1.value = '';
      range1.value = 1;
      document.querySelector("#rangeProj1").innerText = '1';
      prosInput1.focus(); // we want to retain focus after the reset though...
    });
    prosButton2.addEventListener("click", (e) => {
      e.preventDefault();
      //scraping input values start
      const prosValue = prosPanel2.querySelector("#prosInput2").value;
      const rangeValue = prosPanel2.querySelector("#range2").value;

      prosArr2.push({ pro: prosValue, range: rangeValue });
      let lastIndex = prosArr2.length - 1;

      const parentDiv = document.querySelector("#prosCol2");

      //create h3 element w/ appropriate class and new pro value
      const newH3 = document.createElement('h3');
      newH3.classList.add('prosLi');
      newH3.textContent = (prosArr2[lastIndex].pro) + ' ';

      //create new b element w/ class and new range value
      const newB = document.createElement('b');
      newB.classList.add('valueNum');
      newB.textContent = prosArr2[lastIndex].range;

      //append the h3 with b inside of parent div
      newH3.append(newB);
      parentDiv.append(newH3);

      if (prosArr1.length >= 1 && prosArr2.length >= 1) {
        if (!middleImage.classList.contains("readySelect")) {
          middleImage.classList.add("readySelect");
        }
      }

      //reset input fields -start
      prosInput2.value = '';
      range2.value = 1;
      document.querySelector("#rangeProj2").innerText = '1';
      prosInput2.focus();
    });
    middleImage.addEventListener("click", (e) => {
      e.preventDefault();
      if (prosArr1.length >= 1 && prosArr2.length >= 1) {
        decideWinner(prosArr1, prosArr2);
      }
    });
});
