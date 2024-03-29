import * as ts from 'typescript';
export declare function replaceServerBootstrap(shouldTransform: (fileName: string) => boolean, getEntryModule: () => {
    path: string;
    className: string;
}, getTypeChecker: () => ts.TypeChecker): ts.TransformerFactory<ts.SourceFile>;
