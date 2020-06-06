<h1 align="center">
  <img alt="Ecoleta" title="#delicinha" src=".github/ecoleta.png" width="250px" />
  <br/>
  <img alt="Ecoleta" title="#delicinha" src=".github/logo.png" width="250px" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/raphabarreto/ecoleta">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/raphabarreto/ecoleta">
  
  <a href="https://github.com/raphabarreto/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/raphabarreto/ecoleta">
  </a>

  <a href="https://github.com/raphabarreto/ecoleta/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/raphabarreto/ecoleta">
  </a>

  <a href="https://github.com/raphabarreto/ecoleta/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <a>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<br>


---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [API do IBGE para consumo do endereço](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
- [Upload de imagens](react-dropzone)
- [Leaflet](https://leafletjs.com/examples/quick-start/)
- [Celebrate](https://github.com/arb/celebrate) 

## 💻 Projeto
Projeto desenvolvido durante a <strong>Next Level Week</strong> que tem como objetivo fins ecológicos. 
O <strong>Ecoleta</strong> serve como um Marketplace, uma conexão entre empresas ou entidade que coletam resíduos, sejam eles orgânicos ou inorgânicos, à pessoas que precisam fazer descarte dos resíduos.

## 🔨 Backend
<h1 align="center">
<a href="https://insomnia.rest/run/?label=Ecoleta&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fraphabarreto%2Fecoleta%2Fmaster%2Fserver%2FEcoleta.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a><img alt="Ecoleta Back-end" title="#delicinha" src=".github/backend.png" />
</h1>

## 🌐 Frontend
<h1 align="center">
    <img alt="Ecoleta Front-end" title="#delicinha" src=".github/frontend.gif" />
</h1>

## 📱 Mobile
<h1 align="center">
    <img alt="Ecoleta Mobile" title="#delicinha" src=".github/mobile.gif" />
</h1>

## 🔥 Instalação

```bash
# Clone este repositório
$ git clone git@github.com:raphabarreto/ecoleta.git

# Navegue em cada pasta: server / web / mobile e instale as depedências:
$ yarn install

# Navegue até a pasta server e execute os seguintes comandos:
$ yarn knex:migrate
$ yarn knex:seed
$ yarn dev:server

# Depois disso, entre na pasta web e execute o comando:
$ yarn start

# E finalmente, entre na pasta mobile e execunte o comando:
$ expo start

# Observações:
- Não esqueça de mudar a baseURL no arquivo api.ts das pastas web e mobile para o ip da sua máquina
```


## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


## 🧾 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💗 by [Raphael Barreto](https://bit.ly/contato-linkedin)