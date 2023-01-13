import { render } from '@testing-library/react';
import AboutDetail from './about-detail';

describe('AboutDetail', () => {
    it('should render successfully', () => {
        const { baseElement } = render(< AboutDetail />);
        expect(baseElement).toBeTruthy();
    });
});
