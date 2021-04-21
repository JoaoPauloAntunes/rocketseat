import { GetStaticProps } from 'next';
import { api } from '../services/api';


type Episode = {
  id: string;
  title: string;
  members: string;
  // ...
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
  
    return {
      props: { // o que é retornado aqui, é repassado para o componente function Home no argumento props
        episodes: data,
      },
      revalidate: 60 * 60 * 8, // a cada 8 horas, quando a pessoa acessar esta página, a pessoa vai gerar uma nova versão desta página
    }
  }