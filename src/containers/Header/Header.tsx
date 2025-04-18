"use client";

import Image from "next/image";
import LogoPng from "../../assets/logo.png";
import DashboardNavSvg from "../../assets/dashboard-nav-link.svg";
import QuestionIcon from "../../assets/square-question.svg";

import Link from "next/link";
import clsx from "clsx";

import "./styles.scss";
import { usePathname } from "next/navigation";
import HowItWorksModal from "@/components/HowItWorksModal/HowItWorksModal";
import { useState } from "react";

const baseClassName = "header";

const navLinks = [{ name: "Board", icon: DashboardNavSvg, path: "/" }];

const Header = () => {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__logo`}>
        <Image
          className={`${baseClassName}__logo-img`}
          src={LogoPng}
          width={40}
          height={48}
          alt="logo"
        />
        <div className={`${baseClassName}__nav-links`}>
          {navLinks.map((item, index) => (
            <Link
              key={index}
              className={clsx(`${baseClassName}__link-item`, {
                [`${baseClassName}__link-item--active`]: pathname === item.path,
              })}
              href={item.path}
            >
              <div className={`${baseClassName}__nav-link-content`}>
                <Image src={item.icon} alt="nav icon" />
                <p className={`${baseClassName}__nav-link-content-text`}>
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={handleOpenModal}
          className={`${baseClassName}__button-wrapper`}
        >
          <div className={`${baseClassName}__button-content`}>
            <Image
              src={QuestionIcon}
              alt="QuestionIcon"
              width={22}
              height={22}
              style={{ marginRight: "8px" }}
            />
            <p className={`${baseClassName}__button-text`}>How It Works</p>
          </div>
        </button>
      </div>
      <HowItWorksModal
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
      />
    </div>
  );
};

export default Header;
