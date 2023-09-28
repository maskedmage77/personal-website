import { render, screen } from '../../../test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {

  it('renders correctly', () => {
    render(<Welcome />);

    // Check if the title is rendered
    expect(screen.getByText(/Hello!/i)).toBeInTheDocument();

    // Check if the text is rendered
    expect(
      screen.getByText(
        /I am a software developer who specializes in creating full-stack applications./i
      )
    ).toBeInTheDocument();

    // Check if the social media icons are rendered
    expect(screen.getByLabelText('Github')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  });

});
