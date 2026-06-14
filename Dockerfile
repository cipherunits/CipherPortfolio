FROM node:20

# set name of the working directory

LABEL cipherUnit.author="amigolli"
LABEL type="production"


# Set the working directory

WORKDIR /app

# install pnpm globally
RUN npm install -g pnpm@10.5.1

#copy package.json and pnpm-lock.yaml to the working directory

COPY package*.json pnpm-lock.yaml* ./

# install dependencies

RUN pnpm install

#copy the rest of the application code to the working directory

COPY . .

#build the application
RUN pnpm build


#set port for the application

EXPOSE 3000

#start the application
CMD ["pnpm", "start"]
