FROM node

MAINTAINER Bo <yeungbo@gmail.com>


WORKDIR /home/project

EXPOSE 3000

CMD ["npm","start"]