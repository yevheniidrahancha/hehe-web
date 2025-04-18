"use client";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./styles.scss";

const baseClassName = "how-it-works";

const howItWorksData = [
  {
    title: "🎰 Buy Slots Tokens",
    description:
      "Jump into the action by grabbing your Slots Tokens — the more you have, the more power you hold.",
  },
  {
    title: "⬆️ Level Up",
    description:
      "Every token gets you closer to the next level. The more you buy, the higher you climb.",
  },
  {
    title: "💰 Earn More",
    description:
      "Higher level = bigger rewards. Simple as that. Stack up and watch your earnings grow.",
  },
  {
    title: "👥 Invite Friends",
    description:
      "Bring your crew. Every friend you invite boosts your gains. Win together!",
  },
];

interface HowItWorksModalProps {
  open: boolean;
  onClose: () => void;
}

const HowItWorksModal = ({ open, onClose }: HowItWorksModalProps) => {
  return (
    <Modal title="How it works" open={open} onClose={onClose}>
      <div className={baseClassName}>
        <div className={`${baseClassName}__items-wrapper`}>
          {howItWorksData.map((item, index) => (
            <div key={index} className={`${baseClassName}__item-wrapper`}>
              <p className={`${baseClassName}__item-title`}>{item.title}</p>
              <p className={`${baseClassName}__item-text`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className={`${baseClassName}__footer`}>
          <Button className={`${baseClassName}__button`}>
            I&apos;m ready to pump
          </Button>
          <div className={`${baseClassName}__footer-info-wrapper`}>
            <a className={`${baseClassName}__footer-info`}>Privacy policy</a>
            <a className={`${baseClassName}__footer-info`}>Terms of service</a>
            <a className={`${baseClassName}__footer-info`}>Fees</a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HowItWorksModal;
