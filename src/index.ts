import path from 'node:path'
import type { ExtensionContext, Terminal } from 'vscode'
import { Uri, commands, window } from 'vscode'

let term: Terminal | undefined

function getTerminal() {
  if (term)
    return term

  term = window.createTerminal({
    name: 'fzfsearch',
    hideFromUser: true,
  })
  return term
}

function searchFile(context: ExtensionContext) {
  const fzf = getTerminal()
  fzf.show()
  const scriptPath = Uri.file(path.join(context.extensionPath, './src/search.mjs'))
  fzf.sendText(`zx ${scriptPath.fsPath}`)
}
export function activate(context: ExtensionContext) {
  const disposable = commands.registerCommand('fzf-search.searchFile', () => {
    searchFile(context)
    context.subscriptions.push(disposable)
  })
}

export function deactivate() {

}
