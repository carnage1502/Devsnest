import { useSelector } from "react-redux";

const WeatherCard = () => {
  const placeData = useSelector((state) => state.placeData);

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-3 col-12 col-md-6 weather">
          <div className="card">
            {placeData.location ? (
              <div>
                <img src={placeData.current.condition.icon} alt="" />
                <div className="temp">{placeData.current.temp_c}°C </div>
                <div className="desc">{placeData.current.condition.text}</div>
                <div className="place">{placeData.location.name}</div>
                <div className="container">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind Now</div>
                      <div className="data">
                        {placeData.current.wind_kph} KPH
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">{placeData.current.humidity} %</div>
                    </div>
                    <div className="col">
                      <div className="title">Precipitation</div>
                      <div className="data">
                        {placeData.current.precip_in} %
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h2>Place Not Found</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;