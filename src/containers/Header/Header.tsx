"use client";

import Image from "next/image";
import LogoPng from "../../assets/logo.png";
import DashboardNavSvg from "../../assets/dashboard-nav-link.svg";

import Link from "next/link";
import clsx from "clsx";

import "./styles.scss";
import { usePathname } from "next/navigation";

const baseClassName = "header";

const navLinks = [{ name: "Board", icon: DashboardNavSvg, path: "/" }];

const Header = () => {
  const pathname = usePathname();

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
          {navLinks.map((item) => (
            <Link
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
      </div>
    </div>
  );
};

export default Header;
