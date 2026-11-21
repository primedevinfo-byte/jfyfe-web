"use client";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full flex justify-center px-4 py-2">
      <div className="w-full max-w-4xl bg-white  overflow-hidden">
        <div className="w-full h-[650px] sm:h-[700px] md:h-[750px]">
          <InlineWidget
            url="https://calendly.com/primedev-info/30min/?hide_event_type_details=1&hide_gdpr_banner=1"
            styles={{
              height: "100%",
              width: "100%",
              minWidth: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendly;
