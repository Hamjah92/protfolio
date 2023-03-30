import React, { FC } from "react";
import SectionLayout from "../sectionLayout/SectionLayout";
import { DownArrow } from "../common/DownArrow";
import uniqid from "uniqid";

interface Props {
  data: SanityDoc.workExperience[];
}
 const WorkExperienceTimeLine: FC<Props> = ({ data }) => {
  return (
    <SectionLayout idName={"experience"} classNames={"bg-white"}>
      <div
        className={
          "flex-1 flex flex-col items-center space-y-16 lg:space-y-20 justify-center items-center"
        }
      >
        <section className="dark:bg-gray-800 dark:text-gray-100 d-flex justify-center align-center ">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                  <h3 className="text-3xl font-semibold">Work History</h3>
                  <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                    Software Developer
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                  {/* start */}
                  {data.map((workExperience) => (
                    <div
                      key={uniqid()}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400"
                    >
                      <h3 className="text-xl font-semibold tracking-wide">
                        {workExperience.title}
                      </h3>
                      <time className="text-xs tracking-wide uppercase text-gray-400">
                        {`${workExperience.startDate} - ${workExperience.endDate}`}
                      </time>
                      <ul className="list-disc">
                        {workExperience.description
                          .split(".")
                          .map(
                            (str, index) =>
                              !!str.length && <li key={index}>{str}</li>
                          )}
                      </ul>
                    </div>
                  ))}
                  {/* end */}
                </div>
              </div>
            </div>
            <DownArrow id="education" />
          </div>
        </section>
      </div>
    </SectionLayout>
  );
};

export default WorkExperienceTimeLine