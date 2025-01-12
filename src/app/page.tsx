"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Display from "./components/Display";
import Canvas from "./components/Canvas";
import React, { useState } from "react";


const Home: React.FC = () => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Canvas />
			<main className="w-screen h-fit p-10 pt-[10rem] flex flex-col gap-[10rem] justify-center">
				<h1 className="text-center place-self-center text-5xl font-thin">
					<span className="animate-color">Santa</span>Gift Recommender
				</h1>
				<Display />
			</main>
		</QueryClientProvider>
	);
}

export default Home;
