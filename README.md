# AutoCar Brasil

Aplicacao web para catalogo e captacao de contatos de uma operacao de eletronica automotiva. O projeto apresenta modulos ECU, paineis, imobilizadores e servicos tecnicos, com area administrativa conectada ao Supabase.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Supabase
- Vitest

## Funcionalidades

- Landing page responsiva para servicos de eletronica automotiva.
- Catalogo de produtos por categoria, marca, compatibilidade e disponibilidade.
- Paginas de autenticacao e administracao.
- Integracao Supabase tipada para persistencia e autenticacao.
- Suite inicial de testes automatizados.

## Como executar

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Depois de copiar o arquivo de ambiente, preencha:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

## Scripts

```powershell
npm run dev
npm run build
npm run lint
npm test
```

## Estrutura

```text
src/components        Componentes da interface
src/pages             Paginas principais da aplicacao
src/data              Dados do catalogo
src/integrations      Clientes e tipos de integracoes externas
supabase/migrations   Historico de banco de dados
```

## Boas praticas aplicadas

- Variaveis sensiveis ficam fora do versionamento.
- `.env.example` documenta a configuracao necessaria sem expor credenciais.
- Build e testes podem ser executados localmente antes de publicar mudancas.
- Dados do catalogo possuem validacao automatizada minima para reduzir regressao.

## Proximos passos

- Adicionar testes de renderizacao das paginas principais.
- Criar fluxo completo de cadastro/edicao de produtos na area administrativa.
- Documentar politica de deploy e variaveis de ambiente de producao.
