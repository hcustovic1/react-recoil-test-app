import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const { container } = render(<App />);
    expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            class="sc-bdnxRM iOCJYU"
          >
            <header
              class="sc-gtsrHT jfwppf"
            >
              <div>
                Sarma ovo je tvoj dashboard
              </div>
            </header>
          </div>
        </div>
    `);
});
