import { CreateLibrary } from '../../components/Aside/CreateLibrary/CreateLibrary';
import { Container } from '../../components/ui/Container';
import { Title } from '../../components/ui/Title';
import { NoContent } from './NoContent';

export default function Library() {
  return (
    <Container childrenSecond={<CreateLibrary />}>
      <Title>My library</Title>
      <NoContent />
    </Container>
  );
}
