import { FC } from "react";
import SectionLayout from "../sectionLayout/SectionLayout";
import Image from "next/image";
import { DefaultParticles } from "./Particles";
import { UserSocialMedia } from "../socialMedia/UserSocialMedia";
import { DownArrow } from "../common/DownArrow";
// import { SiMaterialui, SiNestjs, SiPostgresql, SiReact } from "react-icons/si";

type IPropsUserInfo = {};

const UserInfo: FC<IPropsUserInfo> = () => {
  return (
    <SectionLayout idName={"about"} classNames={"bg-header"}>
      <div
        className={"flex-1 flex flex-col items-center space-y-16 lg:space-y-20"}
      >
        <DefaultParticles />
        &nbsp;
        <div className="mt-8 p-16">
          <div className="p-8">
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <Image
                  className="rounded-full"
                  src="/image/profile-pic.png"
                  alt="Muhammadhamjah"
                  layout={"fill"}
                  objectFit={"contain"}
                />
              </div>{" "}
            </div>{" "}
            &nbsp;
            <div className="mt-20 text-center border-b pb-12">
              {" "}
              <h1 className="mt-5 text-2xl font-medium text-gray-700">
                HAMJAH T, <span className="font-light text-gray-500">24</span>
              </h1>{" "}
              <UserSocialMedia />
              <p className="mt-5 text-gray-500">
                Software Developer - Sefion It Services
              </p>{" "}
              <div className="mt-2 text-blue-300 text-sm">
                <a
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  href="#experience"
                >
                  #Experience
                </a>{" "}
                <a
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  href="#certificates"
                >
                  #Certificates
                </a>{" "}
                <a
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  href="#education"
                >
                  #Education
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-0 flex flex-col justify-center">
              <p className="text-black text-center font-light lg:px-16 transition ease-in-out delay-150 hover:scale-110">
                A passionate Full Stack Developer who always thrive to work on
                end to end products which develop sustainable and scalable
                social and technical systems to create impact.MoreOver, I`m Full
                Stack developer who wants to explore every Tech Stack.
              </p>{" "}
              {/*  */}
              <DownArrow id="experience" />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default UserInfo;
