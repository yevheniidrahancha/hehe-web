"use client";

import Image from "next/image";
import LogoSvg from "../../assets/logo.svg";
import Link from "next/link";
import clsx from "clsx";

import "./styles.scss";
import { usePathname } from "next/navigation";

const baseClassName = "header";

const navLinks = [
  { name: "Board", path: "/" },
  { name: "Team", path: "/team" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__logo`}>
        <Image
          className={`${baseClassName}__logo-img`}
          src={LogoSvg}
          width={40}
          height={48}
          alt="logo"
        />
        <p className={`${baseClassName}__logo-name`}>HEHE</p>
        <div className={`${baseClassName}__nav-links`}>
          {navLinks.map((item) => (
            <Link
              className={clsx(`${baseClassName}__link-item`, {
                [`${baseClassName}__link-item--active`]: pathname === item.path,
              })}
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
