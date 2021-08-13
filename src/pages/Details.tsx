import React from "react";
import { siteContext } from "../contexts/siteContext";
import { Redirect } from "react-router-dom";
import AuditsCard from "../components/AuditsCard";

const Details = () => {
  const { siteData } = React.useContext(siteContext);

  const auditsToShow = [
    "speed-index",
    "largest-contentful-paint",
    "interactive",
    "first-contentful-paint",
    "first-meaningful-paint",
    "largest-contentful-paint-element",
    "uses-long-cache-ttl",
    "cumulative-layout-shift",
    "layout-shift-elements",
  ];

  return (
    <div>
      {!siteData && <Redirect to="/" />}
      <div className="flex justify-center mx-auto">
        <div className="p-5 m-5 flex flex-col md:flex-row flex-wrap ">
          {siteData &&
            auditsToShow.map((name, idx) => (
              <AuditsCard
                key={idx + name}
                times={siteData?.lighthouseResult.audits[name].displayValue}
                title={siteData?.lighthouseResult.audits[name].title}
                description={
                  siteData?.lighthouseResult.audits[name].description
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
