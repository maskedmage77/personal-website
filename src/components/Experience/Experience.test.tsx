import { render } from '../../../test-utils';
import { Experience } from './Experience';

test('renders Experience component with correct title', () => {
  const { getByText } = render(<Experience />);
  const titleElement = getByText('Experience');
  expect(titleElement).toBeInTheDocument();
});

test('renders each experience card with title and time', () => {
  const { getAllByText } = render(<Experience />);
  const titles = getAllByText(/Markedly, LLC|BlindRobot|Ivy Tech/); // Replace with your actual titles
  const times = getAllByText(/July 2023 - Present|August 2021 - July 2023|August 2017 - June 2019/); // Replace with your actual times

  expect(titles.length).toBeGreaterThanOrEqual(3) // Ensure there at least 3 titles
  expect(times.length).toBeGreaterThanOrEqual(3); // Ensure there are 3 times
});

test('renders language badges for each experience', () => {
  const { getAllByText } = render(<Experience />);
  const languageBadges = getAllByText(/Typescript|Javascript|GDScript|PHP|C#|Java|Python/); // Replace with your actual languages

  expect(languageBadges.length).toBeGreaterThan(0); // Ensure there are at least some language badges
});

test('renders technology badges for each experience', () => {
  const { getAllByText } = render(<Experience />);
  const technologyBadges = getAllByText(/React Native|Expo|Payload CMS|Auth0|React|NextJS|Node|Laravel|Docker|\.Net Core|GCP|Wordpress|Spring|JavaFX|TKinter/); // Replace with your actual technologies

  expect(technologyBadges.length).toBeGreaterThan(0); // Ensure there are at least some technology badges
});