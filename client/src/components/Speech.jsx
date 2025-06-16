
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import TranscriptField from './TranscriptField';

export default function Speech() {

  const [listeningMic, setListeningMic] = useState(false)

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function toggleListening() {
    if (listeningMic) {
      SpeechRecognition.stopListening();
      setListeningMic(false);
    } else {
      SpeechRecognition.startListening({ continuous: true });
      setListeningMic(true);
    }
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-4 p-6'>
        <div className='flex items-center justify-start w-2xl gap-2'>
          <button
            onClick={toggleListening}
            className='px-4 py-2 rounded cursor-pointer border border-slate-300 hover:shadow-md hover:border-slate-400'
          >
            {
              listeningMic
                ? 'Parar de Gravar'
                : 'Começar a Gravar'
            }
          </button>
          <button
            disabled={!listeningMic && transcript === ''}
            onClick={resetTranscript}
            className='px-4 py-2 rounded cursor-pointer border border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md hover:border-slate-400'
          >
            Apagar e Limpar
          </button>
        </div>
        <TranscriptField
          transcript={transcript}
          micAvailable={isMicrophoneAvailable}
        />
      </div>
    </>
  )

}