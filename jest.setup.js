// jest.setup.js
import fetch from 'node-fetch';
global.fetch = fetch;
import '@testing-library/jest-dom';