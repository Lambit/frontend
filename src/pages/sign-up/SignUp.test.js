import SignUp from "./SignUp";
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

describe('Sign Up Page', () => {
  describe('Layout', () => {
    it('is Sign Up Page',  async () => {
      render(<SignUp />);
      const page =  await screen.findAllByTestId('signup');
      expect(page).toBeTruthy();
    });

    // ----------Test inputs----------
    // Tests to see if inputs exists by test id
    it('has username input', async () => {
        render(<SignUp />);
        const input =  await screen.findAllByTestId('username');
        expect(input).toBeTruthy();
    }); 
    it('has email input', async () => {
        render(<SignUp />);
        const input =  await screen.findAllByTestId('email');
        expect(input).toBeTruthy();
    });
    //-------Test password  and passwordRepeat------------
    it('has password input', async () => {
        render(<SignUp />);
        const input =  await screen.findAllByTestId('password');
        expect(input).toBeTruthy();
    });  
    it('has password repeat input', async () => {
        render(<SignUp />);
        const input =  await screen.findAllByTestId('passwordRepeat');
        expect(input).toBeTruthy();
    });  
    it('has button', () => {
        render(<SignUp />);
        const button =  screen.queryAllByRole('button', {name: 'Sign Up'});
        expect(button).toBe(button)
    });  
    // Test if button is initially disabled
    it('disables the button initially', () => {
        render(<SignUp />);
        const button =  screen.queryByRole('button', { name: 'Sign Up' });
        expect(button).toBeDisabled();
    });
  });
})