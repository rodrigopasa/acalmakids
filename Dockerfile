# Usar a imagem oficial do Node.js
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código da aplicação
COPY . .

# Construir aplicação
RUN npm run build

# Expor porta
EXPOSE 5000

# Comando para iniciar aplicação
CMD ["npm", "start"]