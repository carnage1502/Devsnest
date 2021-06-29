const getInfo = async () => {
    let city = document.getElementById("city").value;
  
    if (city === "") {
      alert("Please write the name before search");
      return;
    } else {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8b51f13956b494cfd3b8cf67119489e5`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        document.getElementById("temp").innerHTML = Math.round(
          arrData[0].main.temp
        );
      } catch (error) {
        alert("Please enter the city name properly");
        location.reload();
      }
    }
  };
  
  document.getElementById("searchBtn").addEventListener("click", () => {
    getInfo();
  });