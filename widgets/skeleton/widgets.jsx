import React from 'react';
import ReactDOM from 'react-dom';

import WidgetLoader from './frontend/widget_loader';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<WidgetLoader/>, root);
});
