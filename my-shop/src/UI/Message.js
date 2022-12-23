import React from 'react';
import './Message.css';

const Message = (props) => {
	return (
		<div className='margin-section'>
			<div className='message-box'style={props.style}>{props.children}</div>
		</div>
	);
};

export default Message;
