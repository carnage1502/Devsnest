// Ques 1

console.log(
    "1. Create 2 object and try to use call, apply and bind on them\n\n"
  );
  
  const name1 = {
    personName: "Mr. X",
    getName: function (a) {
      console.log(this);
      console.log(a);
    },
  };
  
  const name2 = {
    personName: "Mr. Y",
  };
  
  name1.getName.call(name2, 5);
  name1.getName.apply(name1, [7]);
  const bindd = name1.getName.bind(name2, 9);
  bindd();
  
  // Ques 3 PROJECT
  
  let bookedSeats = 0,
    remainingSeats = 36;
  
  document
    .querySelectorAll(
      "#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b10, #b11, #b12, #b13, #b14, #b15, #b16, #b17, #b18, #b19, #b20, #b21, #b22, #b23, #b24, #b25, #b26, #b27, #b28, #b29, #b30, #b31, #b32, #b33, #b34, #b35, #b36"
    )
    .forEach((elem) => {
      elem.addEventListener("click", () => {
        if (elem.classList.contains("boxClicked")) {
          elem.classList.remove("boxClicked");
          bookedSeats--;
          remainingSeats++;
        } else {
          elem.classList.add("boxClicked");
          bookedSeats++;
          remainingSeats--;
        }
        document.querySelector(".bookedSeat").innerHTML = bookedSeats;
        document.querySelector(".remainingSeat").innerHTML = remainingSeats;
      });
    });