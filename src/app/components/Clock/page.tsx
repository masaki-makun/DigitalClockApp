'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

function setTheNumberToDigits(num:number) {
  let result;
  if (num < 10 ) {
    result = '0' + num;
    return result;
  } else {
    result = num;
    return result;
  }
}

export default function Clock() {
  const [year, setYear] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [date, setDate] = useState<string>();
  const [hour, setHour] = useState<string>();
  const [min, setMin] = useState<string>();
  const [sec, setSec] = useState<string>();
  const flag = year && month && date && hour && min && sec;

  async function generateYear() {
    const nowTime = new Date();
    const nowYear = await setTheNumberToDigits(nowTime.getFullYear());
    const msg = `${nowYear}`;
    setYear(msg);
    return year;
}

async function generateMonth() {
    const nowTime = new Date();
    const nowMonth = await setTheNumberToDigits(nowTime.getMonth()+1);
    const msg = `${nowMonth}`;
    setMonth(msg);
    return month;
}

async function generateDate() {
    const nowTime = new Date();
    const nowDate = await setTheNumberToDigits(nowTime.getDate());
    const msg = `${nowDate}`;
    setDate(msg);
    return date;
}

async function generateHour() {
    const nowTime=await new Date();
  const nowHour=await setTheNumberToDigits(nowTime.getHours());
    const msg = `${nowHour}`;
      setHour(msg)
      return hour;
  }

  async function generateMin() {
    const nowTime=await  new Date();
  const nowMin=await  setTheNumberToDigits(nowTime.getMinutes());
    const msg = `${nowMin}`;
      setMin(msg)
      return min;
  }

  async function generateSec() {
    const nowTime=await  new Date();
  const nowSec=await setTheNumberToDigits(nowTime.getSeconds());
    const msg = `${nowSec}`;
      setSec(msg)
      return sec;
    }
    generateYear()
    generateMonth()
    generateDate()

  setInterval(() => {
    generateHour()
  },1000)
  setInterval(() => {
    generateMin()
  },1000)
  setInterval(() => {
    generateSec()
  },1000)

  return (
    <Box className=''
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#222', width: '65%', maxWidth: '600px', height: '280px', p: 2, borderRadius: '10px', textAlign: 'center', verticalAlign: 'middle', m: 'auto', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, boxShadow: '2px 2px 10px 0px #222', overflow: 'hidden' }}>
      <div className="flex flex-col justify-center items-center">
        {flag ? (
          <>
            <div className="flex flex-row justify-center gap-4">
              <p className='flex items-center justify-center font-normal   text-gray-300 text-center'><span className='px-2  font-light text-base'>{ year}</span></p>
              <p className='flex items-center justify-center font-normal   text-gray-300 text-center'><span className='px-2  font-light text-base'>/</span></p>
              <p className='flex items-center justify-center font-normal   text-gray-300 text-center'><span className='px-2  font-light text-base'>{ month}</span></p>
              <p className='flex items-center justify-center font-normal  text-gray-300 text-center'><span className='px-2  font-light text-base'>/</span></p>
              <p className='flex items-center justify-center font-normal  text-gray-300 text-center'><span className='px-2  font-light text-base'>{ date}</span></p>
            </div>

            <div className='h-hull flex flex-row justify-center gap-8'>
              <div className="flex flex-row items-center justify-center gap-4">
                <div className=''>
                  <p className='flex items-center justify-center w-20 h-20 font-normal text-base  text-white text-center'><span className='px-2 pt-2 font-medium text-7xl'>{hour}</span></p>
                  <p className="text-gray-500 text-center font-medium text-base">HOURS</p>
                </div>
                <div className=''>
                  <p className='flex items-center justify-center font-normal text-base  text-white'>:</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-4">
                <div className=''>
                  <p className='flex items-center justify-center w-20 h-20 font-normal text-base  text-white text-center'><span className='px-2 pt-2 font-medium text-7xl'>{min}</span></p>
                  <p className="text-gray-500 text-center font-medium text-base">MINUTES</p>
                </div>
                <div className=''>
                  <p className='flex items-center justify-center font-normal text-base  text-white'>:</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-4">
                <div className=''>
                  <p className='flex items-center justify-center w-20 h-20 font-normal text-base  text-white text-center'><span className='px-2 pt-2 font-medium text-7xl'>{sec}</span></p>
                  <p className="text-gray-500 text-center font-medium text-base">SECONDS</p>
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

      {/* <div className="custom-shape-divider-top-1695351794">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div> */}
    </Box>
  )
}
