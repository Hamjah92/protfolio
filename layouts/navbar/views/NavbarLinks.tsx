import Link from "next/link";
import React from "react";
import uniqid from "uniqid";
import data from "../../../data";

const {
  info: {
    navbar: { linksDetails },
  },
} = data;

const NavbarLinks = () => {
  return (
    <ul
      className={"hidden flex-1 items-center justify-center space-x-12 lg:flex"}
    >
      {linksDetails.map((linksDetail) => (
        <li key={uniqid()} className={"flex flex-col items-center group"}>
          <div
            className={
              "relative w-[0.3rem] h-[0.3rem] rounded-full bg-transparent -top-1 transition-all duration-200 ease-in-out group-hover:bg-blue-900"
            }
          />
          <Link
            href={`${linksDetail.link}`}
            className={
              "uppercase nav-link transition-all duration-200 ease-in-out group-hover:text-blue-900"
            }
          >
            {linksDetail.title}
          </Link>
        </li>
      ))}
          <li key={uniqid()} className={"flex flex-col items-center group"}>
          <div
            className={
              "relative w-[0.3rem] h-[0.3rem] rounded-full bg-transparent -top-1 transition-all duration-200 ease-in-out group-hover:bg-blue-900"
            }
          />
          <a
            href="/pdf/HamjahResume.pdf"
            download
            target="_blank"
            className={
              "uppercase nav-link transition-all duration-200 ease-in-out group-hover:text-blue-900"
            }
          >
            Resume
          </a>
        </li>
    </ul>
  );
};

export default NavbarLinks;
