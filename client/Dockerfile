FROM node:22-alpine

WORKDIR /app

# Copia package.json y yarn.lock
COPY package.json yarn.lock ./

# Instala las dependencias
RUN yarn install

# Copia el resto de la aplicación
COPY . .

# Exponer el puerto que Vite usará
EXPOSE 5173

# Comando para iniciar la aplicación en modo desarrollo
CMD ["yarn", "dev"]


#COMANDOS PARA EJECUTAR DOCKERFILE
#COMANDO 1
# docker build -t clientreact .
#COMANDO 2
#docker run -it -p 3000:5173 clientreact
