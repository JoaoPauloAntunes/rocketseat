import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

type EpisodeProps = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  duration: string;
  durationAsString: string;
  url: string;
  description: string;
}

type EpisodeProps = {
  episode: string;
}

export default function Episode({ episode }: EpisodeProps) {
  const router = useRouter();
  
  return (
    <h1>{router.query.slug}</h1> /* "slug" é o mesmo nome que coloca entre colchetes no nome deste arquivo  */
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params; // "slug" é o mesmo nome que coloca entre colchetes no nome deste arquivo 

  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  };
  
  return {
    props: {
      episode,
    },
    revalidadte: 60 * 60 * 24, // 24 hours
  }
}