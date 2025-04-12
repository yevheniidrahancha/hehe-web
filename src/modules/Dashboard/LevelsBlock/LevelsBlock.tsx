import React from "react";
import BalanceCard from "./BalanceCard/BalanceCard";
import BlockedLevelCard from "./BlockedLevelCard/BlockedLevelCard";
import CurrentLevelCard from "./CurrentLevelCard/CurrentLevelCard";
import NextLevelCard from "./NextLevelCard/NextLevelCard";
import "./styles.scss";

const baseClassName = "levels-block";

const levelCards = [
  {
    level: 1,
    amount: 0.4,
    type: "current",
    users: [
      {
        name: "Ivan",
        avatarUrl:
          "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920",
        progress: 80,
      },
      {
        name: "Nina",
        avatarUrl:
          "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920",
        progress: 20,
      },
    ],
  },
  {
    level: 2,
    amount: 0.6,
    type: "next",
    users: [],
  },
  {
    level: 3,
    amount: 1,
    type: "blocked",
    users: [],
  },
  {
    level: 4,
    amount: 2,
    type: "blocked",
    users: [],
  },
  {
    level: 5,
    amount: 3,
    type: "blocked",
    users: [],
  },
  {
    level: 6,
    amount: 4,
    type: "blocked",
    users: [],
  },
];

const LevelsBlock = () => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__balance-card-wrapper`}>
        <BalanceCard />
      </div>
      <div className={`${baseClassName}__level-list`}>
        {levelCards.map(({ amount, level, users, type }) => (
          <React.Fragment key={level}>
            {type === "current" && (
              <CurrentLevelCard level={level} amount={amount} users={users} />
            )}
            {type === "next" && <NextLevelCard amount={amount} level={level} />}
            {type === "blocked" && (
              <BlockedLevelCard amount={amount} level={level} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LevelsBlock;
