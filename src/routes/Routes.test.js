import { render, screen } from '../test/setup';
import AppRoutes from './Routes';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

// Set Up mock server to test routes
const server = setupServer(
    rest.post('/api/users/token/:token', (res, req, ctx) => {
        return res(ctx.status(200))
    })
);

beforeEach(() => {
    // counter = 0;
    server.resetHandlers();
});

beforeAll(() => server.listen());

afterAll(() => server.close());

    const setUp = (path) => {
        window.history.pushState({}, '', path);
        render(<AppRoutes />);
    };

describe('Routing', () => {
    // Test to check the correct page is/isn't show on specific path
    // -----displayed-----
    it.each`
        path                |   pageTestId
        ${'/'}              |   ${'home'}
        ${'/signup'}        |   ${'signup'}
        ${'/login'}         |   ${'login'}
        ${'/user/1'}        |   ${'user'}
        ${'/user/2'}        |   ${'user'}
        ${'/activate/123'}  |   ${'create-account'}
        ${'/activate/456'}  |   ${'create-account'}
    `
    ('displays $pageTestId when path is $path', ({path, pageTestId}) => {
        setUp(path);
        const page = screen.queryByTestId(pageTestId);
        expect(page).toBeInTheDocument();
    });

    // -----not displayed-----
    it.each`
        path                      |   pageTestId
        ${'/'}                    |   ${'signup'}
        ${'/'}                    |   ${'login'}
        ${'/'}                    |   ${'user'}
        ${'/'}                    |   ${'create-account'}
        ${'/signup'}              |   ${'home'}
        ${'/signup'}              |   ${'login'}
        ${'/signup'}              |   ${'user'}
        ${'/signup'}              |   ${'create-account'}
        ${'/login'}               |   ${'home'}
        ${'/login'}               |   ${'signup'}
        ${'/login'}               |   ${'user'}
        ${'/login'}               |   ${'create-account'}
        ${'/user/1'}              |   ${'home'}
        ${'/user/1'}              |   ${'signup'}
        ${'/user/1'}              |   ${'login'}
        ${'/user/1'}              |   ${'create-account'}
        ${'/activate/123'}        |   ${'signup'}
        ${'/activate/123'}        |   ${'login'}
        ${'/activate/123'}        |   ${'user'}
    `('does not display $pageTestId when path is $path', ({path, pageTestId}) => {
        setUp(path);
        const page = screen.queryByTestId(pageTestId);
        expect(page).not.toBeInTheDocument();
    });

});

console.error = () => {};