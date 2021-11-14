#!/usr/bin/env node

      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
    
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/cli.mjs
import { NodeJSFileSystem, setFileSystem } from "@angular/compiler-cli/private/localize";
import glob from "glob";
import yargs from "yargs";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/diagnostics.mjs
var Diagnostics = class {
  constructor() {
    this.messages = [];
  }
  get hasErrors() {
    return this.messages.some((m) => m.type === "error");
  }
  add(type, message) {
    if (type !== "ignore") {
      this.messages.push({ type, message });
    }
  }
  warn(message) {
    this.messages.push({ type: "warning", message });
  }
  error(message) {
    this.messages.push({ type: "error", message });
  }
  merge(other) {
    this.messages.push(...other.messages);
  }
  formatDiagnostics(message) {
    const errors = this.messages.filter((d) => d.type === "error").map((d) => " - " + d.message);
    const warnings = this.messages.filter((d) => d.type === "warning").map((d) => " - " + d.message);
    if (errors.length) {
      message += "\nERRORS:\n" + errors.join("\n");
    }
    if (warnings.length) {
      message += "\nWARNINGS:\n" + warnings.join("\n");
    }
    return message;
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/output_path.mjs
function getOutputPathFn(fs2, outputFolder) {
  const [pre, post] = outputFolder.split("{{LOCALE}}");
  return post === void 0 ? (_locale, relativePath) => fs2.join(pre, relativePath) : (locale, relativePath) => fs2.join(pre + locale + post, relativePath);
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/index.mjs
import { getFileSystem as getFileSystem4, relativeFrom } from "@angular/compiler-cli/private/localize";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/asset_files/asset_translation_handler.mjs
import { absoluteFrom } from "@angular/compiler-cli/private/localize";
var AssetTranslationHandler = class {
  constructor(fs2) {
    this.fs = fs2;
  }
  canTranslate(_relativeFilePath, _contents) {
    return true;
  }
  translate(diagnostics2, _sourceRoot, relativeFilePath, contents, outputPathFn2, translations, sourceLocale2) {
    for (const translation of translations) {
      this.writeAssetFile(diagnostics2, outputPathFn2, translation.locale, relativeFilePath, contents);
    }
    if (sourceLocale2 !== void 0) {
      this.writeAssetFile(diagnostics2, outputPathFn2, sourceLocale2, relativeFilePath, contents);
    }
  }
  writeAssetFile(diagnostics2, outputPathFn2, locale, relativeFilePath, contents) {
    try {
      const outputPath = absoluteFrom(outputPathFn2(locale, relativeFilePath));
      this.fs.ensureDir(this.fs.dirname(outputPath));
      this.fs.writeFile(outputPath, contents);
    } catch (e) {
      diagnostics2.error(e.message);
    }
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/source_files/source_file_translation_handler.mjs
import { absoluteFrom as absoluteFrom2 } from "@angular/compiler-cli/private/localize";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/babel_core.mjs
import * as _babelNamespace from "@babel/core";
import _babelDefault from "@babel/core";
var _a;
var babel = (_a = _babelDefault) != null ? _a : _babelNamespace;
var _typesNamespace = _babelNamespace.types;
if (_babelDefault !== void 0) {
  _typesNamespace = _babelDefault.types;
}
var types = _typesNamespace;
var NodePath = babel.NodePath;
var transformSync = babel.transformSync;
var parseSync = babel.parseSync;
var transformFromAstSync = babel.transformFromAstSync;

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/source_files/es2015_translate_plugin.mjs
import { getFileSystem as getFileSystem2 } from "@angular/compiler-cli/private/localize";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/source_file_utils.mjs
import { getFileSystem } from "@angular/compiler-cli/private/localize";
import { \u0275isMissingTranslationError, \u0275makeTemplateObject, \u0275translate } from "@angular/localize";
function isLocalize(expression, localizeName) {
  return isNamedIdentifier(expression, localizeName) && isGlobalIdentifier(expression);
}
function isNamedIdentifier(expression, name) {
  return expression.isIdentifier() && expression.node.name === name;
}
function isGlobalIdentifier(identifier) {
  return !identifier.scope || !identifier.scope.hasBinding(identifier.node.name);
}
function buildLocalizeReplacement(messageParts, substitutions) {
  let mappedString = types.stringLiteral(messageParts[0]);
  for (let i = 1; i < messageParts.length; i++) {
    mappedString = types.binaryExpression("+", mappedString, wrapInParensIfNecessary(substitutions[i - 1]));
    mappedString = types.binaryExpression("+", mappedString, types.stringLiteral(messageParts[i]));
  }
  return mappedString;
}
function unwrapMessagePartsFromLocalizeCall(call, fs2 = getFileSystem()) {
  let cooked = call.get("arguments")[0];
  if (cooked === void 0) {
    throw new BabelParseError(call.node, "`$localize` called without any arguments.");
  }
  if (!cooked.isExpression()) {
    throw new BabelParseError(cooked.node, "Unexpected argument to `$localize` (expected an array).");
  }
  let raw = cooked;
  if (cooked.isLogicalExpression() && cooked.node.operator === "||" && cooked.get("left").isIdentifier()) {
    const right = cooked.get("right");
    if (right.isAssignmentExpression()) {
      cooked = right.get("right");
      if (!cooked.isExpression()) {
        throw new BabelParseError(cooked.node, 'Unexpected "makeTemplateObject()" function (expected an expression).');
      }
    } else if (right.isSequenceExpression()) {
      const expressions = right.get("expressions");
      if (expressions.length > 2) {
        const [first, second] = expressions;
        if (first.isAssignmentExpression()) {
          cooked = first.get("right");
          if (!cooked.isExpression()) {
            throw new BabelParseError(first.node, "Unexpected cooked value, expected an expression.");
          }
          if (second.isAssignmentExpression()) {
            raw = second.get("right");
            if (!raw.isExpression()) {
              throw new BabelParseError(second.node, "Unexpected raw value, expected an expression.");
            }
          } else {
            raw = cooked;
          }
        }
      }
    }
  }
  if (cooked.isCallExpression()) {
    let call2 = cooked;
    if (call2.get("arguments").length === 0) {
      call2 = unwrapLazyLoadHelperCall(call2);
    }
    cooked = call2.get("arguments")[0];
    if (!cooked.isExpression()) {
      throw new BabelParseError(cooked.node, 'Unexpected `cooked` argument to the "makeTemplateObject()" function (expected an expression).');
    }
    const arg2 = call2.get("arguments")[1];
    if (arg2 && !arg2.isExpression()) {
      throw new BabelParseError(arg2.node, 'Unexpected `raw` argument to the "makeTemplateObject()" function (expected an expression).');
    }
    raw = arg2 !== void 0 ? arg2 : cooked;
  }
  const [cookedStrings] = unwrapStringLiteralArray(cooked, fs2);
  const [rawStrings, rawLocations] = unwrapStringLiteralArray(raw, fs2);
  return [\u0275makeTemplateObject(cookedStrings, rawStrings), rawLocations];
}
function unwrapSubstitutionsFromLocalizeCall(call, fs2 = getFileSystem()) {
  const expressions = call.get("arguments").splice(1);
  if (!isArrayOfExpressions(expressions)) {
    const badExpression = expressions.find((expression) => !expression.isExpression());
    throw new BabelParseError(badExpression.node, "Invalid substitutions for `$localize` (expected all substitution arguments to be expressions).");
  }
  return [
    expressions.map((path) => path.node),
    expressions.map((expression) => getLocation(fs2, expression))
  ];
}
function unwrapMessagePartsFromTemplateLiteral(elements, fs2 = getFileSystem()) {
  const cooked = elements.map((q) => {
    if (q.node.value.cooked === void 0) {
      throw new BabelParseError(q.node, `Unexpected undefined message part in "${elements.map((q2) => q2.node.value.cooked)}"`);
    }
    return q.node.value.cooked;
  });
  const raw = elements.map((q) => q.node.value.raw);
  const locations = elements.map((q) => getLocation(fs2, q));
  return [\u0275makeTemplateObject(cooked, raw), locations];
}
function wrapInParensIfNecessary(expression) {
  if (types.isBinaryExpression(expression)) {
    return types.parenthesizedExpression(expression);
  } else {
    return expression;
  }
}
function unwrapStringLiteralArray(array, fs2 = getFileSystem()) {
  if (!isStringLiteralArray(array.node)) {
    throw new BabelParseError(array.node, "Unexpected messageParts for `$localize` (expected an array of strings).");
  }
  const elements = array.get("elements");
  return [elements.map((str) => str.node.value), elements.map((str) => getLocation(fs2, str))];
}
function unwrapLazyLoadHelperCall(call) {
  const callee = call.get("callee");
  if (!callee.isIdentifier()) {
    throw new BabelParseError(callee.node, "Unexpected lazy-load helper call (expected a call of the form `_templateObject()`).");
  }
  const lazyLoadBinding = call.scope.getBinding(callee.node.name);
  if (!lazyLoadBinding) {
    throw new BabelParseError(callee.node, "Missing declaration for lazy-load helper function");
  }
  const lazyLoadFn = lazyLoadBinding.path;
  if (!lazyLoadFn.isFunctionDeclaration()) {
    throw new BabelParseError(lazyLoadFn.node, "Unexpected expression (expected a function declaration");
  }
  const returnedNode = getReturnedExpression(lazyLoadFn);
  if (returnedNode.isCallExpression()) {
    return returnedNode;
  }
  if (returnedNode.isIdentifier()) {
    const identifierName = returnedNode.node.name;
    const declaration = returnedNode.scope.getBinding(identifierName);
    if (declaration === void 0) {
      throw new BabelParseError(returnedNode.node, "Missing declaration for return value from helper.");
    }
    if (!declaration.path.isVariableDeclarator()) {
      throw new BabelParseError(declaration.path.node, "Unexpected helper return value declaration (expected a variable declaration).");
    }
    const initializer = declaration.path.get("init");
    if (!initializer.isCallExpression()) {
      throw new BabelParseError(declaration.path.node, "Unexpected return value from helper (expected a call expression).");
    }
    if (lazyLoadBinding.references === 1) {
      lazyLoadFn.remove();
    }
    return initializer;
  }
  return call;
}
function getReturnedExpression(fn) {
  const bodyStatements = fn.get("body").get("body");
  for (const statement of bodyStatements) {
    if (statement.isReturnStatement()) {
      const argument = statement.get("argument");
      if (argument.isSequenceExpression()) {
        const expressions = argument.get("expressions");
        return Array.isArray(expressions) ? expressions[expressions.length - 1] : expressions;
      } else if (argument.isExpression()) {
        return argument;
      } else {
        throw new BabelParseError(statement.node, "Invalid return argument in helper function (expected an expression).");
      }
    }
  }
  throw new BabelParseError(fn.node, "Missing return statement in helper function.");
}
function isStringLiteralArray(node) {
  return types.isArrayExpression(node) && node.elements.every((element) => types.isStringLiteral(element));
}
function isArrayOfExpressions(paths) {
  return paths.every((element) => element.isExpression());
}
function translate(diagnostics2, translations, messageParts, substitutions, missingTranslation2) {
  try {
    return \u0275translate(translations, messageParts, substitutions);
  } catch (e) {
    if (\u0275isMissingTranslationError(e)) {
      diagnostics2.add(missingTranslation2, e.message);
      return [
        \u0275makeTemplateObject(e.parsedMessage.messageParts, e.parsedMessage.messageParts),
        substitutions
      ];
    } else {
      diagnostics2.error(e.message);
      return [messageParts, substitutions];
    }
  }
}
var BabelParseError = class extends Error {
  constructor(node, message) {
    super(message);
    this.node = node;
    this.type = "BabelParseError";
  }
};
function isBabelParseError(e) {
  return e.type === "BabelParseError";
}
function buildCodeFrameError(fs2, path, e) {
  let filename = path.hub.file.opts.filename;
  if (filename) {
    filename = fs2.resolve(filename);
    let cwd = path.hub.file.opts.cwd;
    if (cwd) {
      cwd = fs2.resolve(cwd);
      filename = fs2.relative(cwd, filename);
    }
  } else {
    filename = "(unknown file)";
  }
  const message = path.hub.file.buildCodeFrameError(e.node, e.message).message;
  return `${filename}: ${message}`;
}
function getLocation(fs2, startPath, endPath) {
  const startLocation = startPath.node.loc;
  const file = getFileFromPath(fs2, startPath);
  if (!startLocation || !file) {
    return void 0;
  }
  const endLocation = endPath && getFileFromPath(fs2, endPath) === file && endPath.node.loc || startLocation;
  return {
    start: getLineAndColumn(startLocation.start),
    end: getLineAndColumn(endLocation.end),
    file,
    text: getText(startPath)
  };
}
function getFileFromPath(fs2, path) {
  var _a2;
  const opts = path == null ? void 0 : path.hub.file.opts;
  const filename = opts == null ? void 0 : opts.filename;
  if (!filename) {
    return null;
  }
  const relativePath = fs2.relative(opts.cwd, filename);
  const root = (_a2 = opts.generatorOpts.sourceRoot) != null ? _a2 : opts.cwd;
  const absPath = fs2.resolve(root, relativePath);
  return absPath;
}
function getLineAndColumn(loc) {
  return { line: loc.line - 1, column: loc.column };
}
function getText(path) {
  if (path.node.start === null || path.node.end === null) {
    return void 0;
  }
  return path.hub.file.code.substring(path.node.start, path.node.end);
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/source_files/es2015_translate_plugin.mjs
function makeEs2015TranslatePlugin(diagnostics2, translations, { missingTranslation: missingTranslation2 = "error", localizeName = "$localize" } = {}, fs2 = getFileSystem2()) {
  return {
    visitor: {
      TaggedTemplateExpression(path) {
        try {
          const tag = path.get("tag");
          if (isLocalize(tag, localizeName)) {
            const [messageParts] = unwrapMessagePartsFromTemplateLiteral(path.get("quasi").get("quasis"), fs2);
            const translated = translate(diagnostics2, translations, messageParts, path.node.quasi.expressions, missingTranslation2);
            path.replaceWith(buildLocalizeReplacement(translated[0], translated[1]));
          }
        } catch (e) {
          if (isBabelParseError(e)) {
            throw buildCodeFrameError(fs2, path, e);
          } else {
            throw e;
          }
        }
      }
    }
  };
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/source_files/es5_translate_plugin.mjs
import { getFileSystem as getFileSystem3 } from "@angular/compiler-cli/private/localize";
function makeEs5TranslatePlugin(diagnostics2, translations, { missingTranslation: missingTranslation2 = "error", localizeName = "$localize" } = {}, fs2 = getFileSystem3()) {
  return {
    visitor: {
      CallExpression(callPath) {
        try {
          const calleePath = callPath.get("callee");
          if (isLocalize(calleePath, localizeName)) {
            const [messageParts] = unwrapMessagePartsFromLocalizeCall(callPath, fs2);
            const [expressions] = unwrapSubstitutionsFromLocalizeCall(callPath, fs2);
            const translated = translate(diagnostics2, translations, messageParts, expressions, missingTranslation2);
            callPath.replaceWith(buildLocalizeReplacement(translated[0], translated[1]));
          }
        } catch (e) {
          if (isBabelParseError(e)) {
            diagnostics2.error(buildCodeFrameError(fs2, callPath, e));
          } else {
            throw e;
          }
        }
      }
    }
  };
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/source_files/locale_plugin.mjs
function makeLocalePlugin(locale, { localizeName = "$localize" } = {}) {
  return {
    visitor: {
      MemberExpression(expression) {
        const obj = expression.get("object");
        if (!isLocalize(obj, localizeName)) {
          return;
        }
        const property = expression.get("property");
        if (!property.isIdentifier({ name: "locale" })) {
          return;
        }
        if (expression.parentPath.isAssignmentExpression() && expression.parentPath.get("left") === expression) {
          return;
        }
        const parent = expression.parentPath;
        if (parent.isLogicalExpression({ operator: "&&" }) && parent.get("right") === expression) {
          const left = parent.get("left");
          if (isLocalizeGuard(left, localizeName)) {
            parent.replaceWith(expression);
          } else if (left.isLogicalExpression({ operator: "&&" }) && isLocalizeGuard(left.get("right"), localizeName)) {
            left.replaceWith(left.get("left"));
          }
        }
        expression.replaceWith(types.stringLiteral(locale));
      }
    }
  };
}
function isLocalizeGuard(expression, localizeName) {
  if (!expression.isBinaryExpression() || !(expression.node.operator === "!==" || expression.node.operator === "!=")) {
    return false;
  }
  const left = expression.get("left");
  const right = expression.get("right");
  return left.isUnaryExpression({ operator: "typeof" }) && isLocalize(left.get("argument"), localizeName) && right.isStringLiteral({ value: "undefined" }) || right.isUnaryExpression({ operator: "typeof" }) && isLocalize(right.get("argument"), localizeName) && left.isStringLiteral({ value: "undefined" });
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/source_files/source_file_translation_handler.mjs
var SourceFileTranslationHandler = class {
  constructor(fs2, translationOptions = {}) {
    this.fs = fs2;
    this.translationOptions = translationOptions;
    this.sourceLocaleOptions = __spreadProps(__spreadValues({}, this.translationOptions), { missingTranslation: "ignore" });
  }
  canTranslate(relativeFilePath, _contents) {
    return this.fs.extname(relativeFilePath) === ".js";
  }
  translate(diagnostics2, sourceRoot, relativeFilePath, contents, outputPathFn2, translations, sourceLocale2) {
    const sourceCode = Buffer.from(contents).toString("utf8");
    if (!sourceCode.includes("$localize")) {
      for (const translation of translations) {
        this.writeSourceFile(diagnostics2, outputPathFn2, translation.locale, relativeFilePath, contents);
      }
      if (sourceLocale2 !== void 0) {
        this.writeSourceFile(diagnostics2, outputPathFn2, sourceLocale2, relativeFilePath, contents);
      }
    } else {
      const ast = parseSync(sourceCode, { sourceRoot, filename: relativeFilePath });
      if (!ast) {
        diagnostics2.error(`Unable to parse source file: ${this.fs.join(sourceRoot, relativeFilePath)}`);
        return;
      }
      for (const translationBundle of translations) {
        this.translateFile(diagnostics2, ast, translationBundle, sourceRoot, relativeFilePath, outputPathFn2, this.translationOptions);
      }
      if (sourceLocale2 !== void 0) {
        this.translateFile(diagnostics2, ast, { locale: sourceLocale2, translations: {} }, sourceRoot, relativeFilePath, outputPathFn2, this.sourceLocaleOptions);
      }
    }
  }
  translateFile(diagnostics2, ast, translationBundle, sourceRoot, filename, outputPathFn2, options2) {
    const translated = transformFromAstSync(ast, void 0, {
      compact: true,
      generatorOpts: { minified: true },
      plugins: [
        makeLocalePlugin(translationBundle.locale),
        makeEs2015TranslatePlugin(diagnostics2, translationBundle.translations, options2, this.fs),
        makeEs5TranslatePlugin(diagnostics2, translationBundle.translations, options2, this.fs)
      ],
      cwd: sourceRoot,
      filename
    });
    if (translated && translated.code) {
      this.writeSourceFile(diagnostics2, outputPathFn2, translationBundle.locale, filename, translated.code);
      const outputPath = absoluteFrom2(outputPathFn2(translationBundle.locale, filename));
      this.fs.ensureDir(this.fs.dirname(outputPath));
      this.fs.writeFile(outputPath, translated.code);
    } else {
      diagnostics2.error(`Unable to translate source file: ${this.fs.join(sourceRoot, filename)}`);
      return;
    }
  }
  writeSourceFile(diagnostics2, outputPathFn2, locale, relativeFilePath, contents) {
    try {
      const outputPath = absoluteFrom2(outputPathFn2(locale, relativeFilePath));
      this.fs.ensureDir(this.fs.dirname(outputPath));
      this.fs.writeFile(outputPath, contents);
    } catch (e) {
      diagnostics2.error(e.message);
    }
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_loader.mjs
var TranslationLoader = class {
  constructor(fs2, translationParsers, duplicateTranslation2, diagnostics2) {
    this.fs = fs2;
    this.translationParsers = translationParsers;
    this.duplicateTranslation = duplicateTranslation2;
    this.diagnostics = diagnostics2;
  }
  loadBundles(translationFilePaths2, translationFileLocales2) {
    return translationFilePaths2.map((filePaths, index) => {
      const providedLocale = translationFileLocales2[index];
      return this.mergeBundles(filePaths, providedLocale);
    });
  }
  loadBundle(filePath, providedLocale) {
    const fileContents = this.fs.readFile(filePath);
    const unusedParsers = new Map();
    for (const translationParser of this.translationParsers) {
      const result = translationParser.analyze(filePath, fileContents);
      if (!result.canParse) {
        unusedParsers.set(translationParser, result);
        continue;
      }
      const { locale: parsedLocale, translations, diagnostics: diagnostics2 } = translationParser.parse(filePath, fileContents, result.hint);
      if (diagnostics2.hasErrors) {
        throw new Error(diagnostics2.formatDiagnostics(`The translation file "${filePath}" could not be parsed.`));
      }
      const locale = providedLocale || parsedLocale;
      if (locale === void 0) {
        throw new Error(`The translation file "${filePath}" does not contain a target locale and no explicit locale was provided for this file.`);
      }
      if (parsedLocale !== void 0 && providedLocale !== void 0 && parsedLocale !== providedLocale) {
        diagnostics2.warn(`The provided locale "${providedLocale}" does not match the target locale "${parsedLocale}" found in the translation file "${filePath}".`);
      }
      if (this.diagnostics) {
        this.diagnostics.merge(diagnostics2);
      }
      return { locale, translations, diagnostics: diagnostics2 };
    }
    const diagnosticsMessages = [];
    for (const [parser, result] of unusedParsers.entries()) {
      diagnosticsMessages.push(result.diagnostics.formatDiagnostics(`
${parser.constructor.name} cannot parse translation file.`));
    }
    throw new Error(`There is no "TranslationParser" that can parse this translation file: ${filePath}.` + diagnosticsMessages.join("\n"));
  }
  mergeBundles(filePaths, providedLocale) {
    const bundles = filePaths.map((filePath) => this.loadBundle(filePath, providedLocale));
    const bundle = bundles[0];
    for (let i = 1; i < bundles.length; i++) {
      const nextBundle = bundles[i];
      if (nextBundle.locale !== bundle.locale) {
        if (this.diagnostics) {
          const previousFiles = filePaths.slice(0, i).map((f) => `"${f}"`).join(", ");
          this.diagnostics.warn(`When merging multiple translation files, the target locale "${nextBundle.locale}" found in "${filePaths[i]}" does not match the target locale "${bundle.locale}" found in earlier files [${previousFiles}].`);
        }
      }
      Object.keys(nextBundle.translations).forEach((messageId) => {
        var _a2;
        if (bundle.translations[messageId] !== void 0) {
          (_a2 = this.diagnostics) == null ? void 0 : _a2.add(this.duplicateTranslation, `Duplicate translations for message "${messageId}" when merging "${filePaths[i]}".`);
        } else {
          bundle.translations[messageId] = nextBundle.translations[messageId];
        }
      });
    }
    return bundle;
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/arb_translation_parser.mjs
import { \u0275parseTranslation } from "@angular/localize";
var ArbTranslationParser = class {
  canParse(filePath, contents) {
    const result = this.analyze(filePath, contents);
    return result.canParse && result.hint;
  }
  analyze(_filePath, contents) {
    const diagnostics2 = new Diagnostics();
    if (!contents.includes('"@@locale"')) {
      return { canParse: false, diagnostics: diagnostics2 };
    }
    try {
      return { canParse: true, diagnostics: diagnostics2, hint: this.tryParseArbFormat(contents) };
    } catch {
      diagnostics2.warn("File is not valid JSON.");
      return { canParse: false, diagnostics: diagnostics2 };
    }
  }
  parse(_filePath, contents, arb = this.tryParseArbFormat(contents)) {
    const bundle = {
      locale: arb["@@locale"],
      translations: {},
      diagnostics: new Diagnostics()
    };
    for (const messageId of Object.keys(arb)) {
      if (messageId.startsWith("@")) {
        continue;
      }
      const targetMessage = arb[messageId];
      bundle.translations[messageId] = \u0275parseTranslation(targetMessage);
    }
    return bundle;
  }
  tryParseArbFormat(contents) {
    const json = JSON.parse(contents);
    if (typeof json["@@locale"] !== "string") {
      throw new Error("Missing @@locale property.");
    }
    return json;
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/simple_json_translation_parser.mjs
import { \u0275parseTranslation as \u0275parseTranslation2 } from "@angular/localize";
import { extname } from "path";
var SimpleJsonTranslationParser = class {
  canParse(filePath, contents) {
    const result = this.analyze(filePath, contents);
    return result.canParse && result.hint;
  }
  analyze(filePath, contents) {
    const diagnostics2 = new Diagnostics();
    if (extname(filePath) !== ".json" || !(contents.includes('"locale"') && contents.includes('"translations"'))) {
      diagnostics2.warn("File does not have .json extension.");
      return { canParse: false, diagnostics: diagnostics2 };
    }
    try {
      const json = JSON.parse(contents);
      if (json.locale === void 0) {
        diagnostics2.warn('Required "locale" property missing.');
        return { canParse: false, diagnostics: diagnostics2 };
      }
      if (typeof json.locale !== "string") {
        diagnostics2.warn('The "locale" property is not a string.');
        return { canParse: false, diagnostics: diagnostics2 };
      }
      if (json.translations === void 0) {
        diagnostics2.warn('Required "translations" property missing.');
        return { canParse: false, diagnostics: diagnostics2 };
      }
      if (typeof json.translations !== "object") {
        diagnostics2.warn('The "translations" is not an object.');
        return { canParse: false, diagnostics: diagnostics2 };
      }
      return { canParse: true, diagnostics: diagnostics2, hint: json };
    } catch (e) {
      diagnostics2.warn("File is not valid JSON.");
      return { canParse: false, diagnostics: diagnostics2 };
    }
  }
  parse(_filePath, contents, json) {
    const { locale: parsedLocale, translations } = json || JSON.parse(contents);
    const parsedTranslations = {};
    for (const messageId in translations) {
      const targetMessage = translations[messageId];
      parsedTranslations[messageId] = \u0275parseTranslation2(targetMessage);
    }
    return { locale: parsedLocale, translations: parsedTranslations, diagnostics: new Diagnostics() };
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/xliff1_translation_parser.mjs
import { ParseErrorLevel as ParseErrorLevel3, visitAll as visitAll2 } from "@angular/compiler";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/base_visitor.mjs
var BaseVisitor = class {
  visitElement(_element, _context) {
  }
  visitAttribute(_attribute, _context) {
  }
  visitText(_text, _context) {
  }
  visitComment(_comment, _context) {
  }
  visitExpansion(_expansion, _context) {
  }
  visitExpansionCase(_expansionCase, _context) {
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/message_serialization/message_serializer.mjs
import { Element as Element2, visitAll } from "@angular/compiler";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/translation_parse_error.mjs
import { ParseErrorLevel } from "@angular/compiler";
var TranslationParseError = class extends Error {
  constructor(span, msg, level = ParseErrorLevel.ERROR) {
    super(contextualMessage(span, msg, level));
    this.span = span;
    this.msg = msg;
    this.level = level;
  }
};
function contextualMessage(span, msg, level) {
  const ctx = span.start.getContext(100, 2);
  msg += `
At ${span.start}${span.details ? `, ${span.details}` : ""}:
`;
  if (ctx) {
    msg += `...${ctx.before}[${ParseErrorLevel[level]} ->]${ctx.after}...
`;
  }
  return msg;
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/translation_utils.mjs
import { Element, ParseError, ParseErrorLevel as ParseErrorLevel2, XmlParser } from "@angular/compiler";
function getAttrOrThrow(element, attrName) {
  const attrValue = getAttribute(element, attrName);
  if (attrValue === void 0) {
    throw new TranslationParseError(element.sourceSpan, `Missing required "${attrName}" attribute:`);
  }
  return attrValue;
}
function getAttribute(element, attrName) {
  const attr = element.attrs.find((a) => a.name === attrName);
  return attr !== void 0 ? attr.value : void 0;
}
function parseInnerRange(element) {
  const xmlParser = new XmlParser();
  const xml = xmlParser.parse(element.sourceSpan.start.file.content, element.sourceSpan.start.file.url, { tokenizeExpansionForms: true, range: getInnerRange(element) });
  return xml;
}
function getInnerRange(element) {
  const start = element.startSourceSpan.end;
  const end = element.endSourceSpan.start;
  return {
    startPos: start.offset,
    startLine: start.line,
    startCol: start.col,
    endPos: end.offset
  };
}
function canParseXml(filePath, contents, rootNodeName, attributes) {
  const diagnostics2 = new Diagnostics();
  const xmlParser = new XmlParser();
  const xml = xmlParser.parse(contents, filePath);
  if (xml.rootNodes.length === 0 || xml.errors.some((error) => error.level === ParseErrorLevel2.ERROR)) {
    xml.errors.forEach((e) => addParseError(diagnostics2, e));
    return { canParse: false, diagnostics: diagnostics2 };
  }
  const rootElements = xml.rootNodes.filter(isNamedElement(rootNodeName));
  const rootElement = rootElements[0];
  if (rootElement === void 0) {
    diagnostics2.warn(`The XML file does not contain a <${rootNodeName}> root node.`);
    return { canParse: false, diagnostics: diagnostics2 };
  }
  for (const attrKey of Object.keys(attributes)) {
    const attr = rootElement.attrs.find((attr2) => attr2.name === attrKey);
    if (attr === void 0 || attr.value !== attributes[attrKey]) {
      addParseDiagnostic(diagnostics2, rootElement.sourceSpan, `The <${rootNodeName}> node does not have the required attribute: ${attrKey}="${attributes[attrKey]}".`, ParseErrorLevel2.WARNING);
      return { canParse: false, diagnostics: diagnostics2 };
    }
  }
  if (rootElements.length > 1) {
    xml.errors.push(new ParseError(xml.rootNodes[1].sourceSpan, "Unexpected root node. XLIFF 1.2 files should only have a single <xliff> root node.", ParseErrorLevel2.WARNING));
  }
  return { canParse: true, diagnostics: diagnostics2, hint: { element: rootElement, errors: xml.errors } };
}
function isNamedElement(name) {
  function predicate(node) {
    return node instanceof Element && node.name === name;
  }
  return predicate;
}
function addParseDiagnostic(diagnostics2, sourceSpan, message, level) {
  addParseError(diagnostics2, new ParseError(sourceSpan, message, level));
}
function addParseError(diagnostics2, parseError) {
  if (parseError.level === ParseErrorLevel2.ERROR) {
    diagnostics2.error(parseError.toString());
  } else {
    diagnostics2.warn(parseError.toString());
  }
}
function addErrorsToBundle(bundle, errors) {
  for (const error of errors) {
    addParseError(bundle.diagnostics, error);
  }
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/message_serialization/message_serializer.mjs
var MessageSerializer = class extends BaseVisitor {
  constructor(renderer, config) {
    super();
    this.renderer = renderer;
    this.config = config;
  }
  serialize(nodes) {
    this.renderer.startRender();
    visitAll(this, nodes);
    this.renderer.endRender();
    return this.renderer.message;
  }
  visitElement(element) {
    if (this.config.placeholder && element.name === this.config.placeholder.elementName) {
      const name = getAttrOrThrow(element, this.config.placeholder.nameAttribute);
      const body = this.config.placeholder.bodyAttribute && getAttribute(element, this.config.placeholder.bodyAttribute);
      this.visitPlaceholder(name, body);
    } else if (this.config.placeholderContainer && element.name === this.config.placeholderContainer.elementName) {
      const start = getAttrOrThrow(element, this.config.placeholderContainer.startAttribute);
      const end = getAttrOrThrow(element, this.config.placeholderContainer.endAttribute);
      this.visitPlaceholderContainer(start, element.children, end);
    } else if (this.config.inlineElements.indexOf(element.name) !== -1) {
      visitAll(this, element.children);
    } else {
      throw new TranslationParseError(element.sourceSpan, `Invalid element found in message.`);
    }
  }
  visitText(text) {
    this.renderer.text(text.value);
  }
  visitExpansion(expansion) {
    this.renderer.startIcu();
    this.renderer.text(`${expansion.switchValue}, ${expansion.type},`);
    visitAll(this, expansion.cases);
    this.renderer.endIcu();
  }
  visitExpansionCase(expansionCase) {
    this.renderer.text(` ${expansionCase.value} {`);
    this.renderer.startContainer();
    visitAll(this, expansionCase.expression);
    this.renderer.closeContainer();
    this.renderer.text(`}`);
  }
  visitContainedNodes(nodes) {
    this.renderer.startContainer();
    visitAll(this, nodes);
    this.renderer.closeContainer();
  }
  visitPlaceholder(name, body) {
    this.renderer.placeholder(name, body);
  }
  visitPlaceholderContainer(startName, children, closeName) {
    this.renderer.startPlaceholder(startName);
    this.visitContainedNodes(children);
    this.renderer.closePlaceholder(closeName);
  }
  isPlaceholderContainer(node) {
    return node instanceof Element2 && node.name === this.config.placeholderContainer.elementName;
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/message_serialization/target_message_renderer.mjs
import { \u0275makeParsedTranslation } from "@angular/localize";
var TargetMessageRenderer = class {
  constructor() {
    this.current = { messageParts: [], placeholderNames: [], text: "" };
    this.icuDepth = 0;
  }
  get message() {
    const { messageParts, placeholderNames } = this.current;
    return \u0275makeParsedTranslation(messageParts, placeholderNames);
  }
  startRender() {
  }
  endRender() {
    this.storeMessagePart();
  }
  text(text) {
    this.current.text += text;
  }
  placeholder(name, body) {
    this.renderPlaceholder(name);
  }
  startPlaceholder(name) {
    this.renderPlaceholder(name);
  }
  closePlaceholder(name) {
    this.renderPlaceholder(name);
  }
  startContainer() {
  }
  closeContainer() {
  }
  startIcu() {
    this.icuDepth++;
    this.text("{");
  }
  endIcu() {
    this.icuDepth--;
    this.text("}");
  }
  normalizePlaceholderName(name) {
    return name.replace(/-/g, "_");
  }
  renderPlaceholder(name) {
    name = this.normalizePlaceholderName(name);
    if (this.icuDepth > 0) {
      this.text(`{${name}}`);
    } else {
      this.storeMessagePart();
      this.current.placeholderNames.push(name);
    }
  }
  storeMessagePart() {
    this.current.messageParts.push(this.current.text);
    this.current.text = "";
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/serialize_translation_message.mjs
function serializeTranslationMessage(element, config) {
  const { rootNodes, errors: parseErrors } = parseInnerRange(element);
  try {
    const serializer = new MessageSerializer(new TargetMessageRenderer(), config);
    const translation = serializer.serialize(rootNodes);
    return { translation, parseErrors, serializeErrors: [] };
  } catch (e) {
    return { translation: null, parseErrors, serializeErrors: [e] };
  }
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/xliff1_translation_parser.mjs
var Xliff1TranslationParser = class {
  canParse(filePath, contents) {
    const result = this.analyze(filePath, contents);
    return result.canParse && result.hint;
  }
  analyze(filePath, contents) {
    return canParseXml(filePath, contents, "xliff", { version: "1.2" });
  }
  parse(filePath, contents, hint) {
    if (hint) {
      return this.extractBundle(hint);
    } else {
      return this.extractBundleDeprecated(filePath, contents);
    }
  }
  extractBundle({ element, errors }) {
    const diagnostics2 = new Diagnostics();
    errors.forEach((e) => addParseError(diagnostics2, e));
    if (element.children.length === 0) {
      addParseDiagnostic(diagnostics2, element.sourceSpan, "Missing expected <file> element", ParseErrorLevel3.WARNING);
      return { locale: void 0, translations: {}, diagnostics: diagnostics2 };
    }
    const files = element.children.filter(isNamedElement("file"));
    if (files.length === 0) {
      addParseDiagnostic(diagnostics2, element.sourceSpan, "No <file> elements found in <xliff>", ParseErrorLevel3.WARNING);
    } else if (files.length > 1) {
      addParseDiagnostic(diagnostics2, files[1].sourceSpan, "More than one <file> element found in <xliff>", ParseErrorLevel3.WARNING);
    }
    const bundle = { locale: void 0, translations: {}, diagnostics: diagnostics2 };
    const translationVisitor = new XliffTranslationVisitor();
    const localesFound = new Set();
    for (const file of files) {
      const locale = getAttribute(file, "target-language");
      if (locale !== void 0) {
        localesFound.add(locale);
        bundle.locale = locale;
      }
      visitAll2(translationVisitor, file.children, bundle);
    }
    if (localesFound.size > 1) {
      addParseDiagnostic(diagnostics2, element.sourceSpan, `More than one locale found in translation file: ${JSON.stringify(Array.from(localesFound))}. Using "${bundle.locale}"`, ParseErrorLevel3.WARNING);
    }
    return bundle;
  }
  extractBundleDeprecated(filePath, contents) {
    const hint = this.canParse(filePath, contents);
    if (!hint) {
      throw new Error(`Unable to parse "${filePath}" as XLIFF 1.2 format.`);
    }
    const bundle = this.extractBundle(hint);
    if (bundle.diagnostics.hasErrors) {
      const message = bundle.diagnostics.formatDiagnostics(`Failed to parse "${filePath}" as XLIFF 1.2 format`);
      throw new Error(message);
    }
    return bundle;
  }
};
var XliffTranslationVisitor = class extends BaseVisitor {
  visitElement(element, bundle) {
    if (element.name === "trans-unit") {
      this.visitTransUnitElement(element, bundle);
    } else {
      visitAll2(this, element.children, bundle);
    }
  }
  visitTransUnitElement(element, bundle) {
    const id = getAttribute(element, "id");
    if (id === void 0) {
      addParseDiagnostic(bundle.diagnostics, element.sourceSpan, `Missing required "id" attribute on <trans-unit> element.`, ParseErrorLevel3.ERROR);
      return;
    }
    if (bundle.translations[id] !== void 0) {
      addParseDiagnostic(bundle.diagnostics, element.sourceSpan, `Duplicated translations for message "${id}"`, ParseErrorLevel3.ERROR);
      return;
    }
    let targetMessage = element.children.find(isNamedElement("target"));
    if (targetMessage === void 0) {
      addParseDiagnostic(bundle.diagnostics, element.sourceSpan, "Missing <target> element", ParseErrorLevel3.WARNING);
      targetMessage = element.children.find(isNamedElement("source"));
      if (targetMessage === void 0) {
        addParseDiagnostic(bundle.diagnostics, element.sourceSpan, "Missing required element: one of <target> or <source> is required", ParseErrorLevel3.ERROR);
        return;
      }
    }
    const { translation, parseErrors, serializeErrors } = serializeTranslationMessage(targetMessage, {
      inlineElements: ["g", "bx", "ex", "bpt", "ept", "ph", "it", "mrk"],
      placeholder: { elementName: "x", nameAttribute: "id" }
    });
    if (translation !== null) {
      bundle.translations[id] = translation;
    }
    addErrorsToBundle(bundle, parseErrors);
    addErrorsToBundle(bundle, serializeErrors);
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/xliff2_translation_parser.mjs
import { Element as Element3, ParseErrorLevel as ParseErrorLevel4, visitAll as visitAll3 } from "@angular/compiler";
var Xliff2TranslationParser = class {
  canParse(filePath, contents) {
    const result = this.analyze(filePath, contents);
    return result.canParse && result.hint;
  }
  analyze(filePath, contents) {
    return canParseXml(filePath, contents, "xliff", { version: "2.0" });
  }
  parse(filePath, contents, hint) {
    if (hint) {
      return this.extractBundle(hint);
    } else {
      return this.extractBundleDeprecated(filePath, contents);
    }
  }
  extractBundle({ element, errors }) {
    const diagnostics2 = new Diagnostics();
    errors.forEach((e) => addParseError(diagnostics2, e));
    const locale = getAttribute(element, "trgLang");
    const files = element.children.filter(isFileElement);
    if (files.length === 0) {
      addParseDiagnostic(diagnostics2, element.sourceSpan, "No <file> elements found in <xliff>", ParseErrorLevel4.WARNING);
    } else if (files.length > 1) {
      addParseDiagnostic(diagnostics2, files[1].sourceSpan, "More than one <file> element found in <xliff>", ParseErrorLevel4.WARNING);
    }
    const bundle = { locale, translations: {}, diagnostics: diagnostics2 };
    const translationVisitor = new Xliff2TranslationVisitor();
    for (const file of files) {
      visitAll3(translationVisitor, file.children, { bundle });
    }
    return bundle;
  }
  extractBundleDeprecated(filePath, contents) {
    const hint = this.canParse(filePath, contents);
    if (!hint) {
      throw new Error(`Unable to parse "${filePath}" as XLIFF 2.0 format.`);
    }
    const bundle = this.extractBundle(hint);
    if (bundle.diagnostics.hasErrors) {
      const message = bundle.diagnostics.formatDiagnostics(`Failed to parse "${filePath}" as XLIFF 2.0 format`);
      throw new Error(message);
    }
    return bundle;
  }
};
var Xliff2TranslationVisitor = class extends BaseVisitor {
  visitElement(element, { bundle, unit }) {
    if (element.name === "unit") {
      this.visitUnitElement(element, bundle);
    } else if (element.name === "segment") {
      this.visitSegmentElement(element, bundle, unit);
    } else {
      visitAll3(this, element.children, { bundle, unit });
    }
  }
  visitUnitElement(element, bundle) {
    const externalId = getAttribute(element, "id");
    if (externalId === void 0) {
      addParseDiagnostic(bundle.diagnostics, element.sourceSpan, `Missing required "id" attribute on <trans-unit> element.`, ParseErrorLevel4.ERROR);
      return;
    }
    if (bundle.translations[externalId] !== void 0) {
      addParseDiagnostic(bundle.diagnostics, element.sourceSpan, `Duplicated translations for message "${externalId}"`, ParseErrorLevel4.ERROR);
      return;
    }
    visitAll3(this, element.children, { bundle, unit: externalId });
  }
  visitSegmentElement(element, bundle, unit) {
    if (unit === void 0) {
      addParseDiagnostic(bundle.diagnostics, element.sourceSpan, "Invalid <segment> element: should be a child of a <unit> element.", ParseErrorLevel4.ERROR);
      return;
    }
    let targetMessage = element.children.find(isNamedElement("target"));
    if (targetMessage === void 0) {
      addParseDiagnostic(bundle.diagnostics, element.sourceSpan, "Missing <target> element", ParseErrorLevel4.WARNING);
      targetMessage = element.children.find(isNamedElement("source"));
      if (targetMessage === void 0) {
        addParseDiagnostic(bundle.diagnostics, element.sourceSpan, "Missing required element: one of <target> or <source> is required", ParseErrorLevel4.ERROR);
        return;
      }
    }
    const { translation, parseErrors, serializeErrors } = serializeTranslationMessage(targetMessage, {
      inlineElements: ["cp", "sc", "ec", "mrk", "sm", "em"],
      placeholder: { elementName: "ph", nameAttribute: "equiv", bodyAttribute: "disp" },
      placeholderContainer: { elementName: "pc", startAttribute: "equivStart", endAttribute: "equivEnd" }
    });
    if (translation !== null) {
      bundle.translations[unit] = translation;
    }
    addErrorsToBundle(bundle, parseErrors);
    addErrorsToBundle(bundle, serializeErrors);
  }
};
function isFileElement(node) {
  return node instanceof Element3 && node.name === "file";
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translation_files/translation_parsers/xtb_translation_parser.mjs
import { ParseErrorLevel as ParseErrorLevel5, visitAll as visitAll4 } from "@angular/compiler";
import { extname as extname2 } from "path";
var XtbTranslationParser = class {
  canParse(filePath, contents) {
    const result = this.analyze(filePath, contents);
    return result.canParse && result.hint;
  }
  analyze(filePath, contents) {
    const extension = extname2(filePath);
    if (extension !== ".xtb" && extension !== ".xmb") {
      const diagnostics2 = new Diagnostics();
      diagnostics2.warn("Must have xtb or xmb extension.");
      return { canParse: false, diagnostics: diagnostics2 };
    }
    return canParseXml(filePath, contents, "translationbundle", {});
  }
  parse(filePath, contents, hint) {
    if (hint) {
      return this.extractBundle(hint);
    } else {
      return this.extractBundleDeprecated(filePath, contents);
    }
  }
  extractBundle({ element, errors }) {
    const langAttr = element.attrs.find((attr) => attr.name === "lang");
    const bundle = {
      locale: langAttr && langAttr.value,
      translations: {},
      diagnostics: new Diagnostics()
    };
    errors.forEach((e) => addParseError(bundle.diagnostics, e));
    const bundleVisitor = new XtbVisitor();
    visitAll4(bundleVisitor, element.children, bundle);
    return bundle;
  }
  extractBundleDeprecated(filePath, contents) {
    const hint = this.canParse(filePath, contents);
    if (!hint) {
      throw new Error(`Unable to parse "${filePath}" as XMB/XTB format.`);
    }
    const bundle = this.extractBundle(hint);
    if (bundle.diagnostics.hasErrors) {
      const message = bundle.diagnostics.formatDiagnostics(`Failed to parse "${filePath}" as XMB/XTB format`);
      throw new Error(message);
    }
    return bundle;
  }
};
var XtbVisitor = class extends BaseVisitor {
  visitElement(element, bundle) {
    switch (element.name) {
      case "translation":
        const id = getAttribute(element, "id");
        if (id === void 0) {
          addParseDiagnostic(bundle.diagnostics, element.sourceSpan, `Missing required "id" attribute on <translation> element.`, ParseErrorLevel5.ERROR);
          return;
        }
        if (bundle.translations[id] !== void 0) {
          addParseDiagnostic(bundle.diagnostics, element.sourceSpan, `Duplicated translations for message "${id}"`, ParseErrorLevel5.ERROR);
          return;
        }
        const { translation, parseErrors, serializeErrors } = serializeTranslationMessage(element, { inlineElements: [], placeholder: { elementName: "ph", nameAttribute: "name" } });
        if (parseErrors.length) {
          bundle.diagnostics.warn(computeParseWarning(id, parseErrors));
        } else if (translation !== null) {
          bundle.translations[id] = translation;
        }
        addErrorsToBundle(bundle, serializeErrors);
        break;
      default:
        addParseDiagnostic(bundle.diagnostics, element.sourceSpan, `Unexpected <${element.name}> tag.`, ParseErrorLevel5.ERROR);
    }
  }
};
function computeParseWarning(id, errors) {
  const msg = errors.map((e) => e.toString()).join("\n");
  return `Could not parse message with id "${id}" - perhaps it has an unrecognised ICU format?
` + msg;
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/translator.mjs
var Translator = class {
  constructor(fs2, resourceHandlers, diagnostics2) {
    this.fs = fs2;
    this.resourceHandlers = resourceHandlers;
    this.diagnostics = diagnostics2;
  }
  translateFiles(inputPaths, rootPath, outputPathFn2, translations, sourceLocale2) {
    inputPaths.forEach((inputPath) => {
      const absInputPath = this.fs.resolve(rootPath, inputPath);
      const contents = this.fs.readFileBuffer(absInputPath);
      const relativePath = this.fs.relative(rootPath, absInputPath);
      for (const resourceHandler of this.resourceHandlers) {
        if (resourceHandler.canTranslate(relativePath, contents)) {
          return resourceHandler.translate(this.diagnostics, rootPath, relativePath, contents, outputPathFn2, translations, sourceLocale2);
        }
      }
      this.diagnostics.error(`Unable to handle resource file: ${inputPath}`);
    });
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/index.mjs
function translateFiles({ sourceRootPath: sourceRootPath2, sourceFilePaths: sourceFilePaths2, translationFilePaths: translationFilePaths2, translationFileLocales: translationFileLocales2, outputPathFn: outputPathFn2, diagnostics: diagnostics2, missingTranslation: missingTranslation2, duplicateTranslation: duplicateTranslation2, sourceLocale: sourceLocale2 }) {
  const fs2 = getFileSystem4();
  const translationLoader = new TranslationLoader(fs2, [
    new Xliff2TranslationParser(),
    new Xliff1TranslationParser(),
    new XtbTranslationParser(),
    new SimpleJsonTranslationParser(),
    new ArbTranslationParser()
  ], duplicateTranslation2, diagnostics2);
  const resourceProcessor = new Translator(fs2, [
    new SourceFileTranslationHandler(fs2, { missingTranslation: missingTranslation2 }),
    new AssetTranslationHandler(fs2)
  ], diagnostics2);
  const translationFilePathsArrays = translationFilePaths2.map((filePaths) => Array.isArray(filePaths) ? filePaths.map((p) => fs2.resolve(p)) : [fs2.resolve(filePaths)]);
  const translations = translationLoader.loadBundles(translationFilePathsArrays, translationFileLocales2);
  sourceRootPath2 = fs2.resolve(sourceRootPath2);
  resourceProcessor.translateFiles(sourceFilePaths2.map(relativeFrom), fs2.resolve(sourceRootPath2), outputPathFn2, translations, sourceLocale2);
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/translate/cli.mjs
process.title = "Angular Localization Message Translator (localize-translate)";
var args = process.argv.slice(2);
var options = yargs(args).option("r", {
  alias: "root",
  required: true,
  describe: "The root path of the files to translate, either absolute or relative to the current working directory. E.g. `dist/en`.",
  type: "string"
}).option("s", {
  alias: "source",
  required: true,
  describe: "A glob pattern indicating what files to translate, relative to the `root` path. E.g. `bundles/**/*`.",
  type: "string"
}).option("l", {
  alias: "source-locale",
  describe: "The source locale of the application. If this is provided then a copy of the application will be created with no translation but just the `$localize` calls stripped out.",
  type: "string"
}).option("t", {
  alias: "translations",
  required: true,
  array: true,
  describe: 'A list of paths to the translation files to load, either absolute or relative to the current working directory.\nE.g. `-t src/locale/messages.en.xlf src/locale/messages.fr.xlf src/locale/messages.de.xlf`.\nIf you want to merge multiple translation files for each locale, then provide the list of files in an array.\nNote that the arrays must be in double quotes if you include any whitespace within the array.\nE.g. `-t "[src/locale/messages.en.xlf, src/locale/messages-2.en.xlf]" [src/locale/messages.fr.xlf,src/locale/messages-2.fr.xlf]`',
  type: "string"
}).option("target-locales", {
  array: true,
  describe: 'A list of target locales for the translation files, which will override any target locale parsed from the translation file.\nE.g. "-t en fr de".',
  type: "string"
}).option("o", {
  alias: "outputPath",
  required: true,
  describe: "A output path pattern to where the translated files will be written.\nThe path must be either absolute or relative to the current working directory.\nThe marker `{{LOCALE}}` will be replaced with the target locale. E.g. `dist/{{LOCALE}}`.",
  type: "string"
}).option("m", {
  alias: "missingTranslation",
  describe: "How to handle missing translations.",
  choices: ["error", "warning", "ignore"],
  default: "warning",
  type: "string"
}).option("d", {
  alias: "duplicateTranslation",
  describe: "How to handle duplicate translations.",
  choices: ["error", "warning", "ignore"],
  default: "warning",
  type: "string"
}).strict().help().parseSync();
var fs = new NodeJSFileSystem();
setFileSystem(fs);
var sourceRootPath = options.r;
var sourceFilePaths = glob.sync(options.s, { cwd: sourceRootPath, nodir: true });
var translationFilePaths = convertArraysFromArgs(options.t);
var outputPathFn = getOutputPathFn(fs, fs.resolve(options.o));
var diagnostics = new Diagnostics();
var missingTranslation = options.m;
var duplicateTranslation = options.d;
var sourceLocale = options.l;
var translationFileLocales = options["target-locales"] || [];
translateFiles({
  sourceRootPath,
  sourceFilePaths,
  translationFilePaths,
  translationFileLocales,
  outputPathFn,
  diagnostics,
  missingTranslation,
  duplicateTranslation,
  sourceLocale
});
diagnostics.messages.forEach((m) => console.warn(`${m.type}: ${m.message}`));
process.exit(diagnostics.hasErrors ? 1 : 0);
function convertArraysFromArgs(args2) {
  return args2.map((arg) => arg.startsWith("[") && arg.endsWith("]") ? arg.slice(1, -1).split(",").map((arg2) => arg2.trim()) : arg);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=cli.js.map
