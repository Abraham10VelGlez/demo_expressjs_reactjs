FROM node:22-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe), si no se crea 
COPY package*.json ./

# Instala las dependencias
RUN yarn install

# Instala nodemon globalmente
RUN yarn global add nodemon

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

# Define el comando para ejecutar tu aplicación
CMD ["nodemon", "server/index.js"]


#COMANDOS PARA EJECUTAR DOCKERFILE
#COMANDO 1
#docker build -t expressreact .
#COMANDO 2
#docker run -it -p 3000:3000 expressreact