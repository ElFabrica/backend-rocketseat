# DOCKER COMANDS

# Comandos de CONTAINER

- Rodar a função docker file:
  docker run -p 3333:3333 -d {containerId | containerName}

- Listar containers ativos:
  docker ps

- Listar containers ativos e não ativos:
  docker ps -a

- Rodar o container:
  docker start {containerId}

- Pausar container:
  docker pause {containerId}

- Despauar container:
  docker unpause {containerId}

- Rodar logs do container:
  docker logs {containerId}

- Inspecionar conteúdo do container:
  docker container inspect {containerId}

- Remover container
  docker rm {containerId }

- Remover container de forma forçada (sem precisar parar o container)
  docker rm -f {containerId }

- Remover TODOS os containers:
  docker container prune

# Comandos de IMAGE

- Gerar uma imagem das instruções do "DockerFile"
  docker build -t api .

- Listar imagens:
  docker image ls

- Rodar histórico da imagem:
  docker history {imageId}

- Remover uma image:
  docker rmi {imageId}

- Remover uma image forçada:
  docker rmi -f {imageId}

- Criar tags para versionar as imagens:
  docker build -t {imageName}:{tagName} .

# Comandos do VOLUME

- criar um volume:
  docker volume create {volumeName}

- Inspecionar o volume:
  docker volume inspect {volumeName}

- Rodar container com volume:
  docker run -v {volumeName}:{pathVolume} -p 3333:3333 -d {imageName}

- Listar volumes:
  docker volume ls

- Deletar volume:
  docker volume rm {volumeName}

# Comandos a parte do windows

- Acessar o arquivo do docker pelo terminal:
  docker exec -it {containerId} //bin/sh

- Listar itens:
  ls

- Sair do terminal:
  exit
