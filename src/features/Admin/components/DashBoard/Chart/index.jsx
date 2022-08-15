import React from 'react'
import Chart from "react-apexcharts";

const ChartDashBoard = () => {
  const chartOptions = {
    series: [
      {
        name: "Monthly bill",
    //     data: [
    //       numberOfOrdersOnMonth(1) + 7,
    //       numberOfOrdersOnMonth(2) + 4,
    //       numberOfOrdersOnMonth(3) + 7,
    //       numberOfOrdersOnMonth(4) + 5,
    //       numberOfOrdersOnMonth(5) + 3,
    //       numberOfOrdersOnMonth(6) + 14,
    //       numberOfOrdersOnMonth(7),
    //       numberOfOrdersOnMonth(8) + 8,
    //       numberOfOrdersOnMonth(9) + 8,
    //       numberOfOrdersOnMonth(10) + 18,
    //       numberOfOrdersOnMonth(11) + 20,
    //       numberOfOrdersOnMonth(12) + 11,
    //     ],
      },
    ],
    options: {
      color: ["#6ab04c", "#2980b9"],
      chart: {
        background: "transparent",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <div className="dashboard-chair col l-7">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="line"
        width="500"
      />
    </div>
  );
};

export default ChartDashBoard;