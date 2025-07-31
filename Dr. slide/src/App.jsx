import React from "react";
import { UploadCloud } from "lucide-react";

export default function SlideProfLanding() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 py-10">
      {/* Logo and Title */}
      <div className="flex items-center justify-center space-x-2 mb-10">
        <img src="/logo.png" alt="Dr. Slides" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-blue-600">Dr. Slides</h1>
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 max-w-4xl leading-tight">
        Master Your Lecture Slides and videos with AI-Powered{" "}
        <span className="text-blue-600">Visualizations and interpretor</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg text-center text-gray-600 max-w-xl">
        Say goodbye to Complex slides. Upload your lecture slides/Video and
        watch as our AI explains complex concepts while drawing directly on them.
      </p>

      {/* Upload Box */}
      <div className="mt-10 border-2 border-dashed border-gray-300 rounded-xl p-10 w-full max-w-xl text-center">
        <UploadCloud className="mx-auto text-gray-400 w-10 h-10 mb-4" />
        <p className="text-gray-700 mb-4">
          Drag and drop your lecture slides (PDF) here, or
        </p>
        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Select file
        </button>
      </div>
    </div>
  );
}
