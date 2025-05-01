# Instalação do dwm (Dynamic Window Manager) no Debian

Este guia mostra como instalar o `dwm` a partir do código-fonte, permitindo 
personalizações via `config.h` e aplicação de *patches*.

---
## ✅ Passo 1: Instalar dependências

Abra o terminal e execute:

```bash
sudo apt update
sudo apt install build-essential libx11-dev libxft-dev libxinerama-dev git
```

## ✅ Passo 2: Clonar o repositório do dwm

Clone o fork meu-dwm 

```bash
git clone git@github.com:maxlemes/meu-dwm.git 
```

## ✅ Passo 3: Compilar e instalar

Compile e instale com:

```bash
sudo make clean install
```

## ✅ Passo 4: Adicionar o dwm ao menu do GDM
```bash
sudo cp dwm.desktop /usr/share/xsessions/
```

## ✅ Passo 5: Instalar o dmenu
```bash
sudo apt install dmenu
```

## ✅ Passo 6: Instalar o slstatus
entre na pasta slstatus/ e Compile
```bash
make 
sudo make install
```

