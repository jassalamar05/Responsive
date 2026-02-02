FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5173

# Important: Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
