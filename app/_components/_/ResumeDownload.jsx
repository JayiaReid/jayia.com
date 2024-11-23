
import React from 'react';

const ResumeDownload = () => {
  // allows user to download resume
  return (
    <button className="bg-transparent duration-300 outline hover:bg-white hover:text-black text-white resume-download rounded-es-md rounded-se-md my-5 flex justify-left">
      <a
        href="/resume.pdf"
        download="Resume_Jayia_Reid.pdf"
        className=" font-bold py-2 px-4 rounded"
      >
        Download My Resume
      </a>
    </button>
  );
};

export default ResumeDownload;
