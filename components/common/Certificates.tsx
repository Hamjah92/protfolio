import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import uniqid from "uniqid";
import data from "../../data/data";
import SectionLayout from "../sectionLayout/SectionLayout";
import Title from "../title/Title";

const { certificates } = data;
type Props = {};
const green = "bg-green-100 text-green-800";
const yellow = "bg-yellow-100 text-yellow-800";
 const Certificates: FC<Props> = () => {
  return (
    <SectionLayout idName="certificates" classNames="bg-white">
      <div
        className={"flex-1 flex flex-col items-center space-y-16 lg:space-y-20"}
      >
        <Title classNames={"pt-20"}>
          <Title.Black>
            <Title.Blue text="Certificates" />
          </Title.Black>
        </Title>
        <AnimationOnScroll
          duration={2}
          animateIn="animate__fadeInBottomLeft"
          animateOnce
        >
          {certificates.map((certificate) => (
            <div
              key={uniqid()}
              style={{ minWidth: "50vw" }}
              className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center">
                <span className="font-light text-gray-600"></span>
                <Link
                  href={certificate.courseLink}
                  legacyBehavior
                  target="_blank"
                  passHref
                >
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="px-2 py-1 bg-blue-500 text-white font-bold rounded hover:bg-blue-800"
                  >
                    Course
                  </a>
                </Link>
              </div>
              <div className="mt-2">
                <a className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                  {certificate.title}
                </a>
                <ul>
                  {certificate.description.map((str) => (
                    <li
                      className="before:content-['✓'] before:p-1 p-1"
                      key={uniqid()}
                    >
                      {str}
                    </li>
                  ))}
                </ul>
                {/* <p className="mt-2 text-gray-600">{certificate.description}</p> */}
              </div>
              <div className="flex justify-between items-center mt-4">
                <span
                  className={`${
                    certificate.status == "Completed" ? green : yellow
                  } text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900`}
                >
                  {certificate.status}
                </span>

                <div>
                  <div className="flex items-center">
                    <div className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block">
                      <Image
                        src={`/image/instructor/${certificate.instructorImage}`}
                        alt="avatar"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <h1 className="text-gray-700 font-bold">
                      {certificate.instructor}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AnimationOnScroll>
      </div>
    </SectionLayout>
  );
};

export default Certificates