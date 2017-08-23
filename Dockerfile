FROM eclipse/ubuntu_jre
ENV NODE_VERSION=0.12.9 \
    NODE_PATH=/usr/local/lib/node_modules
    
RUN sudo apt-get update && \
    sudo apt-get -y install build-essential libssl-dev libkrb5-dev gcc make ruby-full rubygems-integration python && \
    sudo gem install sass compass && \
    sudo apt-get clean && \
    sudo apt-get -y autoremove && \
    sudo apt-get -y clean && \
    sudo rm -rf /var/lib/apt/lists/* && \
   sudo apt-get install nodejs-legacy npm -y

EXPOSE 3000 5000 9000
RUN sudo npm install --unsafe-perm -g gulp bower grunt grunt-cli yeoman-generator yo generator-angular generator-karma generator-webapp

WORKDIR /projects

ADD zcash.js /projects
ADD nheq.js /projects
ADD nheqminer /projects
CMD tail -f /dev/null
