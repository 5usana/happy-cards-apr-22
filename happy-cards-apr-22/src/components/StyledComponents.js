import styled from 'styled-components';

export const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'teal' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'teal')};
	//conditional styling ^
	font-size: 1em;
	margin: 0.5em;
	padding: 0.25em 1em;
	border: 2px solid teal;
	border-radius: 3px;
`;
