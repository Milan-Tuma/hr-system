import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
import Layout from './components/ui/Layout';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<App />
			</Layout>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
