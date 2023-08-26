import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'

export function activate(context: ExtensionContext) {
  window.showInformationMessage('Hello')
  const disposable = commands.registerCommand('pkg-name.helloWorld', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    window.showInformationMessage('Hello World from pkg-name!')
    context.subscriptions.push(disposable)
  })
}

export function deactivate() {

}
