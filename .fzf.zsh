# Setup fzf
# ---------
if [[ ! "$PATH" == */home/max/.fzf/bin* ]]; then
  PATH="${PATH:+${PATH}:}/home/max/.fzf/bin"
fi

source <(fzf --zsh)
