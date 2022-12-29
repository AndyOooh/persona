import QuestionCard from './components/questionCard';
import TestStart from './components/testStart';

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

async function Test({ searchParams }: Props) {
  console.log('🚀  file: page.tsx:10  searchParams', searchParams);
  console.log('Has question param:', !!searchParams?.question);
  return searchParams?.question ? <QuestionCard /> : <TestStart />;
}

export default Test;
