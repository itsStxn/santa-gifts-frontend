import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

interface Props {
	className?: string;
}

const Canvas: React.FC<Props> = ({ className }) => {

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const gradientRef = useRef<NeatGradient | null>(null);

	useEffect(() => {

		if (!canvasRef.current)
				return;

		gradientRef.current = new NeatGradient({
				ref: canvasRef.current,
				colors: [
					{
						color: '#0b3954',
						enabled: true,
					},
					{
						color: '#087e8b',
						enabled: true,
					},
					{
						color: '#bfd7ea',
						enabled: true,
					},
					{
						color: '#ff5a5f',
						enabled: true,
					},
					{
						color: '#c81d25',
						enabled: true,
					},
			],
			speed: 4,
			horizontalPressure: 4,
			verticalPressure: 3,
			waveFrequencyX: 0,
			waveFrequencyY: 0,
			waveAmplitude: 0,
			shadows: 2,
			highlights: 7,
			colorBrightness: 1,
			colorSaturation: 8,
			wireframe: false,
			colorBlending: 5,
			backgroundColor: '#FF0000',
			backgroundAlpha: 1,
			grainScale: 0,
			grainIntensity: 0,
			grainSpeed: 0,
			resolution: 0.5,
		});

		return gradientRef.current.destroy;

	}, [canvasRef.current]);

	return (
		<canvas
				className={className}
				style={{
					position: "absolute",
					isolation: "isolate",
					height: "100%",
					width: "100%",
					zIndex: -1
				}}
				ref={canvasRef}
		/>
	);
};

export default Canvas;
