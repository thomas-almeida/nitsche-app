import placeholders from '../utils/placeholders.json'
import { useState } from 'react';

export default function TranscriptField({ transcript, micAvailable }) {

  const [edit, setEdit] = useState(false);

  return (
    <div className="flex items-center justify-center my-4 w-2xl">
      <div className="w-full p-6 bg-white rounded-md border border-slate-200 shadow-md">
        <p className="text-gray-700 whitespace-pre-wrap font-mono text-md" contentEditable={edit}>
          {
            micAvailable
              ? transcript !== ''
                ? transcript
                : placeholders.message
              : placeholders.content
          }
        </p>
        <button
          className={`${transcript == '' ? 'hidden' : 'mt-6 px-6 py-2 rounded cursor-pointer border border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md hover:border-slate-400 '}`}
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'Salvar' : 'Editar'}
        </button>
      </div>
    </div>
  );
}