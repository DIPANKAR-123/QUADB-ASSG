import React from "react";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
function SingleContent({
  id,
  name,
  language,
  rating,
  imageMedium,
  imageOriginal,
  length,
  type,
  summary,
  link,
}) {
  const removeHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  const cleanSummary = removeHtmlTags(summary);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <button onClick={toggleModal} className="  " type="button">
          <div className="text-white border-3 flex flex-col sm:w-[200px] p-1 m-1 bg-black rounded-[10px]  relative font-serif hover:bg-white hover:text-black w-[350px] ">
            {/* {
        console.log(rating)
      } */}
            <Badge
              badgeContent={
                rating.average === null ? "N/A" : `${rating.average}`
              }
              color="primary"
            ></Badge>
            <img
              src={
                imageMedium === "null"
                  ? "https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                  : imageMedium
              }
              className="min-h-[270px]"
              alt={name}
            />

            <b className="w-full text-center  py-2">{name}</b>
            <span className="flex justify-between pb-1 mx-1 font-sans">
              {length ? length : 60} minutes
              <span className="font-sans">{type}</span>
            </span>
          </div>
        </button>

        {isModalOpen && (
          <div
            id="static-modal"
            data-modal-backdrop="static"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 right-0 left-0 z-50 flex justify-center custom-sm:mt-24 mt-12 md:mt-36  h-full"
          >
            <div className=" p-5 custom-sm:p-4  w-full max-w-5xl max-h-full ">
              <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex w-full justify-between border-b  ">
                  <div className="flex w-[100%] items-center justify-around p-4 md:p-5 rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                      {name}
                    </h3>
                  </div>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white "
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-1 custom-sm:p-4  md:p-5 space-y-4"></div>
                <div className="mx-1 custom-sm:mx-3 flex flex-col lg:flex-row  justify-between  overflow-y-hidden  scrollbar-none">
                  <img
                    src={imageMedium === "null"
                    ? "https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                    : imageMedium}
                    alt=""
                    className="h-[200px] md:h-full shadow-lg "
                  />
                  <div className="mx-2 flex  flex-col ">
                    <p className="custom-sm:mb-3   text-center">SUMMARY</p>
                    <p
                      className="mx-3"
                      dangerouslySetInnerHTML={{ __html: cleanSummary }}
                    />
                    <div className="flex custom-sm:mt-4 mt-1 flex-row justify-around mb-4">
                      <p>Language: <span className="text-blue-500">{language}</span> </p>
                      <p>Genre: <span className="text-blue-500">{type}</span></p>
                    </div>
                    <Button
                      className="p-4"
                      variant="contained"
                      href={link}
                      target="_blank"
                    >
                      View More
                    </Button>
                  </div>
                </div>
                <div className=" p-4 md:p-5  "></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SingleContent;
