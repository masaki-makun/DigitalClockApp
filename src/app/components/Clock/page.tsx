"use client";

import { useState } from "react";
import Box from "@mui/material/Box";

function setTheNumberToDigits(number: number) {
  let result;
  if (number < 10) {
    result = "0" + number;
    return result;
  } else {
    result = number;
    return result;
  }
}

export default function Clock() {
  const [year, setYear] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [date, setDate] = useState<string>();
  const [hour, setHour] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [seconds, setSeconds] = useState<string>();
  const isLoading = year && month && date && hour && minutes && seconds;

  async function generateYear() {
    const nowTime = new Date();
    const nowYear = await setTheNumberToDigits(nowTime.getFullYear());
    const message = `${nowYear}`;
    setYear(message);
    return year;
  }

  async function generateMonth() {
    const nowTime = new Date();
    const nowMonth = await setTheNumberToDigits(nowTime.getMonth() + 1);
    const message = `${nowMonth}`;
    setMonth(message);
    return month;
  }

  async function generateDate() {
    const nowTime = new Date();
    const nowDate = await setTheNumberToDigits(nowTime.getDate());
    const message = `${nowDate}`;
    setDate(message);
    return date;
  }

  async function generateHour() {
    const nowTime = await new Date();
    const nowHour = await setTheNumberToDigits(nowTime.getHours());
    const message = `${nowHour}`;
    setHour(message);
    return hour;
  }

  async function generateMinutes() {
    const nowTime = await new Date();
    const nowMin = await setTheNumberToDigits(nowTime.getMinutes());
    const message = `${nowMin}`;
    setMinutes(message);
    return minutes;
  }

  async function generateSeconds() {
    const nowTime = await new Date();
    const nowSec = await setTheNumberToDigits(nowTime.getSeconds());
    const message = `${nowSec}`;
    setSeconds(message);
    return seconds;
  }
  generateYear();
  generateMonth();
  generateDate();

  setInterval(() => {
    generateHour();
  }, 1000);
  setInterval(() => {
    generateMinutes();
  }, 1000);
  setInterval(() => {
    generateSeconds();
  }, 1000);

  return (
    <Box
      className="flex align-center justify-center md:flex-col md:w-[70%] md:max-w-[600px]
      md:h-[265px] max-w-[350px] max-h-[350px] p-2 m-auto text-center absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded-lg shadow-md bg-gray-900"
      // sx={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   bgcolor: "#222",
      //   width: "70%",
      //   maxWidth: "600px",
      //   height: "265px",
      //   p: 2,
      //   borderRadius: "10px",
      //   textAlign: "center",
      //   verticalAlign: "middle",
      //   m: "auto",
      //   position: "absolute",
      //   top: 0,
      //   right: 0,
      //   bottom: 0,
      //   left: 0,
      //   boxShadow: "2px 2px 10px 0px #222",
      //   overflow: "hidden",
      // }}
    >
      <div className="flex flex-col justify-center items-center">
        {isLoading ? (
          <>
            <div className="hidden md:flex md:flex-row md:justify-center md:gap-4">
              <p className="flex items-center justify-center font-light   text-gray-300 text-center">
                <span className="px-2  font-light text-base">{year}</span>
              </p>
              <p className="flex items-center justify-center font-light   text-gray-300 text-center">
                <span className="px-2  font-light text-base">/</span>
              </p>
              <p className="flex items-center justify-center font-light   text-gray-300 text-center">
                <span className="px-2  font-light text-base">{month}</span>
              </p>
              <p className="flex items-center justify-center font-light  text-gray-300 text-center">
                <span className="px-2  font-light text-base">/</span>
              </p>
              <p className="flex items-center justify-center font-light  text-gray-300 text-center">
                <span className="px-2  font-light text-base">{date}</span>
              </p>
            </div>
            <div className="h-hull flex flex-col md:flex-row justify-center gap-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
                <div className="">
                  <p className="flex items-center justify-center w-20 h-20 font-normal text-base  text-white text-center">
                    <span className="px-2 pt-2 font-medium text-8xl md:text-7xl">
                      {hour}
                    </span>
                  </p>
                  <p className="hidden md:block md:text-gray-300 md:text-center md:font-light md:text-base">
                    HOURS
                  </p>
                </div>
                <div className="">
                  <p className="hidden md:flex md:items-center md:justify-center md:font-normal md:text-base  md:text-white">
                    :
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
                <div className="">
                  <p className="flex items-center justify-center w-20 h-20 font-normal text-base  text-white text-center">
                    <span className="px-2 pt-2 font-medium text-8xl md:text-7xl">
                      {minutes}
                    </span>
                  </p>
                  <p className="hidden md:block md:text-gray-300 md:text-center md:font-light md:text-base">
                    MINUTES
                  </p>
                </div>
                <div className="">
                  <p className="hidden md:flex md:items-center md:justify-center md:font-normal md:text-base  md:text-white">
                    :
                  </p>
                </div>
              </div>
              <div className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-8">
                <div className="">
                  <p className="flex items-center justify-center w-20 h-20 font-normal text-base  text-white text-center">
                    <span className="px-2 pt-2 font-medium text-7xl">
                      {seconds}
                    </span>
                  </p>
                  <p className="hidden md:block md:text-gray-300 md:text-center md:font-light md:text-base">
                    SECONDS
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="loader"></div>
          </>
        )}
      </div>
    </Box>
  );
}
