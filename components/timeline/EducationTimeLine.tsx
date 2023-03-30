import { FC } from "react";
import data from "../../data";
import SectionLayout from "../sectionLayout/SectionLayout";
import Title from "../title/Title";
import uniqid from "uniqid";
import { RenderIf } from "../common/RenderIf";
import { DownArrow } from "../common/DownArrow";
import Image from "next/image";

type Props = {};
const {
  info: { education },
} = data;
export const EducationTimeLine: FC<Props> = () => {
  return (
    <SectionLayout idName="education">
      <div
        className={"flex-1 flex flex-col items-center space-y-16 lg:space-y-20"}
      >
        <Title classNames={"pt-20"}>
          <Title.Black>Education</Title.Black>
        </Title>
        <div className="mt-8 p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          {education.map((detail) => (
            <div className="mb-8" key={uniqid()}>
              <time className="text-lg font-semibold text-gray-900 dark:text-white">
                {detail.title}
              </time>
              <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                <li>
                  <a className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="mr-3 mb-3 w-14 h-14 rounded-full sm:mb-0">
                      <Image
                        width="100%"
                        height="100%"
                        src={`/image/institute/${detail.image}`}
                        alt={detail.institute}
                      />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      <div className="text-base font-normal">
                        {detail.institute}
                      </div>

                      <RenderIf when={!!detail.verificationImage}>
                        <div className="mt-2 flex">
                          <div
                            style={{
                              borderRadius: "50%",
                              height: "25px",
                              width: "25px",
                            }}
                            className="mr-3 mb-3 rounded-full sm:mb-0"
                          >
                            <Image
                              src={`/image/institute/${detail.verificationImage}`}
                              width="100%"
                              height="100%"
                              alt="wes"
                            />
                          </div>
                          <p>{detail.verificationText}</p>
                        </div>
                      </RenderIf>
                      <RenderIf when={!!detail.start}>
                        <div className="mt-2 text-sm font-normal">
                          {detail.start} - {detail.end}
                        </div>
                      </RenderIf>
                    </div>
                  </a>
                </li>
              </ol>
            </div>
          ))}
        </div>
        <DownArrow id="certificates" />
      </div>
    </SectionLayout>
  );
};

export default EducationTimeLine;
