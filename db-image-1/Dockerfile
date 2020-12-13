# base image (mysql) used to create my image
FROM mysql:5.7

# set the root password to manager
ENV MYSQL_ROOT_PASSWORD "manager"

# create a database named ecommerce_db
ENV MYSQL_DATABASE "practice"

#copy file named db.sql from my machine to
#/docker-entrypoint-initdb.d of container
COPY ./db.sql /docker-entrypoint-initdb.d/