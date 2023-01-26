import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { DonutChart, Legend } from "@tremor/react";

const raw_monthly_data_part1 = [
  {
    month: "Dec 21",
    "Chaincode Labs BPD Seminar": 24,
    "Bitcoin Core PR Review Club": 3,
    "Learning Bitcoin from the Command Line": 0,
    "Shadowy Citadel": 15,
    "Bitcoin Spaces": 19,
    "Who Funds Bitcoin Development": 13,
  },
  {
    month: "Jan",
    "Chaincode Labs BPD Seminar": 93,
    "Bitcoin Core PR Review Club": 19,
    "Shadowy Citadel": 11,
    "Who Funds Bitcoin Development": 5,
    "Bitcoin Transcripts": 2,
  },
  {
    month: "Feb",
    "Chaincode Labs BPD Seminar": 35,
    "Bitcoin Core PR Review Club": 30,
    "Summer of Bitcoin": 5,
    "Shadowy Citadel": 11,
    "Bitcoin Spaces": 38,
    "Bitcoin Transcripts": 6,
  },
  {
    month: "Mar",
    "Summer of Bitcoin": 36,
    "Bitcoin Core PR Review Club": 29, // 17h is Onboarding to Bitcoin Core
    "Learning Bitcoin from the Command Line": 5,
    "Shadowy Citadel": 1,
    "Bitcoin Spaces": 9,
    "Bitcoin Transcripts": 16,
  },
  {
    month: "Apr",
    "Bitcoin Core PR Review Club": 5,
    "Summer of Bitcoin": 19,
    "Bitcoin Spaces": 15,
    "Bitcoin Transcripts": 1,
    "Who Funds Bitcoin Development": 22,
    //"Misc": 1 // Bitcoin Stack Exchange
  },
  {
    month: "May", // up to May 19
    "Bitcoin Core PR Review Club": 1,
    "Summer of Bitcoin": 5,
    "Bitcoin Transcripts": 4,
    "Who Funds Bitcoin Development": 47,
  },
];

const raw_monthly_data_part2 = [
  {
    month: "May", // from May 20
    "Reviewing PRs": 24,
    "Summer of Bitcoin": 21,
    "Chaincode Labs BPD Seminar": 0,
    "Bitcoin Transcripts": 2,
    "Who Funds Bitcoin Development": 2,
    "Bitcoin Spaces": 0,
  },
  {
    month: "Jun",
    "Reviewing PRs": 45,
    "My PRs": 21,
    "Summer of Bitcoin": 39,
    "Bitcoin Transcripts": 11,
    "Who Funds Bitcoin Development": 2,
  },
  {
    month: "Jul",
    "Reviewing PRs": 7,
    "My PRs": 42,
    "Issues Triage": 16,
    "Summer of Bitcoin": 6,
    "Chaincode Labs BPD Seminar": 9, // philosophy workshop
    "Bitcoin Transcripts": 12,
    "Who Funds Bitcoin Development": 1,
  },
  {
    month: "Aug",
    "Reviewing PRs": 10,
    "Bitcoin Core PR Review Club": 4,
    "My PRs": 6,
    "rc24 Testing Guide": 9,
    "Issues Triage": 32,
    "Summer of Bitcoin": 6,
    "Bitcoin Transcripts": 4,
    bitcoinperf: 17,
  },
  {
    month: "Sep",
    "Reviewing PRs": 12, // includes 2h Misc
    "Bitcoin Core PR Review Club": 12,
    "My PRs": 22,
    "rc24 Testing Guide": 68,
    "Issues Triage": 1,
    "Who Funds Bitcoin Development": 2,
  },
  {
    month: "Oct",
    "Bitcoin Core": 34, // includes 5h Functional test thinking, 1h stack exchange, rest is Onboarding to Bitcoin Core reading
    "Reviewing PRs": 26,
    "Bitcoin Core PR Review Club": 7,
    "Issues Triage": 5,
    "My PRs": 4,
    "rc24 Testing Guide": 1,
    "Bitcoin Transcripts": 2,
    "Who Funds Bitcoin Development": 8,
  },
  {
    month: "Nov",
    "Bitcoin Core": 5, // includes 3h BAG
    "Reviewing PRs": 22,
    "Issues Triage": 1,
    "Bitcoin Transcripts": 18,
    "Bitcoin Spaces": 10,
  },
];

