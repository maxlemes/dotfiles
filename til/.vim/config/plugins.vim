let s:github_repo = 'https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
let s:install_cmd = '!curl -fLo ~/.vim/autoload/plug.vim --create-dirs ' . s:github_repo


if empty(glob('~/.vim/autoload/plug.vim'))
  silent execute s:install_cmd
endif

call plug#begin('~/.vim/plugged')
" Plug 'dense-analysis/ale'
Plug 'honza/vim-snippets'
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'lervag/vimtex'
Plug 'morhetz/gruvbox'
Plug 'neoclide/coc.nvim' , { 'branch' : 'release' }
Plug 'ryanoasis/vim-devicons'
Plug 'sainnhe/sonokai'
Plug 'sheerun/vim-polyglot'
Plug 'tpope/vim-abolish'
Plug 'tpope/vim-commentary'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'Yggdroot/indentLine'
call plug#end()

if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  PlugInstall --sync | wincmd q
endif

"--- COLOR & THEME CONFIG -----------------------------------------------------
hi Normal guibg=NONE ctermbg=NONE
let g:terminal_ansi_colors = [
    \ '#282828', '#cc241d', '#98971a', '#d79921',
    \ '#458588', '#b16286', '#689d6a', '#a89984',
    \ '#928374', '#fb4934', '#b8bb26', '#fabd2f',
    \ '#83a598', '#d3869b', '#8ec07c', '#ebdbb2',
\]
"--- INITIAL COLOR SCHEME -----------------------------------------------------
colorscheme gruvbox

"--- GRUBOX -------------------------------------------------------------------
let g:gruvbox_italic=1

"--- SONOKAI ------------------------------------------------------------------
let g:sonokai_style = 'andromeda'
let g:sonokai_enable_italic = 1
let g:sonokai_disable_italic_comment = 0
let g:sonokai_diagnostic_line_highlight = 1
let g:sonokai_current_word = 'bold'

if (has("nvim")) "Transparent background. Only for nvim
    highlight Normal guibg=NONE ctermbg=NONE
    highlight EndOfBuffer guibg=NONE ctermbg=NONE
endif

"--- VIMTEX -------------------------------------------------------------------
let g:vimtex_view_method = 'zathura' " Define o vizualizador de PDF-
let g:latex_view_general_viewer = 'zathura'
let g:vimtex_view_general_options = '--unique'
let g:vimtex_compiler_method = 'latexmk'  " Usa o latexmk como compilador
let g:vimtex_quickfix_mode=0
" set conceallevel=1
" let g:tex_conceal='abdmg'
let g:vimtex_compiler_latexmk = {
  \ 'backend' : 'traditional',
  \ 'options' : ['-pvc', '-pdf'],
  \ }
" --- AirLine CONFIG ----------------------------------------------------------
" let g:airline_theme = 'gruvbox'
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1
" mostrar apenas o nome do arquivo sem o caminho"
" let g:airline#extensions#tabline#formatter = 'unique_tail'

" --- ALE CONFIG --------------------------------------------------------------
let g:ale_linters = {
\}

let g:ale_fixers = {
\   '*': ['trim_whitespace'],
\}

let g:ale_fix_on_save = 1

" --- INDENTLINE CONFIG -------------------------------------------------------
let g:indentLine_color_gui = '#423d38'
let g:indentLine_setConceal = 0
let g:indentLine_char = '|'

" --- RAINBOW CONFIG ----------------------------------------------------------
let g:rainbow_active = 1
let g:rainbow_load_separately = [
    \ [ '*' , [['(', ')'], ['\[', '\]'], ['{', '}']] ],
    \ [ '*.tex' , [['(', ')'], ['\[', '\]']] ],
    \ [ '*.cpp' , [['(', ')'], ['\[', '\]'], ['{', '}']] ],
    \ [ '*.{html,htm}' , [['(', ')'], ['\[', '\]'], ['{', '}'], ['<\a[^>]*>', '</[^>]*>']] ],
    \ ]

let g:rainbow_guifgs = ['RoyalBlue3', 'DarkOrange3', 'DarkOrchid3', 'FireBrick']
let g:rainbow_ctermfgs = ['lightblue', 'lightgreen', 'yellow', 'red', 'magenta']

" --- COC CONFIG --------------------------------------------------------------
let g:coc_global_extensions = [ 'coc-snippets', 'coc-explorer']
so ~/.vim/config/coc_config.vim

" --- COC-EXPLORER CONFIG -----------------------------------------------------
so ~/.vim/config/coc_explorer_config.vim

let $FZF_DEFAULT_OPTS = '--preview "bat --style=numbers --color=always --line-range :500 {}"'
let g:fzf_colors =                                                                         
    \ { 'fg':      ['fg', 'Normal'],                                                           
      \ 'bg':      ['bg', 'Normal'],                                                           
      \ 'hl':      ['fg', 'Comment'],                                                          
      \ 'fg+':     ['fg', 'CursorLine', 'CursorColumn', 'Normal'],                             
      \ 'bg+':     ['bg', 'CursorLine', 'CursorColumn'],                                       
      \ 'hl+':     ['fg', 'Statement'],                                                        
      \ 'info':    ['fg', 'PreProc'],                                                          
      \ 'border':  ['fg', 'Ignore'],                                                           
      \ 'prompt':  ['fg', 'Conditional'],                                                      
      \ 'pointer': ['fg', 'Exception'],                                                        
      \ 'marker':  ['fg', 'Keyword'],                                                          
      \ 'spinner': ['fg', 'Label'],                                                            
      \ 'header':  ['fg', 'Comment'] }
