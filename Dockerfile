FROM nginx
# COPY . /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
# RUN conf /etc/nginx/conf
# https://docs.docker.com/engine/reference/commandline/login/#credentials-store