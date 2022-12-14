import { render, screen } from '@testing-library/react';
import CardActivity from './CardActivity';

test('renders the component CardActivity', async () => {
  const activityData = {
    title: "Social",
    time: {
      current: 5,
      previous: 10,
    },
    period: "Last Week"
  };

  render(<CardActivity title={activityData.title}
    time={activityData.time}
    period = {activityData.period}/>);

  const titleActivity = screen.getByText(/Social/);
  expect(titleActivity).toBeInTheDocument();

  const currentActivityTime = screen.getByText(/5hrs/);
  expect(currentActivityTime).toBeInTheDocument();

  const previousActivityTime = screen.getByText(/Last Week - 10hrs/);
  expect(previousActivityTime).toBeInTheDocument();

});
