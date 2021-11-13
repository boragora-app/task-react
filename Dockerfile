FROM node:16-alpine
WORKDIR /app
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]
