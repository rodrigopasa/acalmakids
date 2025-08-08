# Etapa 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copia package.json e package-lock.json e instala dependências
COPY package*.json ./
RUN npm ci

# Copia todo o código
COPY . .

# Build do frontend e backend
RUN npm run build

# Etapa 2: Produção
FROM node:18-alpine AS production

WORKDIR /app

# Copia os arquivos necessários da etapa build para a imagem final
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Exponha a porta que seu app usa (ajuste se necessário)
EXPOSE 5000

# Comando para iniciar seu servidor
CMD ["node", "dist/index.js"]
