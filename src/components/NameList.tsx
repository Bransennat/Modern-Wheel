// src/components/NameList.tsx (With Hidden Textarea during spin)

import { useNameStore } from '../store/nameStore';

const NameList = () => {
  const { names, rawText, isSpinning, updateNamesFromText, shuffleNames, sortNames } = useNameStore();

  return (
    // The main container uses flexbox to structure its children
    <div className="bg-slate-800 rounded-lg shadow-lg p-4 h-full flex flex-col gap-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Entries</h2>
        <span className="bg-slate-700 text-sm font-semibold px-2 py-1 rounded">
          {names.length}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={shuffleNames}
          disabled={isSpinning}
          className="flex items-center gap-1.5 text-sm bg-slate-600 hover:bg-slate-500 transition px-3 py-1.5 rounded-md disabled:bg-slate-600 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992h-4.992m0 0h4.992m-4.993 0-3.181-3.183a8.25 8.25 0 0 1 11.667 0l3.181 3.183" /></svg>
          Shuffle
        </button>
        <button
          type="button"
          onClick={sortNames}
          disabled={isSpinning}
          className="flex items-center gap-1.5 text-sm bg-slate-600 hover:bg-slate-500 transition px-3 py-1.5 rounded-md disabled:bg-slate-600 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>
          Sort
        </button>
      </div>

      {/* --- KEY CHANGE HERE --- */}
      {/* This container will hold either the textarea or the placeholder */}
      {/* It uses flex-grow to fill all available vertical space */}
      <div className="flex-grow min-h-0">
        {isSpinning ? (
          // If spinning, show this placeholder
          <div className="w-full h-full flex items-center justify-center bg-slate-950 border border-slate-700 rounded-md">
            <p className="text-slate-500 animate-pulse text-xl">Spin in progress...</p>
          </div>
        ) : (
          // Otherwise, show the normal textarea
          <textarea
            value={rawText}
            onChange={(e) => updateNamesFromText(e.target.value)}
            disabled={isSpinning}
            className="w-full h-full p-2 border border-slate-600 rounded-md bg-slate-900 text-white font-mono resize-none focus:outline-none whitespace-nowrap"
            spellCheck="false"
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default NameList;