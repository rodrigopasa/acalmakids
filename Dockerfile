# =========================
# Etapa 1: Build
# =========================
FROM node:18-alpine AS builder

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar TODAS as dependências (produção + desenvolvimento)
RUN npm ci

# Copiar todo o código
COPY . .

# Gerar a build
RUN npm run build


# =========================
# Etapa 2: Execução
# =========================
FROM node:18-alpine

WORKDIR /app

# Copiar apenas arquivos de produção
COPY package*.json ./

# Instalar apenas dependências de produção
RUN npm ci --omit=dev

# Copiar build pronta da etapa anterior
COPY --from=builder /app/dist ./dist

# Criar usuário não-root por segurança
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expor porta
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["npm", "start"]
