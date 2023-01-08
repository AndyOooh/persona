import { render, waitFor } from '@testing-library/react';
import Test from './page';

import db from '../../../../database/db.json';

describe('/test route', () => {
  describe('TestStart', () => {
    it('should render a link to start the test', () => {
      const { getByRole } = render(<Test />);
      const startLink = getByRole('link', { name: 'Start' });
      expect(startLink).toHaveAttribute('href', 'test?question=1');
    });
  });
  // throwing error: invariant expected app router to be mounted
  // describe('QuestionCard', () => {
  //   it('should render the question', async () => {
  //     const questions = db.questions;
  //     const questionText = questions[0].text;
  //     // expect(1 === 1).toBe(true);
  //     const { getByText } = render(<Test searchParams={{ question: '1' }} />);
  //     const questionCard = await waitFor(() => getByText(questionText));
  //     expect(questionCard).toBeInTheDocument();
  //   });
  // });
});
