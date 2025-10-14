"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { summerize } from '../funcrions/actions';
import Reccomendations from './Reccomendations';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import Popup from './Popup';
import "./Display.css";

declare global {
	interface Window {
		webkitSpeechRecognition: any;
	}
}

interface Props { }

const Display: React.FC<Props> = () => {
	const [isRecording, setIsRecording] = useState<boolean>(false);
	const [transcript, setTranscript] = useState<string>('');
	const [sentences, setSentences] = useState<string[]>([]);
	const recognitionRef = useRef<any>(null);

	const startRecording = () => {
		setIsRecording(true);
		setTranscript('');
		recognitionRef.current.start();
	}

	const stopRecording = () => {
		setIsRecording(false);
		recognitionRef.current.stop();

		if (transcript === '') 	return;
		server_summerize(transcript);
	}

	const toggleRecording = () => {
		setIsRecording(!isRecording);
		if (isRecording) {
			stopRecording();
		} else {
			startRecording();
		}
	}

	const {data, mutate: server_summerize } = useMutation({
		mutationFn: summerize,
		onSuccess: (data) => {
			const responses = data.response.split('\n');
			const cleanedResponses = responses.map(res =>
				res.trim().replaceAll('"', '')
			);
			setSentences(cleanedResponses);
		},
		onError: (error) => {
			console.log(error)
		}
	})

	useEffect(() => {
		if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
			recognitionRef.current = new window.webkitSpeechRecognition();
			recognitionRef.current.continuous = true;
			recognitionRef.current.interimResults = true;

			recognitionRef.current.onresult = (event: any) => {
				const { transcript } = event.results[event.results.length - 1][0];
				setTranscript(transcript);
			};
		}
		return () => {
			if (recognitionRef.current) {
				recognitionRef.current.stop();
			}
		};
	}, []);

	return (
		<div className='Display w-[95%] place-self-center flex flex-col gap-2 items-center'>
			{/* Recorder Card */}
			<Popup isRecording={isRecording} transcript={transcript} />

			{/* Recorder Button */}
			<button 
				onClick={toggleRecording} 
				className="fill-[#f8f8f8] p-2 size-[4rem] rounded-md bg-[#e2e2e2] opacity-60 transition-all hover:opacity-100"
			>
				{isRecording ? <PauseIcon /> : <PlayIcon />}
			</button>

			{/* Reccomendations */}
			<div className="mt-20 max-w-full flex flex-col items-center gap-4">
				{data && sentences.map((sentence, i) => 
					<Reccomendations key={sentence + i} sentence={sentence} />)}
			</div>
		</div>
	)
}

	export default Display;
