# 1. Pega uma imagem base levinha já com Node.js instalado
FROM node:20-alpine

# 2. Cria a pasta onde o seu código vai morar lá dentro
WORKDIR /app

# 3. Copia SÓ os arquivos de configuração de pacotes primeiro. 
# Isso otimiza o cache do Docker e deixa os próximos builds muito mais rápidos.
COPY package.json package-lock.json ./

# 4. Instala as dependências limpas
RUN npm install

# 5. Agora sim, copia todo o resto do seu código para dentro do contêiner
COPY . .

# 6. Como estamos usando TypeScript, precisamos gerar a pasta /dist. 
# (Se fosse JS puro, essa linha não existiria)
RUN npm run build

# 7. Documenta qual porta a aplicação vai usar internamente
EXPOSE 4173

# 8. O comando final para dar a partida no servidor (ajuste para o seu script)
CMD ["npm", "run", "start", "preview", "--", "--host"]