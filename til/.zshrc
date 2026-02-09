# ------------------------------------------------------------------------------
# ⚡ Powerlevel10k: inicialização rápida
# ------------------------------------------------------------------------------
# Isso garante que o prompt seja exibido o mais rápido possível
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Tema Powerlevel10k
ZSH_THEME="powerlevel10k/powerlevel10k"

# Configurações do Zsh
export ZSH="$HOME/.oh-my-zsh"

# Plugins e outras configurações
source $ZSH/oh-my-zsh.sh

# ------------------------------------------------------------------------------
# 🕘 Histórico do Zsh
# ------------------------------------------------------------------------------
setopt SHARE_HISTORY              # Compartilhar histórico entre sessões
setopt APPEND_HISTORY             # Adicionar comandos ao histórico
setopt INC_APPEND_HISTORY         # Adicionar imediatamente, sem esperar sair do shell
setopt HIST_IGNORE_DUPS           # Ignorar comandos duplicados
setopt HIST_FIND_NO_DUPS          # Ignorar duplicatas ao buscar no histórico
setopt HIST_REDUCE_BLANKS         # Remover espaços em branco
HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000

# ------------------------------------------------------------------------------
# 🔁 Prompt com substituição e cores
# ------------------------------------------------------------------------------
setopt prompt_subst
autoload -U colors && colors

# ------------------------------------------------------------------------------
# 🔁 Autocompletar + histórico por seta
# ------------------------------------------------------------------------------
autoload -Uz compinit && compinit
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'

bindkey '^N' history-search-backward
bindkey '^P' history-search-forward

# ------------------------------------------------------------------------------
# 🔍 Histórico com substring-search (plugin externo)
# ------------------------------------------------------------------------------
source  ~/.oh-my-zsh/custom/plugins/zsh-history-substring-search/zsh-history-substring-search.zsh
bindkey "$terminfo[kcuu1]" history-substring-search-up
bindkey "$terminfo[kcud1]" history-substring-search-down

# ------------------------------------------------------------------------------
# ⌨️ Atalhos de teclado para mover por palavras
# ------------------------------------------------------------------------------
bindkey "^[[1;5D" backward-word
bindkey "^[[1;5C" forward-word

# ------------------------------------------------------------------------------
# 🌟 Plugins diversos
 # ------------------------------------------------------------------------------
source ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/doc/fzf/examples/key-bindings.zsh
source ~/.oh-my-zsh/plugins/colored-man-pages/colored-man-pages.plugin.zsh

# Lista de plugins do oh-my-zsh
plugins=(
    git
    zsh-autosuggestions
    zsh-syntax-highlighting
    zsh-history-substring-search
    colored-man-pages
    fzf
)

# ------------------------------------------------------------------------------
# 🔗 Caminhos adicionais no PATH
# ------------------------------------------------------------------------------
# TeX Live
export PATH="/usr/local/texlive/2024/bin/x86_64-linux:$PATH"

# ------------------------------------------------------------------------------
# 🚀 Prompt final do Powerlevel10k
# ------------------------------------------------------------------------------
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# ------------------------------------------------------------------------------
# 🔎 FZF + Ripgrep para busca rápida de arquivos
# ------------------------------------------------------------------------------
if type rg &> /dev/null; then
  export FZF_DEFAULT_COMMAND='rg --files'
  export FZF_DEFAULT_OPTS='-m --height 40% --border=double --margin=5%,5%,5%,5%'
fi

# ------------------------------------------------------------------------------
# 🎨 Aliases personalizados (em arquivo separado)
# ------------------------------------------------------------------------------
[[ -f ~/.zsh_aliases ]] && source ~/.zsh_aliases

# setxkbmap -model abnt -layout us -variant intl
setxkbmap br
# ------------------------------------------------------------------------------
# ⛔ Desliga o screensaver e o gerenciamento de energia da tela
# ------------------------------------------------------------------------------
xset s off >/dev/null 2>&1
xset -dpms  >/dev/null 2>&1

# Created by `pipx` on 2025-09-02 12:57:23
export PATH="$PATH:/home/max/.local/bin"
