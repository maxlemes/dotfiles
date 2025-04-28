
# Instruções de Instalação do Zsh, Oh My Zsh, Powerlevel10k, Exa e MesloLGS NF Fonts

Este guia irá ajudá-lo a instalar o Zsh, Oh My Zsh, Powerlevel10k e alguns plugins úteis, como o `zsh-history-substring-search`, `zsh-autosuggestions` e `zsh-syntax-highlighting`. Também inclui a instalação do `exa` e da **MesloLGS NF Fonts** para melhorar a aparência e a funcionalidade do terminal.

## 1. Instalar o Zsh

Primeiro, instale o Zsh no seu sistema:

```bash
sudo apt update
sudo apt install zsh
```

## 2. Instalar o Oh My Zsh

Depois, instale o Oh My Zsh, que é um framework para gerenciamento de configurações do Zsh:

```bash
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

## 3. Instalar o Powerlevel10k (p10k)

Agora, instale o Powerlevel10k, um tema avançado para o Zsh:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

## 4. Instalar o `zsh-history-substring-search`

Instale o plugin `zsh-history-substring-search`, que permite pesquisar o histórico de comandos com substrings:

```bash
git clone https://github.com/zsh-users/zsh-history-substring-search
${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-history-substring-search
```

## 5. Instalar o `zsh-autosuggestions`

O `zsh-autosuggestions` sugere comandos com base no seu histórico:

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

## 6. Instalar o `zsh-syntax-highlighting`

O plugin `zsh-syntax-highlighting` adiciona realce de sintaxe para comandos no Zsh:

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## 7. Instalar o `exa` (substituto do `ls`)

O `exa` é uma ferramenta moderna para listar arquivos, substituindo o comando `ls` com recursos adicionais, como a exibição de ícones e a ordenação avançada.

Instale o `exa` com o seguinte comando:

```bash
sudo apt install exa
```

## 8. Instalar a **MesloLGS NF Font**

A **MesloLGS NF** é uma fonte popular para usar com o Powerlevel10k. Para instalá-la, siga estas etapas:

1. Crie um link da pasta MesloGS:
```bash
ln -sf MesloGS ~/.local/share/fonts
```

2. A fonte **MesloLGS NF** será instalada. Após isso, configure o alacrity.
Abra o arquivo de configuração do Alacritty (`/.config/alacritty/alacritty.yml`) e adicione ou edite as seguintes linhas:
```bash
font:
   normal:
     family: MesloLGS NF
     style: Regular
   bold:
     family: MesloLGS NF
     style: Bold
   italic:
     family: MesloLGS NF
     style: Italic
   bold_italic:
     family: MesloLGS NF
     style: Bold Italic
   size: 12.0
```

## 9. Criar um Link Simbólico para o Arquivo `.zshrc`

Se precisar criar um link simbólico para o arquivo `.zshrc`, use o seguinte comando:

```bash
ln -s /caminho/para/seu/.zshrc ~/.zshrc
```

## 10. Carregar as Configurações

Após editar o arquivo `~/.zshrc`, carregue as configurações:

```bash
source ~/.zshrc
```

Agora, seu ambiente Zsh estará configurado com o Powerlevel10k, os plugins de sugestão de histórico, autocompletar, realce de sintaxe, o `exa` e a **MesloLGS NF Font**.

---

**Comandos Importantes:**
- Para configurar o Powerlevel10k, execute o comando:
  ```bash
  p10k configure
  ```
- Para verificar se os plugins estão funcionando corretamente, reinicie seu terminal ou execute `source ~/.zshrc`.

Boa sorte e aproveite o seu novo terminal! 🚀
