import { createContext } from 'react';

/*
no parâmetro em createContext, podemos passar qualquer valor; é o valor inicial do contexto
na prática, o valor do parâmetro não é muito utilizado, fica mais como um "valor de exemplo" 
para nosso contexto
*/
export const PlayerContext = createContext('');