import * as React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center px-16 py-10  max-md:px-5">
      <div className="mt-9 w-full max-w-[1251px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
             <img src="/assets/h74.jpg.png" alt="" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base font-bold leading-4 text-[#000d6b] max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold capitalize leading-[56px] max-md:max-w-full">
                Have more questions? Don't
                <br />
                hesitate to reach us
              </div>
              <div className=" leading-7 max-md:mt-10 max-md:max-w-full">
                123 Queensberry Street, North
                <br />
                Melbourne VIC3051, Australia.
              </div>
              <div className="flex gap-5 mt-7 text-center max-md:flex-wrap">
                <div className="flex flex-1 justify-center px-9 py-3 bg-white border border-solid border-slate-950 rounded-[44px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2ccf3c9ea329c6bb25d919c2d806173739745bfe8d4f04c6d30822695c59ae?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 w-4 aspect-[0.72]"
                  />
                  <div className="flex-auto my-auto">+76 956 039 999</div>
                </div>
                <div className="flex flex-1 gap-3.5 justify-center self-start px-9 py-3 whitespace-nowrap bg-white border border-solid border-slate-950 rounded-[44px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d826671b98ca5d7d2f2e9dfcd3ac709fc08a7dc311ed8247fd72663d6d2a59?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                    className="shrink-0 aspect-[1.22] w-[22px]"
                  />
                  <div className="flex-auto">ali@boxcars.com</div>
                </div>
              </div>
              <div className="flex gap-3 justify-center self-start px-7 py-5 mt-5 text-center text-[#0006db] rounded-xl border border-solid bg-[#f9a826] border-slate-950 max-md:px-5">
                <div>Get Started</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf0696293113d12e276347bf4ff2b5e2aa6817eebd1f478553bb8539ac86a7da?apiKey=f417b8c00fe14582a1a201b8017683ae&"
                  className="shrink-0 w-3.5 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact