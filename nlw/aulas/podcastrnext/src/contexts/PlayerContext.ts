import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[]; // ou Array<Episode>
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  tooglePlay: () => void;
}
/*
no parâmetro em createContext, podemos passar qualquer valor; é o valor inicial do contexto
na prática, o valor do parâmetro não é muito utilizado, fica mais como um "valor de exemplo" 
para nosso contexto
*/
export const PlayerContext = createContext({} as PlayerContextData);