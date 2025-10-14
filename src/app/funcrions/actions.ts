"use server";

import dotenv from "dotenv";
dotenv.config();

export interface ProductItem {
	name: string;
	main_category: string;
	sub_category: string;
	image: string;
	link: string;
	ratings: string;
	no_of_ratings: string;
	discount_price: string;
	actual_price: string;
}

interface RecommenderResponse {
	items: ProductItem[];
}

interface SummarizerResponse {
	response: string;
}

/**
 * Sends a POST request to the Recommender API with a given sentence.
 * @param sentence The sentence to be processed by the recommender system.
 * @returns A promise that resolves to an object containing recommended items.
 * @throws An error if the request fails.
 */
export const recommend: (sentence: string) => Promise<RecommenderResponse> = async (sentence) => {
	try {
		const url = "http://localhost:5291/API/Recommender";
		const apiKey = process.env.MY_API_KEY || (() => {
			throw new Error("API_KEY is not defined");
		})();

		const response = await fetch(url, {
			body: `"${sentence}"`,
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"MY-API-KEY": apiKey
			}
		});

		if (!response.ok) {
			throw new Error("Request failed with status: " + response.status);
		}
		return await response.json();
	} 
	catch (error) {
		console.log(error);
		throw error;
	}
}

/**
 * Summerizes a given text using a server running on localhost:8000
 * @param text The text to be summerized
 * @returns A promise that resolves to an object with a single property `response` which is the summerized text
 */
export const summerize: (text: string) => Promise<SummarizerResponse> = async (text) => {
	try {
		const url = "http://127.0.0.1:8000/process";
		const response = await fetch(url, {
			body: JSON.stringify({ text }),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			}
		});
	
		if (!response.ok) {
			throw new Error("Request failed with status: " + response.status);
		}
		const responseData = await response.text();
		return JSON.parse(responseData);
	} 
	catch (error) {
		console.log(error);
		throw error;
	}
}
