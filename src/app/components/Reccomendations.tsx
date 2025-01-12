"use client";

import Loader from './Loader';
import React, { useEffect } from 'react';
import { recommend } from '../funcrions/actions';
import { useMutation } from '@tanstack/react-query';
import RecommendationCard from './RecommendationCard';

type Props = {
	sentence: string;
}

const Reccomendations: React.FC<Props> = ({ sentence }) => {
	const { isPending, data, mutate: server_recommend } = useMutation({
		mutationFn: recommend,
		onError: (error) => {
			console.log(error)
		}
	});

	useEffect(() => {
		server_recommend(sentence);
	}, [])

	return (
		<div className={isPending ? 'size-fit' : 'flex max-w-full overflow-x-auto no-scrollbar gap-2'}>
			{ isPending ? <Loader /> : 
				data?.items.map((item, i) => 
					<RecommendationCard item={item} key={item.name + i} /> ) }
		</div>
	)
}

export default Reccomendations;
