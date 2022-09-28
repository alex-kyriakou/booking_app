import "./header.scss";
import { useState } from "react";
// Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faSprayCanSparkles,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
// Calendar
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Header({ type }) {
  const [openCalendar, setCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faSprayCanSparkles} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            {" "}
            <h1 className="headerTitle">Find your next stay</h1>
            <h3 className="headerSubTitle">
              Search low prices on hotels, homes and much more...
            </h3>
            <div className="headerSearchBar">
              <div className="headerSearchBarItem">
                <FontAwesomeIcon icon={faBed} className="headerSearchBarIcon" />
                <input
                  type="text"
                  className="headerSearchBarInput"
                  placeholder="Where are you going?"
                />
              </div>
              <div className="headerSearchBarItem">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerSearchBarIcon"
                />
                <span
                  onClick={() => setCalendar(!openCalendar)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="calendar"
                  />
                )}
              </div>
              <div className="headerSearchBarItem">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headerSearchBarIcon"
                />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult ${options.children} children ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionItemText">adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionItemCounterBtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionItemNumber">{`${options.adult}`}</span>
                        <button
                          className="optionItemCounterBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionItemText">children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionItemCounterBtn"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionItemNumber">{`${options.children}`}</span>
                        <button
                          className="optionItemCounterBtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionItemText">room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionItemCounterBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionItemNumber">{`${options.room}`}</span>
                        <button
                          className="optionItemCounterBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchBarItem">
                <button className="headerSearchBtn">Search</button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
