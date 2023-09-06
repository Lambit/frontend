import Home from './Home';
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


describe('Home Page', () => {
  describe('Layout', () => {
    it('is Home Page',  async () => {
      render(<Home />);
      const page =  await screen.findAllByTestId('home');
      expect(page).toBeTruthy();
    });
    it('has title', async () => {
        render(<Home />);
        const title =  await screen.findAllByTestId('home-title');
        expect(title).toBeTruthy();
    }); 
    it('has image', async () => {
        render(<Home />);
        const img =  await screen.findAllByTestId('home-img');
        expect(img).toBeTruthy();
    }); 
    it('has button', () => {
        render(<Home />);
        const button =  screen.queryAllByRole('button', {name: 'Sign Up'});
        expect(button).toBe(button)
    });  
  });
});