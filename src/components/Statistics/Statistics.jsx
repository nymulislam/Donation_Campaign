import { Box, useMediaQuery } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { getStoredDonation } from "../Utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";


const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Statistics() {
    const [donatedData, setDonatedData] = useState(getStoredDonation())
    useEffect( () => {
        setDonatedData(getStoredDonation())
    },[donatedData.length])
    const totalDataLength = useLoaderData()

    const data = [
        { name: "Total Donation", value: totalDataLength.length },
        { name: "Your Donation", value: donatedData.length }
      ];

      const isSmallDevice = useMediaQuery('(max-width: 600px)');
      const isTablet = useMediaQuery('(max-width: 1024px)');

      let outerRadius = 180;
      
      if (isTablet){
        outerRadius = 150;
      }
      if (isSmallDevice) {
        outerRadius = 120;
      }
      
  return (
    <Box 
    sx={
        {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'

        }
    }
    >
    <PieChart className="mx-auto" width={400} height={400}>
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={outerRadius}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip></Tooltip>
    <Legend></Legend>
    </PieChart>
    </Box>
  );
}