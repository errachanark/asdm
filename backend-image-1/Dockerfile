#create the backend image with node as a base image
FROM node

#export port 4000
EXPOSE 4000

#copy everything from current directory on machine 
# to home directory on container
COPY . .

#Run a command when container starts
CMD ["node","server.js"]