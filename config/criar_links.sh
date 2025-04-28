#!/bin/bash

# Verifica se o diretório de origem foi fornecido
if [ -z "$1" ]; then
    echo "Uso: $0 <diretório>"
    exit 1
fi

# Diretório de origem
origem="$1"

# Verifica se o diretório de origem existe
if [ ! -d "$origem" ]; then
    echo "O diretório $origem não existe."
    exit 2
fi

# Caminho do diretório destino (em ~/)
destino="$HOME/.config"

# Habilita a inclusão de arquivos ocultos
shopt -s dotglob

# Percorre todos os arquivos e diretórios no diretório de origem (incluindo os ocultos)
for arquivo in "$origem"/*; do
    # Verifica se é um arquivo ou diretório
    if [ -e "$arquivo" ]; then
        # Deleta a pasta/arquivo caso exista no destino
        rm -rf "$destino/$(basename "$arquivo")"
        # Cria o link simbólico absoluto no diretório HOME
        ln -sf "$(realpath "$arquivo")" "$destino/$(basename "$arquivo")"
        echo "Link criado: $destino/$(basename "$arquivo") -> $(realpath "$arquivo")"
    fi
done

# Desabilita a opção dotglob após o script
shopt -u dotglob

rm  "$destino/criar_links.sh"

echo "Links simbólicos criados com sucesso!"
