" " Estava no arquivo do Marcelo
" if empty(mapcheck('<C-U>', 'i'))
"   inoremap <C-U> <C-G>u<C-U>
" endif
" if empty(mapcheck('<C-W>', 'i'))
"   inoremap <C-W> <C-G>u<C-W>
" endif

" Fzf and defined keys
nnoremap <Leader>sb :Buffers<CR>                                                
nnoremap <Leader>sc :Files ~/.vim<CR>                                           
nnoremap <Leader>sf :Files<CR>                                                  
nnoremap <Leader>sg :Ag<CR>                                                     
nnoremap <Leader>sm :Maps<CR>  


" Color Schemes
nnoremap <Leader>c1 :colorscheme gruvbox<CR>                                      
nnoremap <Leader>c2 :colorscheme sonokai<CR>                                      
nnoremap <Leader>c3 :colorscheme lunaperche<CR>                                 
nnoremap <Leader>c4 :colorscheme habamax<CR>                                    
nnoremap <Leader>c5 :colorscheme slate<CR> 

nnoremap <CR> :noh<CR><CR>:<backspace>

" nnoremap <Leader>rn :set nornu<CR> 

" Mudar entre buffers"
nnoremap [b :bprev<CR>
nnoremap ]b :bNext<CR>
nnoremap [B :bfirst<CR>
nnoremap ]B :blast<CR>

