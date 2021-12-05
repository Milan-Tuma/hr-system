import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = (props) => {
	const content = (
		<div className="modal-container" onClick={props.onClose}>
			<div className="modal-close">
				<i className="far fa-times-circle" />
			</div>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-child">{props.children}</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById('modal'));
};

export default Modal;
