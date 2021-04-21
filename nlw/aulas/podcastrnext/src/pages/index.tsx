import { GetStaticProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '../services/api';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  duration: string;
  durationAsString: string;
  description: string;
  url: string;
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => { // executa toda vez que alguém acessar a HOME ("/") da aplicação 
    const { data } = await api.get('episodes', {
      params: {
        _limit: 12,
        _sort: 'published_at',
        _order: 'desc'
      }
    });

    const episodes = data.map(episode => {
      return {
        id: episode.id,
        title: episode.title,
        thumbnail: episode.thumbnail,
        members: episode.members,
        publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(episode.file.duration),
        durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
        description: episode.description,
        url: episode.file.url,
      }
    });
  
    return {
      props: { // o que é retornado aqui, é repassado para o componente function Home no argumento props
        episodes: episodes,
      },
      revalidate: 60 * 60 * 8, // a cada 8 horas, quando a pessoa acessar esta página, a pessoa vai gerar uma nova versão desta página
    }
  }