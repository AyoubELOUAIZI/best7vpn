import React from "react";

const FAQSection = ({FAQ}) => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 text-center">
          VPNs Frequently asked questions
        </h2>
        <div className="mt-6 border-t-4 border-gray-100 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <dl>
              <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
               { FAQ[0]?.question}
              </dt>
              <dd className="mt-4">
                <p className="leading-6 text-base text-gray-500">
                { FAQ[0]?.answer}
                </p>
              </dd>
            </dl>

            <dl>
              <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
              { FAQ[1]?.question}
              </dt>
              <dd className="mt-4">
                <p className="leading-6 text-base text-gray-500">
                { FAQ[1]?.answer}
                </p>
              </dd>
            </dl>

            <dl>
              <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
              { FAQ[2]?.question}
              </dt>
              <dd className="mt-4">
                <p className="leading-6 text-base text-gray-500">
                { FAQ[2]?.answer}
                </p>
              </dd>
            </dl>

            <dl>
              <dt className="font-medium leading-6 text-gray-900 text-lg mt-4">
              { FAQ[3]?.question}
              </dt>
              <dd className="mt-4">
                <p className="leading-6 text-base text-gray-500">
                { FAQ[3]?.answer}
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
