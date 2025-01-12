"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ProductItem } from "../funcrions/actions";

interface RecommendationCardProps {
	item: ProductItem;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ item }) => {
	const isDiscounted = item.discount_price !== item.actual_price;
	const [imgSrc, setImgSrc] = useState(item.image);

	return (
		<a
			href={item.link}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex-shrink-0 block w-[20rem] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
		>
			{/* Product Image */}
			<div className="relative w-full h-48 overflow-hidden">
			<Image
				src={imgSrc}
				alt={item.name}
				fill
				className="object-cover group-hover:scale-105 transition-transform duration-300"
				onError={() => setImgSrc("/amazon.png")}
			/>
			</div>

			{/* Product Content */}
			<div className="p-4">

			{/* Product Name */}
			<h2 className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors line-clamp-2">
				{item.name}
			</h2>

			{/* Category */}
			<p className="text-sm text-gray-500 mt-1">
				{item.main_category} • {item.sub_category}
			</p>

			{/* Pricing */}
			<div className="mt-2 flex items-center space-x-2">
				<span className="text-xl font-bold text-green-600">
					{item.discount_price}
				</span>
				{isDiscounted && (
					<span className="text-sm line-through text-gray-400">
					{item.actual_price}
					</span>
				)}
			</div>

			{/* Ratings */}
			<div className="mt-2 flex items-center">
				<FaStar className="text-yellow-400" />
				<span className="ml-1 text-sm font-medium text-gray-700">
					{item.ratings}{" "}
					<span className="text-gray-500">({item.no_of_ratings})</span>
				</span>
			</div>

			{/* Call to Action */}
			<button className="mt-4 w-[60%] flex justify-center place-self-center  py-2 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600 transition-colors">
				View Product
			</button>
			</div>
		</a>
	);
};

export default RecommendationCard;
