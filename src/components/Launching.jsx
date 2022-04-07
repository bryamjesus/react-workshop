import "../css/Lauching.css";
import { HiCalendar } from "react-icons/hi";

export const Lauching = (launch) => {
  return (
    <div className="launching">
      {/* <div className="launching__header">
            <h2 className="launching__title">Mission {launch.mission_name} ({launch.launch_year})</h2>
            <div className={`launching__target ${launch.launch_success ? "green" : "red"}`}>
                {launch.launch_success ? "Success" : "Failure"}
            </div>
        </div> */}
      <div className="launching__body">
        <h2 className="launching__title">
          Mission {launch.mission_name} ({launch.launch_year})
        </h2>

        <div
          className={`launching__target ${
            launch.launch_success ? "green" : "red"
          }`}
        >
          {launch.launch_success ? "Success" : "Failure"}
        </div>

        <div className="launching__fecha">
          <HiCalendar />
          {launch.launch_date_local.split("T")[0]}
        </div>

        {/* <div className="launching__targets">
          <div
            className={`launching__target ${
              launch.launch_success ? "green" : "red"
            }`}
          >
            {launch.launch_success ? "Success" : "Failure"}
          </div>
        </div> */}
      </div>
    </div>
  );
};
