import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from "next-themes";
import { FunctionComponent, useEffect, useState } from "react";

const BarChartComponent: FunctionComponent = () => {

  const { resolvedTheme, setTheme } = useTheme()


  const data = [
    { hour: 7, day: "Monday" },
    { hour: 6, day: "Tuesday" },
    { hour: 6.5, day: "Wednesday" },
    { hour: 3, day: "Thursday" },
    { hour: 2, day: "Friday" },
    { hour: 4, day: "Saturday" },
    { hour: 5, day: "Sunday" }
  ];


  return (
    <ResponsiveContainer>
      <BarChart data={ data }>
        <CartesianGrid stroke={ resolvedTheme === 'dark' ? '#6E7191' : "#EFF0F6" } vertical={ false }/>
        <XAxis
          tickMargin={ 16 }
          axisLine={ false }
          tickLine={ false }
          tick={
            {
              fill: "#A0A3BD",
              fontSize: "12px",
              fontWeight: 500,
            }
          } dataKey="day" tickFormatter={ (v: number) => v.toString().slice(0, 3) }/>
        <YAxis
          axisLine={ false }
          tickLine={ false }
          tick={
            {
              fill: "#A0A3BD",
              fontSize: "12px",
              fontWeight: 500,
            }
          }
          tickMargin={ 12 }
          tickFormatter={ (v: number) => `${ v }h` }
        />
        <Bar isAnimationActive={false} dataKey="hour" fill={ resolvedTheme === 'dark' ? "#A996FF" : "#610BEF" } radius={ [ 10, 10, 10, 10 ] } barSize={ 10 }/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;