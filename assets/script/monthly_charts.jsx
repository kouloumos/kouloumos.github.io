import * as React from "react";
import * as ReactDOM from "react-dom";
import { Title, AreaChart } from "@tremor/react";

const raw_monthly_data = [
  {
    month: "Dec 21",
    "Secondary Context": 24,
    "Bitcoin Core": 4,
    "Side Projects": 47,
    // Reading: 17,
  },
  {
    month: "Jan",
    "Secondary Context": 93,
    "Bitcoin Core": 19,
    "Side Projects": 18,
    // Reading: 14,
  },
  {
    month: "Feb",
    "Secondary Context": 40, //33+5+2
    "Bitcoin Core": 30, // includes 12h of review club
    "Side Projects": 55,
    // Reading: 4,30+33+5
  },
  {
    month: "Mar",
    "Bitcoin Core": 34,
    "Secondary Context": 36,
    "Side Projects": 26,
  },
  {
    month: "Apr",
    "Bitcoin Core": 5,
    "Secondary Context": 20,
    "Side Projects": 38,
  },
  {
    month: "May",
    "Bitcoin Core": 21,
    "Secondary Context": 26,
    "Side Projects": 54,
  },
  {
    month: "Jun",
    "Bitcoin Core": 66,
    "Secondary Context": 39,
    "Side Projects": 13,
  },
  {
    month: "Jul",
    "Bitcoin Core": 65,
    "Secondary Context": 15,
    "Side Projects": 14,
  },
  {
    month: "Aug",
    "Bitcoin Core": 78,
    "Secondary Context": 6,
    "Side Projects": 4,
  },
  {
    month: "Sep",
    "Bitcoin Core": 116,
    "Secondary Context": 0,
    "Side Projects": 3,
  },
  {
    month: "Oct",
    "Bitcoin Core": 41,
    "Secondary Context": 29,
    "Side Projects": 11,
  },
  {
    month: "Nov",
    "Bitcoin Core": 24,
    "Secondary Context": 3,
    "Side Projects": 28,
    Checkpoint: 0,
  },
  {
    month: "Dec",
    "Bitcoin Core": 8,
    "Secondary Context": 0,
    "Side Projects": 2,
    Checkpoint: 93,
  },
  {
    month: "Jan 22",
    "Bitcoin Core": 56,
    "Side Projects": 2,
    Checkpoint: 29,
  },
];

const transformed_monthly_data = raw_monthly_data.map((month) => {
  // Calculate the total hours for the month
  const totalHours = Object.values(month).reduce((acc, val) => {
    // Ignore the month property
    if (typeof val === "number") {
      acc += val;
    }
    return acc;
  }, 0);

  // Create a new object with the same structure as the original month,
  // but with the hours replaced with percentages
  const transformedMonth = Object.entries(month).reduce((acc, [key, value]) => {
    if (key !== "month") {
      acc[key] = Math.round((value / totalHours) * 100);
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});

  return transformedMonth;
});

const monthly_data = transformed_monthly_data;
const categories = [
  {
    name: "Bitcoin Core",
    color: "orange",
  },
  {
    name: "Secondary Context",
    color: "amber",
  },
  // {
  //   name: "Chaincode Learning",
  //   color: "amber",
  // },
  // {
  //   name: "Summer of Bitcoin",
  //   color: "amber",
  // },
  {
    name: "Side Projects",
    color: "teal",
  },
  {
    name: "Checkpoint",
    color: "green",
  },
  // {
  //   name: "Misc",
  //   color: "cyan",
  // },
  // {
  //   name: "Personal",
  //   color: "red",
  // },
  // {
  //   name: "Words",
  //   color: "green",
  // },
  // {
  //   name: "Reading",
  //   color: "indigo",
  // },
];

const category_names = categories.map((category) => category.name);
const category_colors = categories.map((category) => category.color);

const valueFormatter = (number) => `${number}%`;

const App = () => {
  return (
    <>
      <div>
        <Title>Main Work as % of my time </Title>
        <AreaChart
          data={monthly_data}
          dataKey="month"
          categories={category_names}
          colors={category_colors}
          valueFormatter={valueFormatter}
          showYAxis={true}
          yAxisWidth="w-9"
          marginTop="mt-1"
        />
      </div>
    </>
  );
};

// Render to #root
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("react-monthly-charts")
);
