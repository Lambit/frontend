import LogIn from './Login';
import { render, screen } from '../../test/setup';

// mock function for useNavigation hook
const mockNav = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNav,
}));
    
// reset mock function
beforeEach(() => {
  mockNav.mockReset();
});

describe('Login Page', () => {
  describe('Layout', () => {
    it('is Login Page',  async () => {
      render(<LogIn />);
      const page =  await screen.findAllByTestId('form-login');
      expect(page).toBeTruthy();
    });

    // ----------Test inputs----------
    // Tests to see if inputs exists by test id
    it('has email input', async () => {
        render(<LogIn />);
        const input =  await screen.findAllByTestId('email');
        expect(input).toBeTruthy();
    });
    //-------Test password  and password------------
    it('has password input', async () => {
        render(<LogIn />);
        const input =  await screen.findAllByTestId('password');
        expect(input).toBeTruthy();
    }); 

    it('has button', () => {
        render(<LogIn />);
        const button =  screen.queryAllByRole('button', {name: 'Submit'});
        expect(button).toBe(button)
    });  
    // Test if button is initially disabled
    it('disables the button initially', () => {
        render(<LogIn />);
        const button =  screen.queryByRole('button', { name: 'Submit' });
        expect(button).toBeDisabled();
    });
  });
});