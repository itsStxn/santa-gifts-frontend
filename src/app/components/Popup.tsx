import React from 'react';

type Props = {
	isRecording: boolean;
	transcript: string;
}

const Popup: React.FC<Props> = ({isRecording, transcript}) => {
	return (
		<div className="flex shadow-lg flex-col gap-1 w-[25rem] h-fit bg-transparent backdrop-blur-2xl  p-5 rounded-md">
			<h1 className='flex justify-between items-center font-bold'>
				{isRecording ? 'Recording' : 'Ready to listen'}
				<div className={"top-5 right-5 size-5 rounded-full bg-red-400" + (isRecording ? ' animate-ping' : '')} />
			</h1>
			{isRecording ? <p>I am listening...</p> : <p>I am all ears!</p>}
			{transcript && (
				<div className="w-full mt-2 bg-[#ffffff5d] text-white rounded-md p-2">
					{transcript}
				</div>
			)}
		</div>
	)
}

export default Popup;
