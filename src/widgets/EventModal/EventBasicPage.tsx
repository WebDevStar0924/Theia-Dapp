import ExternalInput from "components/ExternalInput";
import { Flex } from "components/Flex";
import { useState } from "react";
import { Dropdown } from "components/Dropdown";
import { TimeOptions, TimeZones } from "./data";
import { Button } from "components/Button";

import { Switch } from "components/Switch";
import Calendar from "react-calendar";
import CalendarSvg from "../../assets/svg/calendar.svg";
import ClockSvg from "../../assets/svg/clock.svg";
import WorldSvg from "../../assets/svg/world.svg";
import "react-calendar/dist/Calendar.css";
import { ModalBodyWrapper } from "./styles";
import { useRef, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
interface iProps { }

export default function EventDetailPage(props: iProps) {
  const [activeLocationItem, setActiveLocationItem] = useState("virtual");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [enddate, setEnddate] = useState("");
  const [defdate, setDefaultDate] = useState("");
  const [isShowCalendar, showCalendar] = useState(false);
  const [timezone, setTimezone] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const wrapperRef = useRef(null);
  const [isActiveButton, activeSaveButton] = useState(false);
  useOutsideAlerter(wrapperRef);

  function validationCheck() {
    let validation = true;
    if (title === "") validation = false;
    if (enddate === "") validation = false;
    if (starttime === "") validation = false;
    if (endtime === "") validation = false;
    if (timezone === "") validation = false;
    if (location === "") validation = false;
    activeSaveButton(validation);
  }

  useEffect(() => {
    validationCheck();
  });


  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          showCalendar(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function showDate(value) {
    var d = new Date(value),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    setDefaultDate(value);

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    value = [year, month, day].join("/");
    setEnddate(value);
    showCalendar(false);
  }
  return (
    <ModalBodyWrapper>
      <Flex
        flexDirection="column"
        style={{ marginTop: "42px", gap: "24px", marginRight: "28px" }}
      >
        <div className="pageTitle">Basic Info</div>

        <Flex flexDirection="column" style={{ gap: "8px" }}>
          <Flex justifyContent="space-between" alignItems="center">
            <p className="fieldTitle">Event Title</p>
            <p className="characterLimit">0/60</p>
          </Flex>
          <ExternalInput
            type="inactive"
            value={title}
            placeholder={"Add event title"}
            fontSize="14px"
            onUserInput={(val) => {
              setTitle(val.toUpperCase());
            }}
          />
        </Flex>

        <Flex flexDirection="column" style={{ gap: "8px" }}>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            style={{ gap: "16px" }}
          >
            <p className="fieldTitle">Location</p>
            <Switch
              items={[
                {
                  value: "virtual",
                  label: "VIRTUAL",
                },
                {
                  value: "irl",
                  label: "IRL",
                },
              ]}
              activeValue={activeLocationItem}

              onUpdateItem={(val) => {
                setActiveLocationItem(val)
                setLocation("");
              }

              }
            />
          </Flex>
          {activeLocationItem === "virtual" ? (
            <ExternalInput
              type="inactive"
              value={location}
              placeholder={"Add conference URL"}
              fontSize="14px"
              onUserInput={(val) => {
                setLocation(val);
              }}
            />
          ) : (
            <GooglePlacesAutocomplete apiKey="AIzaSyASu_m7VIHuekxu4UrZL4buQRi2ipE1DH8"
              selectProps={{
                location,
                onChange: setLocation,
              }}
            />
          )}
        </Flex>

        <Flex style={{ gap: "20px" }}>
          <div style={{ width: "23%" }}>
            <Flex flexDirection="column" style={{ position: "relative" }}>
              {isShowCalendar && (
                <div ref={wrapperRef}>
                  <Calendar
                    className="event-calendar"
                    defaultValue={defdate}
                    prev2Label="‹"
                    next2Label="›"
                    onChange={(value) => {
                      showDate(value);
                    }}
                  />
                </div>
              )}
              <p style={{ marginBottom: "8px" }} className="fieldTitle">
                Date
              </p>
              <ExternalInput
                type="inactive"
                value={enddate}
                placeholder={"Enter date"}
                fontSize="14px"
                endIcon={<img src={CalendarSvg} alt="calendar" />}
                onFocus={() => showCalendar(true)}
                onClick={() => showCalendar(true)}
              // onBlur={() => showCalendar(false)}
              />
            </Flex>
          </div>

          <div style={{ width: "23%" }}>
            <Flex flexDirection="column" style={{ gap: "8px" }}>
              <p className="fieldTitle">Time Zone</p>

              <Dropdown
                className={"timeZoneInput"}
                activeItem={{
                  label: timezone,
                  value: timezone,
                }}
                placeholder={"Time zone"}
                onChange={(val) => {
                  setTimezone(val);
                }}
                type={"inactive"}
                dropdownlist={TimeZones}
                icon={<img src={WorldSvg} alt="world" />}
              />
            </Flex>
          </div>
          <div style={{ width: "23%" }}>
            <Flex flexDirection="column" style={{ gap: "8px" }}>
              <p className="fieldTitle">Start</p>

              <Dropdown
                className={"timeZoneInput"}
                activeItem={{
                  label: starttime,
                  value: starttime,
                }}
                placeholder={"Start time"}
                onChange={(val) => {
                  setStarttime(val);
                }}
                type={"inactive"}
                dropdownlist={TimeOptions}
                icon={<img src={ClockSvg} alt="clock" />}
              />
            </Flex>
          </div>
          <div style={{ width: "23%" }}>
            <Flex flexDirection="column" style={{ gap: "8px" }}>
              <p className="fieldTitle">End</p>
              <Dropdown
                className={"timeZoneInput"}
                activeItem={{
                  label: endtime,
                  value: endtime,
                }}
                placeholder={"End time"}
                onChange={(val) => {
                  setEndtime(val);
                }}
                type={"inactive"}
                dropdownlist={TimeOptions}
                icon={<img src={ClockSvg} alt="clock" />}
              />
            </Flex>
          </div>
        </Flex>
      </Flex>
      <Flex justifyContent="center" style={{ marginTop: "52px", marginRight: "25px" }}>
        <Button className="saveButton" disabled={!isActiveButton}>SAVE</Button>
      </Flex>
    </ModalBodyWrapper>
  );
}
