<div align="center">

# Pokédexia

Uma Pokédex simples e rápida, feita com React e TypeScript, consumindo a [PokéAPI](https://pokeapi.co/).

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)

🚧 **Em desenvolvimento**

</div>

<!-- Quando tiver uma captura de tela, coloque aqui:
![Tela da Pokédexia](./docs/preview.png)
-->

## Sobre o projeto

A Pokédexia lista os Pokémon com busca por nome, filtro por tipo, paginação e uma página de detalhes com altura, peso, habilidade e status base.

O foco do projeto é praticar o que aparece no dia a dia de um front-end: componentes pequenos e reutilizáveis, tipagem forte e, principalmente, **os estados de uma tela que depende de API**: carregando, erro e vazio.

## Funcionalidades

- [x] Tipos do domínio e dados de exemplo (mock)
- [x] Componentes base: badge de tipo, botão, campo de busca, chip de filtro e barra de status
- [x] Card do Pokémon e skeleton de carregamento
- [ ] Tela de lista
- [ ] Estados de carregando, erro e vazio
- [ ] Busca por nome, filtro por tipo e paginação
- [ ] Página de detalhes
- [ ] Layout responsivo
- [ ] Integração com a PokéAPI usando TanStack Query
- [ ] Validação das respostas com Zod
- [ ] Deploy

## Tecnologias

| Área | Ferramentas |
| --- | --- |
| Interface | React, TypeScript |
| Estilo | Tailwind CSS v4, fonte Inter, ícones Lucide |
| Build | Vite |
| Dados (próximas etapas) | TanStack Query, Zod, PokéAPI |
| Design | Figma |

## Decisões do projeto

**Front-end primeiro, com dados falsos.** As telas foram construídas com um mock que já tem o formato final dos dados. Quando a API entra, só a fonte dos dados muda e os componentes continuam iguais.

**Os componentes não conhecem a API.** Eles recebem tudo por props. Quem busca os dados é um hook, e quem traduz a resposta da PokéAPI para o formato da aplicação é uma função separada. Isso também resolve detalhes da API, como altura em decímetros e peso em hectogramas.

**Estados tratados desde o começo.** Carregando, erro (com botão de tentar novamente) e busca sem resultado têm componentes próprios, desenhados no Figma antes do código.

**Cores sem gambiarra.** Cada tipo de Pokémon tem rótulo em português e classes do Tailwind escritas por inteiro num só arquivo, porque o Tailwind não gera classes montadas dinamicamente.

## Estrutura de pastas

```
src/
├── api/              # chamadas à PokéAPI, schemas e tradução dos dados
├── components/
│   ├── ui/           # peças genéricas: Button, SearchInput, FilterChip, StatBar, TypeBadge
│   └── pokemon/      # peças do domínio: PokemonCard, PokemonCardSkeleton, PokemonGrid
├── data/             # dados de exemplo (mock)
├── pages/            # telas
├── types/            # tipos do TypeScript
└── utils/            # formatadores, cores dos tipos e nomes dos status
```

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# clonar o repositório
git clone https://github.com/vbuarque/pokedexia.git
cd pokedexia

# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev
```

Depois é só abrir o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Créditos

Dados e imagens dos Pokémon fornecidos pela [PokéAPI](https://pokeapi.co/). Pokémon e seus nomes são marcas da Nintendo, Game Freak e The Pokémon Company. Este é um projeto de estudo, sem fins comerciais.

## Autor

Feito por **Vinicius Buarque**.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/vbuarque)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/vbgusmao)
[![Portfólio](https://img.shields.io/badge/Portfólio-4F46E5?style=flat&logo=vercel&logoColor=white)](https://vbportfolio.vercel.app/)
