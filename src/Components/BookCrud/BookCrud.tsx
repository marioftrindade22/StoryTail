import React, { useState } from "react";

function ParentComponent() {
  const [accessLevel, setAccessLevel] = useState("Free");
}
export default function BookCrud(props) {
  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[27%] max-md:w-full max-md:ml-0">
          <span className="flex grow flex-col items-stretch px-5 max-md:mt-8">
            <div className="text-amber-600 text-base font-bold">
              Main Information
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/75e443454f9cf7bfba62dc79f4296a1a0655fc1f38650cec4d98c40c7b0a8188?apiKey=fd59c5029e504504992c88df427ec386&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/75e443454f9cf7bfba62dc79f4296a1a0655fc1f38650cec4d98c40c7b0a8188?apiKey=fd59c5029e504504992c88df427ec386&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75e443454f9cf7bfba62dc79f4296a1a0655fc1f38650cec4d98c40c7b0a8188?apiKey=fd59c5029e504504992c88df427ec386&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/75e443454f9cf7bfba62dc79f4296a1a0655fc1f38650cec4d98c40c7b0a8188?apiKey=fd59c5029e504504992c88df427ec386&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/75e443454f9cf7bfba62dc79f4296a1a0655fc1f38650cec4d98c40c7b0a8188?apiKey=fd59c5029e504504992c88df427ec386&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75e443454f9cf7bfba62dc79f4296a1a0655fc1f38650cec4d98c40c7b0a8188?apiKey=fd59c5029e504504992c88df427ec386&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/75e443454f9cf7bfba62dc79f4296a1a0655fc1f38650cec4d98c40c7b0a8188?apiKey=fd59c5029e504504992c88df427ec386&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/75e443454f9cf7bfba62dc79f4296a1a0655fc1f38650cec4d98c40c7b0a8188?apiKey=fd59c5029e504504992c88df427ec386&"
              className="aspect-[0.71] object-contain object-center w-full overflow-hidden mt-6"
            />
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[73%] ml-5 max-md:w-full max-md:ml-0">
          <span className="flex grow flex-col mt-10 px-5 max-md:max-w-full">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                  <span className="flex grow flex-col items-stretch max-md:mt-10">
                    <div className="text-indigo-900 text-base font-semibold">
                      Title
                    </div>
                    <span className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-white mt-4 pl-6 pr-16 py-3 rounded-xl items-start max-md:px-5">
                      Brown Bear What do You See?
                    </span>
                    <div className="flex justify-between gap-5 mt-5 items-start">
                      <span className="flex grow basis-[0%] flex-col items-stretch">
                        <div className="text-indigo-900 text-base font-semibold">
                          Access Level
                        </div>
                        <select
                          //value={props.accessLevel} // Make sure to replace 'props.accessLevel' with the appropriate state/prop
                          //onChange={(e) => props.setAccessLevel(e.target.value)} // Make sure to replace 'props.setAccessLevel' with the appropriate state-setting function/prop
                          className="text-black text-base whitespace-nowrap justify-center shadow-sm bg-white mt-4 pl-6 pr-16 py-3 rounded-xl items-start max-md:px-5"
                        >
                          <option value="Free">Free</option>
                          <option value="Premium">Premium</option>
                          <option value="Premium+">Premium+</option>
                        </select>
                      </span>
                      <span className="flex basis-[0%] flex-col items-stretch">
                      <div className="text-indigo-900 text-base font-semibold whitespace-nowrap">
                          Pages
                        </div>
                        <span className="text-black text-base font-medium whitespace-nowrap items-stretch shadow-sm bg-zinc-100 justify-center mt-3.5 pl-5 pr-14 py-4 rounded-xl max-md:px-5">
                          24
                        </span>
                      </span>
                    </div>
                    <div className="text-indigo-900 text-base font-medium mt-5">
                      Tags
                    </div>
                  </span>
                </div>
                <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                  <span className="flex flex-col items-stretch max-md:mt-10">
                    <div className="text-indigo-900 text-base font-semibold">
                      Age Group
                    </div>
                    <span className="justify-between shadow-sm bg-white flex gap-4 mt-3.5 pl-6 pr-2.5 py-3 rounded-xl items-start max-md:pl-5">
                      <div className="text-black text-base">3-5 years old</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5cd366892911d3dab2d949265ee6ae3afe7b533be7b9e126dff7d8b539469b3?apiKey=fd59c5029e504504992c88df427ec386&"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                      />
                    </span>
                  </span>
                  
                </div>
                <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
                  <span className="flex flex-col items-stretch max-md:mt-10">
                    <div className="text-indigo-900 text-base font-semibold">
                      Read Time
                    </div>
                    <span className="text-black text-base whitespace-nowrap justify-center items-stretch shadow-sm bg-white mt-4 pl-6 pr-11 py-3 rounded-xl max-md:px-5">
                      10 minutes
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5 self-start max-md:max-w-full max-md:flex-wrap">
              <span className="text-white text-center text-base font-medium whitespace-nowrap justify-center items-stretch bg-amber-600 self-center grow my-auto px-2 py-0.5 rounded-md">
                Animals
              </span>
              <span className="text-white text-center text-base font-medium whitespace-nowrap justify-center items-stretch bg-amber-600 self-center grow my-auto px-2 py-0.5 rounded-md">
                Colours
              </span>
              <span className="text-white text-center text-base font-medium whitespace-nowrap justify-center items-stretch bg-amber-600 self-center aspect-[2.9583333333333335] my-auto px-2 py-0.5 rounded-md">
                Family
              </span>
              <span className="text-white text-center text-base font-medium whitespace-nowrap justify-center items-stretch bg-amber-600 self-center grow my-auto px-2 py-0.5 rounded-md">
                Kindness
              </span>
              <span className="justify-between items-stretch border self-stretch flex gap-2.5 px-4 py-3 rounded-xl border-solid border-slate-400">
                <div className="text-slate-400 text-sm font-medium leading-5">
                  Tags
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/59502b2007b2ee07b3b3ed661e436f58944091c768f375de7fc52820219dbb25?apiKey=fd59c5029e504504992c88df427ec386&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
              </span>
            </div>
            <div className="text-indigo-900 text-base font-semibold self-stretch mt-2 max-md:max-w-full">
              Description
            </div>
            <span className="text-black text-base justify-center items-stretch shadow-sm bg-white self-stretch mt-3.5 pl-6 pr-10 py-7 rounded-xl max-md:max-w-full max-md:px-5">
              A big happy frog, a plump purple cat, a handsome blue horse, and a
              soft yellow duck--all parade across the pages of this delightful
              book. Children will immediately respond to Eric Carle's flat,
              boldly colored collages. Combined with Bill Martin's singsong
              text, they create unforgettable images of these endearing
              animals.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
