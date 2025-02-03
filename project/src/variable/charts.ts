import { ApexOptions } from "apexcharts";

// Bar Chart Data: Daily Traffic
export const barChartDataDailyTraffic: { name: string; data: number[] }[] = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

// Bar Chart Options: Daily Traffic
export const barChartOptionsDailyTraffic: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    strokeDashArray: 5,
    yaxis: {
      lines: { show: true },
    },
    xaxis: {
      lines: { show: false },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        {
          offset: 0,
          color: "#4318FF",
          opacity: 1,
        },
        {
          offset: 100,
          color: "rgba(67, 24, 255, 1)",
          opacity: 0.28,
        },
      ],
    },
  },
  dataLabels: { enabled: false },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

// Pie Chart Options
export const pieChartOptions: ApexOptions = {
  labels: ["Your files", "System", "Empty"],
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  chart: { width: "50px" },
  states: {
    hover: { filter: { type: "none" } },
  },
  legend: { show: false },
  dataLabels: { enabled: false },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        labels: { show: false },
      },
    },
  },
  fill: { colors: ["#4318FF", "#6AD2FF", "#EFF4FB"] },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: { fontSize: "12px", fontFamily: undefined },
  },
};

// Pie Chart Data
export const pieChartData: number[] = [63, 25, 12];

// Bar Chart Data: Weekly Revenue
export const barChartDataWeeklyRevenue: { name: string; data: number[]; color: string }[] = [
  {
    name: "PRODUCT A",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#6AD2Fa",
  },
  {
    name: "PRODUCT B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#4318FF",
  },
  {
    name: "PRODUCT C",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#EFF4FB",
  },
];

// Bar Chart Options: Weekly Revenue
export const barChartOptionsWeeklyRevenue: ApexOptions = {
  chart: {
    stacked: true,
    toolbar: { show: false },
  },
  tooltip: {
    style: { fontSize: "12px", fontFamily: undefined },
    theme: "dark",
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    labels: {
      show: true,
      style: { colors: "#A3AED0", fontSize: "14px", fontWeight: "500" },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      show: false,
      style: { colors: "#A3AED0", fontSize: "14px", fontWeight: "500" },
    },
  },
  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    xaxis: { lines: { show: false } },
  },
  fill: { colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"] },
  dataLabels: { enabled: false },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

// Line Chart Data: Total Spent
export const lineChartDataTotalSpent: { name: string; data: number[]; color: string }[] = [
  { name: "Revenue", data: [50, 64, 48, 66, 49, 68], color: "#4318FF" },
  { name: "Profit", data: [30, 40, 24, 46, 20, 46], color: "#6AD2FF" },
];

// Line Chart Options: Total Spent
export const lineChartOptionsTotalSpent: ApexOptions = {
  legend: { show: false },
  chart: { type: "line", toolbar: { show: false } },
  stroke: { curve: "smooth" },
  tooltip: {
    style: { fontSize: "12px", fontFamily: undefined },
    theme: "dark",
  },
  xaxis: {
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    labels: { style: { colors: "#A3AED0", fontSize: "12px", fontWeight: "500" } },
  },
  yaxis: { show: false },
};
