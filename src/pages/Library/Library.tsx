import { CreateLibrary } from '../../components/Aside/CreateLibrary/CreateLibrary';
import { BooksMarkup } from '../../components/BooksMarkup/BooksMarkup';
import { Container } from '../../components/ui/Container';
import { Title } from '../../components/ui/Title';
import { NoContent } from './NoContent';
import { useGetLibrary } from './useGetLibrary';

export default function Library() {
  const { data, isLoading } = useGetLibrary();

  return (
    <Container childrenSecond={<CreateLibrary />}>
      <div className="mb-[28px]">
        <Title>My library</Title>
      </div>
      {!!data && !isLoading ? <BooksMarkup data={data} /> : <NoContent />}
    </Container>
  );
}
