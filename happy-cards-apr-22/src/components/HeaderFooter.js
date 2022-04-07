export default function HeaderFooter(props) {
	return (
		<div>
			<div classname='Logo'>HappyCards</div>
			{props.children}
			<div classname='Copywrite'>2022 Susana Martins</div>
		</div>
	);
}
