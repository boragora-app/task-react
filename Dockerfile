FROM node:14

# COPY  app /
WORKDIR /app

EXPOSE 3000

CMD ["yarn", "start"]

