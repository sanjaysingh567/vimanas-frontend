import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const CandidateAnswer = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <h2>Candidate Answer</h2>
      <button onClick={SpeechRecognition.startListening}>Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      <button onClick={resetTranscript}>Reset</button>
      <p><strong>Transcript:</strong> {transcript}</p>
      <p><strong>Microphone:</strong> {listening ? 'On' : 'Off'}</p>
    </div>
  );
};

export default CandidateAnswer;