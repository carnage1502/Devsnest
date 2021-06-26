let scr = 0;
let i = 0;

class Questions {
  constructor(ques, opt1, opt2, opt3, opt4, corrAns) {
    this.ques = ques;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
    this.corrAns = corrAns;
  }

  showQues() {
    document.getElementById("question").innerHTML = this.ques;
    document.getElementById("opt1-statement").innerHTML = this.opt1;
    document.getElementById("opt2-statement").innerHTML = this.opt2;
    document.getElementById("opt3-statement").innerHTML = this.opt3;
    document.getElementById("opt4-statement").innerHTML = this.opt4;
  }

  showCorrAns() {
    return `${this.corrAns}`;
  }
}

let q1 = new Questions(
  "1. Eivor is the protagonist of ?",
  "Assassin's Creed 4",
  "Assassin's Creed Origins",
  "Assassin's Creed 2",
  "Assassin's Creed Valhalla",
  "opt4"
);

let q2 = new Questions(
  "2. Which letter comes first?",
  "B",
  "A",
  "Z",
  "M",
  "opt2"
);

let q3 = new Questions(
  "3. What is the national game of India ?",
  "Hockey",
  "Cricket",
  "Badminton",
  "Football",
  "opt1"
);

let q4 = new Questions(
  "4. 2 + 2 = ?",
  "1",
  "3",
  "5",
  "4",
  "opt4"
);

let q5 = new Questions(
  "5. Who is the captain of Indian cricket team? ",
  "Shivam Sharma",
  "Virat Kohli",
  "Rohit Sharma",
  "Hardik Pandya",
  "opt2"
);

let arrQ = [q1, q2, q3, q4, q5];

arrQ[i].showQues();

document.querySelectorAll("#opt1, #opt2, #opt3, #opt4").forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.id === arrQ[i].showCorrAns()) {
      scr++;
      i++;
      document.querySelector(".cAns").style.display = "block";
      setTimeout(() => {
        document.querySelector(".cAns").style.display = "none";
      }, 500);
      document.getElementById("score").innerHTML = scr;
      if (!arrQ[i]) {
        setTimeout(() => {
          document.querySelector(".end").style.display = "block";
        }, 600);
      } else {
        arrQ[i].showQues();
      }
    } else {
      console.log(false);
      document.querySelector(".wAns").style.display = "block";
      setTimeout(() => {
        document.querySelector(".wAns").style.display = "none";
      }, 500);
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});