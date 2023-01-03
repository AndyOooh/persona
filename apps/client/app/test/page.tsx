import QuestionCard from './components/questionCard';
import TestStart from './components/testStart';

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

function Test({ searchParams }: Props) {
  return searchParams?.question ? <QuestionCard /> : <TestStart />;
}

export default Test;
