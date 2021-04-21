# commands
## abrir terminal do node
`$ node`

## Usar o objeto Node "process" para entrar com parâmetro ao iniciar um script
`$ node process João Paulo`
`$ node process --name "João Paulo" --greeting "tudo bem com você?"`

## ver a versão do NPM (Node Package Manager)
`$ npm -v`

## inicializar NPM
`$ npm init`

## listar pacotes NPM
`$ npm ls` 

## executar script registrado no package.json com a chave "start"
`$ npm run start`

## install package
`$ sudo npm install cfonts`

`$ npm fund`

## instalar dependência global
`$ sudo npm install opn -g`

## ver onde está localizada a pasta "node_modules" de dependências globais
`$ npm root -g`

## desinstalar um pacote que foi instalado globalmente
`$ sudo npm uninstall opn -g`

## verificar versões
`$ npm outdated`

## atualizar pacote npm
`$ sudo npm upgrade`

## desinstalar pacote npm
`$ sudo npm uninstall moment`

# versionamento em package.json
"dependencies": {
            // major.minor.patch
                // major: versão do projeto; funcionalidades podem quebrar de uma versão para outra
                // minor: significa versionamento sem quebrar as funcionalidades da versão em major
                // patch: significa versionamento para correção de bugs
    // "moment": "^2.29.1"  // quando o npm atualizar, vai manter major e vai atualizar minor e patch
    // "moment": "~2.29.1"  // quando o npm atualizar, vai manter major e minor e vai atualizar patch
    // "moment": "2.29.1"   // quando o npm atualizar, vai manter a versão
    "moment": "*"           // quando o npm atualizar, vai atualizar todas as versões (major, minor e patch)
}