# Stage 1: build
FROM node:18-alpine AS build

WORKDIR /app

# Copiar arquivos de definição de dependências
COPY package*.json ./

# Instalar todas dependências (prod + dev) para build funcionar
RUN npm ci

# Copiar todo o código fonte
COPY . .

# Rodar build da aplicação
RUN npm run build

# Stage 2: produção
FROM node:18-alpine AS production

WORKDIR /app

# Definir NODE_ENV para produção
ENV NODE_ENV=production

# Copiar apenas arquivos de dependências e código buildado
COPY package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

# Instalar apenas dependências de produção
RUN npm ci --omit=dev

# Expor a porta que seu app usa
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["node", "dist/index.js"]
