import "./list.scss";
import Header from "../../components/navbar/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchResultsItem from "../../components/searchResultsItem/SearchResultsItem";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listItem">
              <label>Destination:</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Check-in - Check-out date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="listItemOptions">
                <div className="listOptionsItem">
                  <span className="listOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="text" className="listOptionsInput" />
                </div>
                <div className="listOptionsItem">
                  <span className="listOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="text" className="listOptionsInput" />
                </div>
                <div className="listOptionsItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    className="listOptionsInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="listOptionsItem">
                  <span className="listOptionText">Children</span>
                  <input
                    type="number"
                    className="listOptionsInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="listOptionsItem">
                  <span className="listOptionText">Rooms</span>
                  <input
                    type="number"
                    className="listOptionsInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
              <button>Search</button>
            </div>
          </div>
          <div className="listResults">
            <SearchResultsItem />
            <SearchResultsItem />
            <SearchResultsItem />
            <SearchResultsItem />
            <SearchResultsItem />
            <SearchResultsItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
