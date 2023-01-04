import QuestionCard from './components/QuestionCard';
import TestStart from './components/TestStart';

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

function Test({ searchParams }: Props) {
  return searchParams?.question ? <QuestionCard /> : <TestStart />;
}

export default Test;
