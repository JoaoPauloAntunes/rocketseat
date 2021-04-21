// SPA (não usar quando as informações que serão obtidas com esta estratégia precisarem estar disponíveis assim que a página é exibida para o usuário; o Crawler não vai indexar isso) 
// SSR
// SSG (SÓ FUNCIONA EM PRODUÇÃO; utilizar quando deseja-se cacher a página no servidor (fazer uma versão estática do site no servidor)- performance; ex.: 1 milhão de pessoas acessa a mesma página no mesmo dia => cachear site no servidor uma vez por dia)

import { useEffect } from "react";


// export default function Home() {
//   useEffect( // SPA
//     () => {
//       fetch('http://localhost:3333/episodes')
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }, // o que fazer 
//     [] // quando; "[]" significa que a função vai ser executada assim que o componente for exibido em tela, uma única vez
//   )

//   return (
//     <h1>Index</h1>
//   )
// }


export default function Home(props) {
  console.log(props.episodes);

  return (
    <h1>Index</h1>
  )
}

 // SSR
// export async function getServerSideProps() { // executa toda vez que alguém acessar a HOME ("/") da aplicação 
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();

//   return {
//     props: { // o que é retornado aqui, é repassado para o componente function Home no argumento props
//       episodes: data,
//     }
//   }
// }

// SSG 
// AVISO: criar build do projeto para ver isso funcionando em produção!
export async function getStaticProps() { // executa toda vez que alguém acessar a HOME ("/") da aplicação 
    const response = await fetch('http://localhost:3333/episodes');
    const data = await response.json();
  
    return {
      props: { // o que é retornado aqui, é repassado para o componente function Home no argumento props
        episodes: data,
      },
      revalidate: 60 * 60 * 8, // a cada 8 horas, quando a pessoa acessar esta página, a pessoa vai gerar uma nova versão desta página
    }
  }