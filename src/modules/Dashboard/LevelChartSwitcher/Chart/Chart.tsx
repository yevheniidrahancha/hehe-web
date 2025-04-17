"use client";

import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
} from "recharts";
import "./styles.scss";
import Image from "next/image";
import OppositeArrowIcon from "../../../../assets/arrows-opposite-direction.svg";
import clsx from "clsx";
import { formatScientificNumber } from "@/utils/formatScientificNumber";

const baseClassName = "chart";

enum Timeframe {
  MIN_15 = "15m",
  HOUR_1 = "1H",
  HOUR_4 = "4H",
  DAY_1 = "1D",
  ALL = "All Time",
}

const TIMETABS = [
  Timeframe.MIN_15,
  Timeframe.HOUR_1,
  Timeframe.HOUR_4,
  Timeframe.DAY_1,
  Timeframe.ALL,
];

const staticData = [
  { timestamp: 1712700000000, value: 0.0000001701 },
  { timestamp: 1712703600000, value: 0.0000001712 },
  { timestamp: 1712707200000, value: 0.0000001725 },
  { timestamp: 1712710800000, value: 0.0000001738 },
  { timestamp: 1712714400000, value: 0.000000174 },
  { timestamp: 1712718000000, value: 0.0000001751 },
  { timestamp: 1712721600000, value: 0.0000001763 },
  { timestamp: 1712725200000, value: 0.000000177 },
  { timestamp: 1712728800000, value: 0.0000001784 },
  { timestamp: 1712732400000, value: 0.0000001798 },
  { timestamp: 1712736000000, value: 0.0000001805 },
  { timestamp: 1712739600000, value: 0.0000001811 },
  { timestamp: 1712743200000, value: 0.0000001819 },
  { timestamp: 1712746800000, value: 0.0000001824 },
  { timestamp: 1712750400000, value: 0.000000183 },
];

const Chart = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>(
    Timeframe.MIN_15
  );

  const handleTabClick = (label: Timeframe) => {
    setSelectedTimeframe(label);
  };

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__header`}>
        <div className={`${baseClassName}__currencies-wrapper`}>
          <div className={`${baseClassName}__currencies-logos-wrapper`}>
            <span className={`${baseClassName}__currencies-logo-first`}></span>
            <span className={`${baseClassName}__currencies-logo-second`}></span>
          </div>
          <p className={`${baseClassName}__currencies-names`}>HYPE/USDC</p>
          <Image
            src={OppositeArrowIcon}
            alt="OppositeArrow"
            width={12}
            height={12}
          />
          <p className={`${baseClassName}__time`}>25/04/11 10:04</p>
        </div>
        <div className={`${baseClassName}__tabs`}>
          {TIMETABS.map((label, index) => (
            <button
              key={index}
              className={clsx(
                `${baseClassName}__tab`,
                selectedTimeframe === label && `${baseClassName}__tab--active`
              )}
              onClick={() => handleTabClick(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className={`${baseClassName}__price`}>
        1.83e-7
        <span className={`${baseClassName}__change`}>+0.05%</span>
      </div>
      <div className={`${baseClassName}__chart-wrapper`}>
        <ResponsiveContainer width="100%" height={295}>
          <AreaChart data={staticData}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6AB67C" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#6AB67C" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="timestamp"
              type="number"
              domain={["dataMin", "dataMax"]}
              axisLine={{ stroke: "#252835" }}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888CA5" }}
              tickFormatter={(val) =>
                new Date(val).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }
            />

            <YAxis
              orientation="right"
              domain={["auto", "auto"]}
              axisLine={{ stroke: "#252835" }}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#888CA5" }}
              tickFormatter={(val) => `$${formatScientificNumber(val)}`}
            />

            <ReferenceLine
              y={staticData[staticData.length - 1]?.value}
              stroke="#21472A"
              strokeDasharray="3 3"
              ifOverflow="extendDomain"
              label={{
                position: "right",
                value: `$${formatScientificNumber(
                  staticData[staticData.length - 1]?.value
                )}`,
                fill: "#21472A",
                fontSize: 12,
                fontWeight: 500,
                dx: 5,
              }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#181818", border: "none" }}
              formatter={(val: number) => [
                `$${formatScientificNumber(val)}`,
                "Price",
              ]}
              labelFormatter={(label) =>
                new Date(label).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }
            />

            <Area
              type="linear"
              dataKey="value"
              stroke="#4fd18b"
              strokeWidth={2}
              fill="url(#gradient)"
              dot={false}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
