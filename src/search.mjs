#!/usr/bin/env zx
import process from 'node:process'
import { $ } from 'zx'

if (process.platform === 'win32')
  $.shell = 'powershell'

const result = await $`fzf --preview='bat --color=always --style=numbers {}' --bind shift-up:preview-page-up,shift-down:preview-page-down`
const filePath = result.stdout.replace(/[\n]+/, '')

// open file with vscode
$`code ${filePath}`
