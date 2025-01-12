import React from 'react';
import './Loader.css';

type Props = {};

const Loader: React.FC<Props> = () => {
	return (
		<div className="banter-loader">
			<div className="banter-loader__box"></div>
			<div className="banter-loader__box"></div>
			<div className="banter-loader__box"></div>
			<div className="banter-loader__box"></div>
			<div className="banter-loader__box"></div>
			<div className="banter-loader__box"></div>
			<div className="banter-loader__box"></div>
			<div className="banter-loader__box"></div>
			<div className="banter-loader__box"></div>
		</div>
	)
}

export default Loader;
