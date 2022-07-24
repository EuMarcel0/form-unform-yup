import { render } from '@testing-library/react';
import { App } from './App';

describe('Testing for App', () => {
	it('should render without throwing an error', () => {
		const { getByText } = render(<App />);

		expect(getByText('Home')).toBeInTheDocument();
	});
});


export { };
