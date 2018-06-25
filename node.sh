#!/bin/bash
# this is a utility script for vscode debugging using nvm
#source ~/.zshrc || \ # enable if using zsh, and your bash_profile doesn't load nvm
  source ~/.bash_profile || source ~/.bashrc
nvm run $* || node $*
