#!/bin/bash

# Caminho para a pasta onde estão as imagens
IMAGEM_DIR="/mnt/compartilhada/Imagens/Wallpapers/"

# Desabilita o globbing no Bash (evita que caracteres especiais como parênteses sejam interpretados)
shopt -u nullglob

# Escolhe uma imagem aleatória da pasta
IMAGEM=$(find "$IMAGEM_DIR" -type f | shuf -n 1)

# Define a imagem como fundo
feh --bg-scale "$IMAGEM"

# Restaura o globbing para o padrão
shopt -s nullglob
