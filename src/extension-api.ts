import type * as vscode from 'vscode';
import type {ASTNode} from './ast';

export type ExtensionAPI = {
  retrieveAst: (range: vscode.Range, uri: vscode.Uri) => Promise<ASTNode|null>;
};
