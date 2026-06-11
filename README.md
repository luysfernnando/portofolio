# luysfernnando.dev

Portfolio de Luys Fernnando Ribeiro Caetano Brasil — Desenvolvedor Full Stack com 7+ anos em sistemas de missão crítica para o setor público.

Projetado para recrutadores e clientes diretos que avaliam senioridade técnica. A proposta é evidência antes de afirmação: histórico real, escala documentada, sem marketing pessoal.

---

## Seções

| Seção | Conteúdo |
|---|---|
| **Hero** | Apresentação editorial com métricas de carreira e acesso direto às seções principais |
| **Tecnologias** | Stack organizada por categoria: produto/frontend, backend/dados, operações e IA |
| **Linha do tempo profissional** | Experiências em ordem cronológica inversa — TRE-GO, Kernel Lab, Tradio Bank, SEDS |
| **Formação Acadêmica** | Graduação em Análise e Desenvolvimento de Sistemas — UCB (2021–2023) |
| **Projeto principal** | Case Electios: plataforma de eleições online operada por OAB GO, MT, RJ e outras instituições |
| **Contato** | Email, LinkedIn e GitHub — acesso direto, sem formulário |

---

## Funcionalidades

**Internacionalização (i18n)**
Três idiomas suportados com detecção automática via `navigator.language` e persistência em `localStorage`.

| Locale | Idioma |
|---|---|
| `en_US` | English (padrão) |
| `pt_BR` | Português |
| `es_ES` | Español |

Todo conteúdo textual vive em `src/locales/{locale}/common.json`. Trocar idioma não recarrega a página.

**Tema claro/escuro**
Alternância via `useThemeContext()`. Tokens centralizados em `src/styles/theme.ts`, detecta preferência do sistema na primeira visita.

**Animações de entrada**
Framer Motion com `react-intersection-observer` — cada seção anima ao entrar na viewport, sem layout shift.

**Performance**
SSR habilitado via `StyledComponentsRegistry`. Sem chamadas de API em runtime — todo conteúdo é estático e localizado.

---

## Stack

- **Next.js 14** — App Router, SSR
- **TypeScript** — tipagem completa dos locales e contextos
- **Styled Components** — design system baseado em tokens de tema
- **Framer Motion** — animações declarativas
- **Vercel Analytics + Speed Insights** — observabilidade de produção

---

## Desenvolvimento

```bash
# instalar dependências
npm install

# servidor de desenvolvimento
npm run dev

# build de produção
npm run build

# verificação de tipos
npx tsc --noEmit
```

---

## Estrutura relevante

```
src/
├── app/
│   ├── layout.tsx          # metadata, providers, SSR registry
│   └── page.tsx            # composição das seções
├── components/
│   ├── layout/             # Header, Footer
│   └── sections/           # Hero, Technologies, Experiences, Education, Projects, Contact
├── context/
│   ├── LanguageContext.tsx # i18n — useLanguage(), t(), setLocale()
│   └── ThemeContext.tsx    # tema — useThemeContext(), isDark
├── locales/
│   ├── en_US/common.json
│   ├── pt_BR/common.json
│   └── es_ES/common.json
└── styles/
    └── theme.ts            # tokens de cor, tipografia e espaçamento
```

---

## Personalização de conteúdo

Todo conteúdo é editável nos arquivos de locale sem tocar em componentes. Para alterar experiências, projetos ou dados de contato, edite `src/locales/pt_BR/common.json` (e os equivalentes `en_US`/`es_ES`).

Para temas e tokens visuais, edite `src/styles/theme.ts`.
