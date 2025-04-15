# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

source ~/.powerlevel10k/powerlevel10k.zsh-theme

# share history across multiple zsh sessions
setopt SHARE_HISTORY
# append to history
setopt APPEND_HISTORY
# adds commands as they are typed, not at shell exit
setopt INC_APPEND_HISTORY
# do not store duplications
setopt HIST_IGNORE_DUPS
# ignore duplicates when searching
setopt HIST_FIND_NO_DUPS
# removes blank lines from history
setopt HIST_REDUCE_BLANKS

ZSH_THEME="agnoster"

# ativar o plugin zsh-history-substring-search
source /usr/local/share/zsh-history-substring-search/zsh-history-substring-search.zsh
bindkey "$terminfo[kcuu1]" history-substring-search-up
bindkey "$terminfo[kcud1]" history-substring-search-down

# setup autocompletion
autoload -Uz compinit && compinit
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'
# autocompletion using arrow keys (based on history)
bindkey '\e[A' history-search-backward
bindkey '\e[B' history-search-forward

setopt prompt_subst
autoload -U colors && colors
local resetColor="%{$reset_color%}"
PS1=""
PS1="%F{cyan}"'($(basename "$CONDA_DEFAULT_ENV")) '"$resetColor"
PS1+='%n%{$reset_color%}@$(scutil --get ComputerName):'"$resetColor"
PS1+=$'\e[38;5;211m$(short_cwd) ';
PS1+=$'\e[38;5;48m[$(git_repo):$(git_branch)] ';
PS1+='$resetColor$ ';

bindkey "^[[1;5D" backward-word
bindkey "^[[1;5C" forward-word

source /usr/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/doc/fzf/examples/key-bindings.zsh
## PLUGINS
source ~/.oh-my-zsh/plugins/colored-man-pages/colored-man-pages.plugin.zsh
plugins=(
    git
#    history-substring-search
    colored-man-pages
)


export LS_OPTIONS='--color=auto'
eval "`dircolors`"
# coloca os arquivos .R na cor 
export LS_COLORS="$LS_COLORS:*.R=38;5;92"


alias ls='ls $LS_OPTIONS'
alias ll='ls $LS_OPTIONS -l'
alias la='ls $LS_OPTIONS -lha'
alias py3='python3'
alias lvim='$HOME/.local/bin/vim'
alias grep='grep --color'
alias egrep='egrep --color'
alias ip='ip -c'
alias diff='diff --color'
alias meuip='curl ifconfig.me; echo;'
alias tail='grc tail'
alias ping='grc ping'
alias ps='grc ps'
alias netstat='grc netstat'
alias dig='grc dig'
alias traceroute='grc traceroute'
alias apt='sudo apt'
alias l='ls -lh'
alias la='ls -lha'
alias lt="tree -d"
alias ltf="tree -l"
alias lta="tree -a"
alias blue="poetry run blue"
alias isort="poetry run isort"
alias teclado="setxkbmap -model abnt2 -layout us -variant intl"
alias isort="poetry run isort"
alias blue="poetry run blue"
alias django_proj="poetry run django-admin startproject"
alias django_app="poetry run django-admin startapp"
alias ft="find . -type d | fzf --preview='tree -C {} | head -n 50'"
alias tlmgr="tlmgr --usermode"
#alias fd="(find . -type d | fzf --height=20% --margin=0%,35%,5%,10% --border=double)"
#alias fzv="$(find . -type f | fzf --height=20% --margin=0%,35%,5%,10% --border=double)"
#alias poetry_add_req="poetry add $(sed 's/#.*//' requirements.txt)"

HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000
setopt appendhistory


# Arquivo ~/.profile armazena os $PATH

# Adicionando o PATH do TEXLIVE
# export PATH="/usr/local/texlive/2023/bin/x86_64-linux:$PATH"
export PATH="/usr/local/texlive/2024/bin/x86_64-linux:$PATH"


# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# desligar o  screensaver toda vez que teclar algo
PS0=$(xset s off; xset -dpms;)

# Set fzf to use ripgrep
if type rg &> /dev/null; then
  export FZF_DEFAULT_COMMAND='rg --files'
  export FZF_DEFAULT_OPTS='-m --height 40% --border=double --margin=5%,5%,5%,5%'
fi

# Adicionando o NEOFETCH
# neofetch --ascii_colors 1 124 --colors 6 5 4 4 4 6

eval "$(starship init zsh)"



# Configurar o fzf para herdar o tema de cores do zsh
