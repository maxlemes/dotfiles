#!/bin/bash

# Define o caminho de destino
DESTINO="/mnt/compartilhada"

# Cria as pastas no destino, caso não existam
for pasta in "Downloads" "Documentos" "Imagens" "Músicas" "Vídeos"; do
    if [ ! -d "$DESTINO/$pasta" ]; then
        mkdir "$DESTINO/$pasta"
        echo "Criada a pasta $DESTINO/$pasta"
    fi
done

# Deleta as pastas do diretório home (~)
for pasta in "Downloads" "Documentos" "Imagens" "Músicas" "Vídeos"; do
    if [ -d "$HOME/$pasta" ]; then
        rm -rf "$HOME/$pasta"
        echo "Deletada a pasta $HOME/$pasta"
    fi
done

# Cria os links simbólicos
for pasta in "Downloads" "Documentos" "Imagens" "Músicas" "Vídeos"; do
    ln -s "$DESTINO/$pasta" "$HOME/$pasta"
    echo "Link simbólico criado: $HOME/$pasta -> $DESTINO/$pasta"
done