const categories = [
  // actually doing the work
  {
    name: "Bitcoin Core",
    color: "orange",
  },
  {
    name: "Reviewing PRs",
    color: "orange",
  },
  {
    name: "My PRs",
    color: "orange",
  },
  {
    name: "Issues Triage",
    color: "orange",
  },
  {
    name: "rc24 Testing Guide",
    color: "orange",
  },
  {
    name: "bitcoinperf",
    color: "orange",
  },
  {
    name: "Bitcoin Core PR Review Club",
    color: "orange",
  },
  {
    name: "Learning Bitcoin from the Command Line",
    color: "orange",
  },
  // kind of doing the work
  {
    name: "Chaincode Labs BPD Seminar",
    color: "amber",
  },
  {
    name: "Summer of Bitcoin",
    color: "amber",
  },
  // not doing the work
  {
    name: "Shadowy Citadel",
    color: "teal",
  },
  {
    name: "Who Funds Bitcoin Development",
    color: "teal",
  },
  {
    name: "Bitcoin Spaces",
    color: "teal",
  },
  {
    name: "Bitcoin Transcripts",
    color: "teal",
  },
];

const calculateWorkData = (rawMonthlyData) => {
  const work_data = [];
  const task_totals = {};

  for (const data of rawMonthlyData) {
    for (const [name, hours] of Object.entries(data)) {
      if (name !== "month") {
        if (!(name in task_totals)) {
          task_totals[name] = 0;
        }
        task_totals[name] += hours;
      }
    }
  }

  for (const [name, hours] of Object.entries(task_totals)) {
    work_data.push({ name, hours });
  }

  console.table(work_data);

  // match colors with categories
  for (const data of work_data) {
    const color = categories.find((tc) => tc.name === data.name).color;
    data.color = color;
  }
  const category_colors = work_data.map((category) => category.color);

  // percentage
  let total_hours = 0;

  for (const data of work_data) {
    total_hours += data.hours;
  }

  for (const data of work_data) {
    data.hours = Math.round((data.hours / total_hours) * 100);
  }
  return { work_data, category_colors };
};

const valueFormatter = (number) => `${number}%`;

const Wrapper = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
  @media (min-width: 650px) {
    flex-direction: row;
  }
`;

const Text = styled.div`
  font-size: 12px;
  margin: 0px 12%;
  margin-top: 5px;
  @media (min-width: 650px) {
    font-size: 14px;
    margin-left: 0px;
    margin-right: 10%;
  }
`;

const before = calculateWorkData(raw_monthly_data_part1);
const after = calculateWorkData(raw_monthly_data_part2);

const WorkBefore = () => {
  return (
    <>
      <Wrapper>
        <DonutChart
          variant={"pie"}
          data={before.work_data}
          category="hours"
          dataKey="name"
          valueFormatter={valueFormatter}
          colors={before.category_colors}
        />
        <div>
          <Legend
            categories={[
              "Actually doing the work",
              "Kind of doing the work",
              "Not doing the work",
            ]}
            colors={["orange", "amber", "teal"]}
            marginTop="mt-3"
          />
          <Text>
            This shows my total work time distribution by mid-May, six months
            into my journey.
          </Text>
        </div>
      </Wrapper>
    </>
  );
};

// Render to #root
ReactDOM.render(
  React.createElement(WorkBefore, null),
  document.getElementById("react-work-charts")
);

const WorkAfter = () => {
  return (
    <>
      <Wrapper>
        <div>
          <Text>
            This shows how I distributed my work time during the next 6 months.
          </Text>
          <Legend
            categories={[
              "Actually doing the work",
              "Kind of doing the work",
              "Not doing the work",
            ]}
            colors={["orange", "amber", "teal"]}
            marginTop="mt-3"
          />
        </div>
        <DonutChart
          variant={"pie"}
          data={after.work_data}
          category="hours"
          dataKey="name"
          valueFormatter={valueFormatter}
          colors={after.category_colors}
        />
      </Wrapper>
    </>
  );
};

// Render to #root
ReactDOM.render(
  React.createElement(WorkAfter, null),
  document.getElementById("react-work-charts-after")
);
