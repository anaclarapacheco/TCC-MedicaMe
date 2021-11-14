#!/usr/bin/env node

      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
    
var __defProp = Object.defineProperty;
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

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/cli.mjs
import { ConsoleLogger, LogLevel, NodeJSFileSystem, setFileSystem } from "@angular/compiler-cli/private/localize";
import glob from "glob";
import yargs from "yargs";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/format_options.mjs
function validateOptions(name, validOptions, options2) {
  const validOptionsMap = new Map(validOptions);
  for (const option in options2) {
    if (!validOptionsMap.has(option)) {
      throw new Error(`Invalid format option for ${name}: "${option}".
Allowed options are ${JSON.stringify(Array.from(validOptionsMap.keys()))}.`);
    }
    const validOptionValues = validOptionsMap.get(option);
    const optionValue = options2[option];
    if (!validOptionValues.includes(optionValue)) {
      throw new Error(`Invalid format option value for ${name}: "${option}".
Allowed option values are ${JSON.stringify(validOptionValues)} but received "${optionValue}".`);
    }
  }
}
function parseFormatOptions(optionString = "{}") {
  return JSON.parse(optionString);
}

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

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/source_file_utils.mjs
import { getFileSystem } from "@angular/compiler-cli/private/localize";
import { \u0275isMissingTranslationError, \u0275makeTemplateObject, \u0275translate } from "@angular/localize";

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

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/source_file_utils.mjs
function isNamedIdentifier(expression, name) {
  return expression.isIdentifier() && expression.node.name === name;
}
function isGlobalIdentifier(identifier) {
  return !identifier.scope || !identifier.scope.hasBinding(identifier.node.name);
}
function unwrapMessagePartsFromLocalizeCall(call, fs = getFileSystem()) {
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
  const [cookedStrings] = unwrapStringLiteralArray(cooked, fs);
  const [rawStrings, rawLocations] = unwrapStringLiteralArray(raw, fs);
  return [\u0275makeTemplateObject(cookedStrings, rawStrings), rawLocations];
}
function unwrapSubstitutionsFromLocalizeCall(call, fs = getFileSystem()) {
  const expressions = call.get("arguments").splice(1);
  if (!isArrayOfExpressions(expressions)) {
    const badExpression = expressions.find((expression) => !expression.isExpression());
    throw new BabelParseError(badExpression.node, "Invalid substitutions for `$localize` (expected all substitution arguments to be expressions).");
  }
  return [
    expressions.map((path) => path.node),
    expressions.map((expression) => getLocation(fs, expression))
  ];
}
function unwrapMessagePartsFromTemplateLiteral(elements, fs = getFileSystem()) {
  const cooked = elements.map((q) => {
    if (q.node.value.cooked === void 0) {
      throw new BabelParseError(q.node, `Unexpected undefined message part in "${elements.map((q2) => q2.node.value.cooked)}"`);
    }
    return q.node.value.cooked;
  });
  const raw = elements.map((q) => q.node.value.raw);
  const locations = elements.map((q) => getLocation(fs, q));
  return [\u0275makeTemplateObject(cooked, raw), locations];
}
function unwrapExpressionsFromTemplateLiteral(quasi, fs = getFileSystem()) {
  return [quasi.node.expressions, quasi.get("expressions").map((e) => getLocation(fs, e))];
}
function unwrapStringLiteralArray(array, fs = getFileSystem()) {
  if (!isStringLiteralArray(array.node)) {
    throw new BabelParseError(array.node, "Unexpected messageParts for `$localize` (expected an array of strings).");
  }
  const elements = array.get("elements");
  return [elements.map((str) => str.node.value), elements.map((str) => getLocation(fs, str))];
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
function buildCodeFrameError(fs, path, e) {
  let filename = path.hub.file.opts.filename;
  if (filename) {
    filename = fs.resolve(filename);
    let cwd = path.hub.file.opts.cwd;
    if (cwd) {
      cwd = fs.resolve(cwd);
      filename = fs.relative(cwd, filename);
    }
  } else {
    filename = "(unknown file)";
  }
  const message = path.hub.file.buildCodeFrameError(e.node, e.message).message;
  return `${filename}: ${message}`;
}
function getLocation(fs, startPath, endPath) {
  const startLocation = startPath.node.loc;
  const file = getFileFromPath(fs, startPath);
  if (!startLocation || !file) {
    return void 0;
  }
  const endLocation = endPath && getFileFromPath(fs, endPath) === file && endPath.node.loc || startLocation;
  return {
    start: getLineAndColumn(startLocation.start),
    end: getLineAndColumn(endLocation.end),
    file,
    text: getText(startPath)
  };
}
function serializeLocationPosition(location) {
  const endLineString = location.end !== void 0 && location.end.line !== location.start.line ? `,${location.end.line + 1}` : "";
  return `${location.start.line + 1}${endLineString}`;
}
function getFileFromPath(fs, path) {
  var _a2;
  const opts = path == null ? void 0 : path.hub.file.opts;
  const filename = opts == null ? void 0 : opts.filename;
  if (!filename) {
    return null;
  }
  const relativePath = fs.relative(opts.cwd, filename);
  const root = (_a2 = opts.generatorOpts.sourceRoot) != null ? _a2 : opts.cwd;
  const absPath = fs.resolve(root, relativePath);
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

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/duplicates.mjs
function checkDuplicateMessages(fs, messages, duplicateMessageHandling2, basePath) {
  const diagnostics = new Diagnostics();
  if (duplicateMessageHandling2 === "ignore")
    return diagnostics;
  const messageMap = new Map();
  for (const message of messages) {
    if (messageMap.has(message.id)) {
      messageMap.get(message.id).push(message);
    } else {
      messageMap.set(message.id, [message]);
    }
  }
  for (const duplicates of messageMap.values()) {
    if (duplicates.length <= 1)
      continue;
    if (duplicates.every((message) => message.text === duplicates[0].text))
      continue;
    const diagnosticMessage = `Duplicate messages with id "${duplicates[0].id}":
` + duplicates.map((message) => serializeMessage(fs, basePath, message)).join("\n");
    diagnostics.add(duplicateMessageHandling2, diagnosticMessage);
  }
  return diagnostics;
}
function serializeMessage(fs, basePath, message) {
  if (message.location === void 0) {
    return `   - "${message.text}"`;
  } else {
    const locationFile = fs.relative(basePath, message.location.file);
    const locationPosition = serializeLocationPosition(message.location);
    return `   - "${message.text}" : ${locationFile}:${locationPosition}`;
  }
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/extraction.mjs
import { SourceFileLoader } from "@angular/compiler-cli/private/localize";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/source_files/es2015_extract_plugin.mjs
import { \u0275parseMessage } from "@angular/localize";
function makeEs2015ExtractPlugin(fs, messages, localizeName = "$localize") {
  return {
    visitor: {
      TaggedTemplateExpression(path) {
        const tag = path.get("tag");
        if (isNamedIdentifier(tag, localizeName) && isGlobalIdentifier(tag)) {
          const quasiPath = path.get("quasi");
          const [messageParts, messagePartLocations] = unwrapMessagePartsFromTemplateLiteral(quasiPath.get("quasis"), fs);
          const [expressions, expressionLocations] = unwrapExpressionsFromTemplateLiteral(quasiPath, fs);
          const location = getLocation(fs, quasiPath);
          const message = \u0275parseMessage(messageParts, expressions, location, messagePartLocations, expressionLocations);
          messages.push(message);
        }
      }
    }
  };
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/source_files/es5_extract_plugin.mjs
import { \u0275parseMessage as \u0275parseMessage2 } from "@angular/localize";
function makeEs5ExtractPlugin(fs, messages, localizeName = "$localize") {
  return {
    visitor: {
      CallExpression(callPath) {
        try {
          const calleePath = callPath.get("callee");
          if (isNamedIdentifier(calleePath, localizeName) && isGlobalIdentifier(calleePath)) {
            const [messageParts, messagePartLocations] = unwrapMessagePartsFromLocalizeCall(callPath, fs);
            const [expressions, expressionLocations] = unwrapSubstitutionsFromLocalizeCall(callPath, fs);
            const [messagePartsArg, expressionsArg] = callPath.get("arguments");
            const location = getLocation(fs, messagePartsArg, expressionsArg);
            const message = \u0275parseMessage2(messageParts, expressions, location, messagePartLocations, expressionLocations);
            messages.push(message);
          }
        } catch (e) {
          if (isBabelParseError(e)) {
            throw buildCodeFrameError(fs, callPath, e);
          } else {
            throw e;
          }
        }
      }
    }
  };
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/extraction.mjs
var MessageExtractor = class {
  constructor(fs, logger2, { basePath, useSourceMaps = true, localizeName = "$localize" }) {
    this.fs = fs;
    this.logger = logger2;
    this.basePath = basePath;
    this.useSourceMaps = useSourceMaps;
    this.localizeName = localizeName;
    this.loader = new SourceFileLoader(this.fs, this.logger, { webpack: basePath });
  }
  extractMessages(filename) {
    const messages = [];
    const sourceCode = this.fs.readFile(this.fs.resolve(this.basePath, filename));
    if (sourceCode.includes(this.localizeName)) {
      transformSync(sourceCode, {
        sourceRoot: this.basePath,
        filename,
        plugins: [
          makeEs2015ExtractPlugin(this.fs, messages, this.localizeName),
          makeEs5ExtractPlugin(this.fs, messages, this.localizeName)
        ],
        code: false,
        ast: false
      });
      if (this.useSourceMaps && messages.length > 0) {
        this.updateSourceLocations(filename, sourceCode, messages);
      }
    }
    return messages;
  }
  updateSourceLocations(filename, contents, messages) {
    const sourceFile = this.loader.loadSourceFile(this.fs.resolve(this.basePath, filename), contents);
    if (sourceFile === null) {
      return;
    }
    for (const message of messages) {
      if (message.location !== void 0) {
        message.location = this.getOriginalLocation(sourceFile, message.location);
        if (message.messagePartLocations) {
          message.messagePartLocations = message.messagePartLocations.map((location) => location && this.getOriginalLocation(sourceFile, location));
        }
        if (message.substitutionLocations) {
          const placeholderNames = Object.keys(message.substitutionLocations);
          for (const placeholderName of placeholderNames) {
            const location = message.substitutionLocations[placeholderName];
            message.substitutionLocations[placeholderName] = location && this.getOriginalLocation(sourceFile, location);
          }
        }
      }
    }
  }
  getOriginalLocation(sourceFile, location) {
    const originalStart = sourceFile.getOriginalLocation(location.start.line, location.start.column);
    if (originalStart === null) {
      return location;
    }
    const originalEnd = sourceFile.getOriginalLocation(location.end.line, location.end.column);
    const start = { line: originalStart.line, column: originalStart.column };
    const end = originalEnd !== null && originalEnd.file === originalStart.file ? { line: originalEnd.line, column: originalEnd.column } : start;
    const originalSourceFile = sourceFile.sources.find((sf) => (sf == null ? void 0 : sf.sourcePath) === originalStart.file);
    const startPos = originalSourceFile.startOfLinePositions[start.line] + start.column;
    const endPos = originalSourceFile.startOfLinePositions[end.line] + end.column;
    const text = originalSourceFile.contents.substring(startPos, endPos).trim();
    return { file: originalStart.file, start, end, text };
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/utils.mjs
function consolidateMessages(messages, getMessageId2) {
  const messageGroups = new Map();
  for (const message of messages) {
    const id = getMessageId2(message);
    if (!messageGroups.has(id)) {
      messageGroups.set(id, [message]);
    } else {
      messageGroups.get(id).push(message);
    }
  }
  for (const messages2 of messageGroups.values()) {
    messages2.sort(compareLocations);
  }
  return Array.from(messageGroups.values()).sort((a1, a2) => compareLocations(a1[0], a2[0]));
}
function hasLocation(message) {
  return message.location !== void 0;
}
function compareLocations({ location: location1 }, { location: location2 }) {
  if (location1 === location2) {
    return 0;
  }
  if (location1 === void 0) {
    return -1;
  }
  if (location2 === void 0) {
    return 1;
  }
  if (location1.file !== location2.file) {
    return location1.file < location2.file ? -1 : 1;
  }
  if (location1.start.line !== location2.start.line) {
    return location1.start.line < location2.start.line ? -1 : 1;
  }
  if (location1.start.column !== location2.start.column) {
    return location1.start.column < location2.start.column ? -1 : 1;
  }
  return 0;
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/arb_translation_serializer.mjs
var ArbTranslationSerializer = class {
  constructor(sourceLocale, basePath, fs) {
    this.sourceLocale = sourceLocale;
    this.basePath = basePath;
    this.fs = fs;
  }
  serialize(messages) {
    const messageGroups = consolidateMessages(messages, (message) => getMessageId(message));
    let output = `{
  "@@locale": ${JSON.stringify(this.sourceLocale)}`;
    for (const duplicateMessages of messageGroups) {
      const message = duplicateMessages[0];
      const id = getMessageId(message);
      output += this.serializeMessage(id, message);
      output += this.serializeMeta(id, message.description, message.meaning, duplicateMessages.filter(hasLocation).map((m) => m.location));
    }
    output += "\n}";
    return output;
  }
  serializeMessage(id, message) {
    return `,
  ${JSON.stringify(id)}: ${JSON.stringify(message.text)}`;
  }
  serializeMeta(id, description, meaning, locations) {
    const meta = [];
    if (description) {
      meta.push(`
    "description": ${JSON.stringify(description)}`);
    }
    if (meaning) {
      meta.push(`
    "x-meaning": ${JSON.stringify(meaning)}`);
    }
    if (locations.length > 0) {
      let locationStr = `
    "x-locations": [`;
      for (let i = 0; i < locations.length; i++) {
        locationStr += (i > 0 ? ",\n" : "\n") + this.serializeLocation(locations[i]);
      }
      locationStr += "\n    ]";
      meta.push(locationStr);
    }
    return meta.length > 0 ? `,
  ${JSON.stringify("@" + id)}: {${meta.join(",")}
  }` : "";
  }
  serializeLocation({ file, start, end }) {
    return [
      `      {`,
      `        "file": ${JSON.stringify(this.fs.relative(this.basePath, file))},`,
      `        "start": { "line": "${start.line}", "column": "${start.column}" },`,
      `        "end": { "line": "${end.line}", "column": "${end.column}" }`,
      `      }`
    ].join("\n");
  }
};
function getMessageId(message) {
  return message.customId || message.id;
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/json_translation_serializer.mjs
var SimpleJsonTranslationSerializer = class {
  constructor(sourceLocale) {
    this.sourceLocale = sourceLocale;
  }
  serialize(messages) {
    const fileObj = { locale: this.sourceLocale, translations: {} };
    for (const [message] of consolidateMessages(messages, (message2) => message2.id)) {
      fileObj.translations[message.id] = message.text;
    }
    return JSON.stringify(fileObj, null, 2);
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/legacy_message_id_migration_serializer.mjs
var LegacyMessageIdMigrationSerializer = class {
  constructor(_diagnostics) {
    this._diagnostics = _diagnostics;
  }
  serialize(messages) {
    let hasMessages = false;
    const mapping = messages.reduce((output, message) => {
      if (shouldMigrate(message)) {
        for (const legacyId of message.legacyIds) {
          if (output.hasOwnProperty(legacyId)) {
            this._diagnostics.warn(`Detected duplicate legacy ID ${legacyId}.`);
          }
          output[legacyId] = message.id;
          hasMessages = true;
        }
      }
      return output;
    }, {});
    if (!hasMessages) {
      this._diagnostics.warn("Could not find any legacy message IDs in source files while generating the legacy message migration file.");
    }
    return JSON.stringify(mapping, null, 2);
  }
};
function shouldMigrate(message) {
  return !message.customId && !!message.legacyIds && message.legacyIds.length > 0;
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/xliff1_translation_serializer.mjs
import { getFileSystem as getFileSystem2 } from "@angular/compiler-cli/private/localize";

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/icu_parsing.mjs
function extractIcuPlaceholders(text) {
  const state = new StateStack();
  const pieces = new IcuPieces();
  const braces = /[{}]/g;
  let lastPos = 0;
  let match;
  while (match = braces.exec(text)) {
    if (match[0] == "{") {
      state.enterBlock();
    } else {
      state.leaveBlock();
    }
    if (state.getCurrent() === "placeholder") {
      const name = tryParsePlaceholder(text, braces.lastIndex);
      if (name) {
        pieces.addText(text.substring(lastPos, braces.lastIndex - 1));
        pieces.addPlaceholder(name);
        braces.lastIndex += name.length + 1;
        state.leaveBlock();
      } else {
        pieces.addText(text.substring(lastPos, braces.lastIndex));
        state.nestedIcu();
      }
    } else {
      pieces.addText(text.substring(lastPos, braces.lastIndex));
    }
    lastPos = braces.lastIndex;
  }
  pieces.addText(text.substring(lastPos));
  return pieces.toArray();
}
var IcuPieces = class {
  constructor() {
    this.pieces = [""];
  }
  addText(text) {
    this.pieces[this.pieces.length - 1] += text;
  }
  addPlaceholder(name) {
    this.pieces.push(name);
    this.pieces.push("");
  }
  toArray() {
    return this.pieces;
  }
};
var StateStack = class {
  constructor() {
    this.stack = [];
  }
  enterBlock() {
    const current = this.getCurrent();
    switch (current) {
      case "icu":
        this.stack.push("case");
        break;
      case "case":
        this.stack.push("placeholder");
        break;
      case "placeholder":
        this.stack.push("case");
        break;
      default:
        this.stack.push("icu");
        break;
    }
  }
  leaveBlock() {
    return this.stack.pop();
  }
  nestedIcu() {
    const current = this.stack.pop();
    assert(current === "placeholder", "A nested ICU must replace a placeholder but got " + current);
    this.stack.push("icu");
  }
  getCurrent() {
    return this.stack[this.stack.length - 1];
  }
};
function tryParsePlaceholder(text, start) {
  for (let i = start; i < text.length; i++) {
    if (text[i] === ",") {
      break;
    }
    if (text[i] === "}") {
      return text.substring(start, i);
    }
  }
  return null;
}
function assert(test, message) {
  if (!test) {
    throw new Error("Assertion failure: " + message);
  }
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/xml_file.mjs
var XmlFile = class {
  constructor() {
    this.output = '<?xml version="1.0" encoding="UTF-8" ?>\n';
    this.indent = "";
    this.elements = [];
    this.preservingWhitespace = false;
  }
  toString() {
    return this.output;
  }
  startTag(name, attributes = {}, { selfClosing = false, preserveWhitespace } = {}) {
    if (!this.preservingWhitespace) {
      this.output += this.indent;
    }
    this.output += `<${name}`;
    for (const [attrName, attrValue] of Object.entries(attributes)) {
      if (attrValue) {
        this.output += ` ${attrName}="${escapeXml(attrValue)}"`;
      }
    }
    if (selfClosing) {
      this.output += "/>";
    } else {
      this.output += ">";
      this.elements.push(name);
      this.incIndent();
    }
    if (preserveWhitespace !== void 0) {
      this.preservingWhitespace = preserveWhitespace;
    }
    if (!this.preservingWhitespace) {
      this.output += `
`;
    }
    return this;
  }
  endTag(name, { preserveWhitespace } = {}) {
    const expectedTag = this.elements.pop();
    if (expectedTag !== name) {
      throw new Error(`Unexpected closing tag: "${name}", expected: "${expectedTag}"`);
    }
    this.decIndent();
    if (!this.preservingWhitespace) {
      this.output += this.indent;
    }
    this.output += `</${name}>`;
    if (preserveWhitespace !== void 0) {
      this.preservingWhitespace = preserveWhitespace;
    }
    if (!this.preservingWhitespace) {
      this.output += `
`;
    }
    return this;
  }
  text(str) {
    this.output += escapeXml(str);
    return this;
  }
  rawText(str) {
    this.output += str;
    return this;
  }
  incIndent() {
    this.indent = this.indent + "  ";
  }
  decIndent() {
    this.indent = this.indent.slice(0, -2);
  }
};
var _ESCAPED_CHARS = [
  [/&/g, "&amp;"],
  [/"/g, "&quot;"],
  [/'/g, "&apos;"],
  [/</g, "&lt;"],
  [/>/g, "&gt;"]
];
function escapeXml(text) {
  return _ESCAPED_CHARS.reduce((text2, entry) => text2.replace(entry[0], entry[1]), text);
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/xliff1_translation_serializer.mjs
var LEGACY_XLIFF_MESSAGE_LENGTH = 40;
var Xliff1TranslationSerializer = class {
  constructor(sourceLocale, basePath, useLegacyIds, formatOptions2 = {}, fs = getFileSystem2()) {
    this.sourceLocale = sourceLocale;
    this.basePath = basePath;
    this.useLegacyIds = useLegacyIds;
    this.formatOptions = formatOptions2;
    this.fs = fs;
    validateOptions("Xliff1TranslationSerializer", [["xml:space", ["preserve"]]], formatOptions2);
  }
  serialize(messages) {
    const messageGroups = consolidateMessages(messages, (message) => this.getMessageId(message));
    const xml = new XmlFile();
    xml.startTag("xliff", { "version": "1.2", "xmlns": "urn:oasis:names:tc:xliff:document:1.2" });
    xml.startTag("file", __spreadValues({
      "source-language": this.sourceLocale,
      "datatype": "plaintext",
      "original": "ng2.template"
    }, this.formatOptions));
    xml.startTag("body");
    for (const duplicateMessages of messageGroups) {
      const message = duplicateMessages[0];
      const id = this.getMessageId(message);
      xml.startTag("trans-unit", { id, datatype: "html" });
      xml.startTag("source", {}, { preserveWhitespace: true });
      this.serializeMessage(xml, message);
      xml.endTag("source", { preserveWhitespace: false });
      for (const { location } of duplicateMessages.filter(hasLocation)) {
        this.serializeLocation(xml, location);
      }
      if (message.description) {
        this.serializeNote(xml, "description", message.description);
      }
      if (message.meaning) {
        this.serializeNote(xml, "meaning", message.meaning);
      }
      xml.endTag("trans-unit");
    }
    xml.endTag("body");
    xml.endTag("file");
    xml.endTag("xliff");
    return xml.toString();
  }
  serializeMessage(xml, message) {
    var _a2;
    const length = message.messageParts.length - 1;
    for (let i = 0; i < length; i++) {
      this.serializeTextPart(xml, message.messageParts[i]);
      const location = (_a2 = message.substitutionLocations) == null ? void 0 : _a2[message.placeholderNames[i]];
      this.serializePlaceholder(xml, message.placeholderNames[i], location == null ? void 0 : location.text);
    }
    this.serializeTextPart(xml, message.messageParts[length]);
  }
  serializeTextPart(xml, text) {
    const pieces = extractIcuPlaceholders(text);
    const length = pieces.length - 1;
    for (let i = 0; i < length; i += 2) {
      xml.text(pieces[i]);
      this.serializePlaceholder(xml, pieces[i + 1], void 0);
    }
    xml.text(pieces[length]);
  }
  serializePlaceholder(xml, id, text) {
    const attrs = { id };
    const ctype = getCtypeForPlaceholder(id);
    if (ctype !== null) {
      attrs.ctype = ctype;
    }
    if (text !== void 0) {
      attrs["equiv-text"] = text;
    }
    xml.startTag("x", attrs, { selfClosing: true });
  }
  serializeNote(xml, name, value) {
    xml.startTag("note", { priority: "1", from: name }, { preserveWhitespace: true });
    xml.text(value);
    xml.endTag("note", { preserveWhitespace: false });
  }
  serializeLocation(xml, location) {
    xml.startTag("context-group", { purpose: "location" });
    this.renderContext(xml, "sourcefile", this.fs.relative(this.basePath, location.file));
    const endLineString = location.end !== void 0 && location.end.line !== location.start.line ? `,${location.end.line + 1}` : "";
    this.renderContext(xml, "linenumber", `${location.start.line + 1}${endLineString}`);
    xml.endTag("context-group");
  }
  renderContext(xml, type, value) {
    xml.startTag("context", { "context-type": type }, { preserveWhitespace: true });
    xml.text(value);
    xml.endTag("context", { preserveWhitespace: false });
  }
  getMessageId(message) {
    return message.customId || this.useLegacyIds && message.legacyIds !== void 0 && message.legacyIds.find((id) => id.length === LEGACY_XLIFF_MESSAGE_LENGTH) || message.id;
  }
};
function getCtypeForPlaceholder(placeholder) {
  const tag = placeholder.replace(/^(START_|CLOSE_)/, "");
  switch (tag) {
    case "LINE_BREAK":
      return "lb";
    case "TAG_IMG":
      return "image";
    default:
      const element = tag.startsWith("TAG_") ? tag.replace(/^TAG_(.+)/, (_, tagName) => tagName.toLowerCase()) : TAG_MAP[tag];
      if (element === void 0) {
        return null;
      }
      return `x-${element}`;
  }
}
var TAG_MAP = {
  "LINK": "a",
  "BOLD_TEXT": "b",
  "EMPHASISED_TEXT": "em",
  "HEADING_LEVEL1": "h1",
  "HEADING_LEVEL2": "h2",
  "HEADING_LEVEL3": "h3",
  "HEADING_LEVEL4": "h4",
  "HEADING_LEVEL5": "h5",
  "HEADING_LEVEL6": "h6",
  "HORIZONTAL_RULE": "hr",
  "ITALIC_TEXT": "i",
  "LIST_ITEM": "li",
  "MEDIA_LINK": "link",
  "ORDERED_LIST": "ol",
  "PARAGRAPH": "p",
  "QUOTATION": "q",
  "STRIKETHROUGH_TEXT": "s",
  "SMALL_TEXT": "small",
  "SUBSTRIPT": "sub",
  "SUPERSCRIPT": "sup",
  "TABLE_BODY": "tbody",
  "TABLE_CELL": "td",
  "TABLE_FOOTER": "tfoot",
  "TABLE_HEADER_CELL": "th",
  "TABLE_HEADER": "thead",
  "TABLE_ROW": "tr",
  "MONOSPACED_TEXT": "tt",
  "UNDERLINED_TEXT": "u",
  "UNORDERED_LIST": "ul"
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/xliff2_translation_serializer.mjs
import { getFileSystem as getFileSystem3 } from "@angular/compiler-cli/private/localize";
var MAX_LEGACY_XLIFF_2_MESSAGE_LENGTH = 20;
var Xliff2TranslationSerializer = class {
  constructor(sourceLocale, basePath, useLegacyIds, formatOptions2 = {}, fs = getFileSystem3()) {
    this.sourceLocale = sourceLocale;
    this.basePath = basePath;
    this.useLegacyIds = useLegacyIds;
    this.formatOptions = formatOptions2;
    this.fs = fs;
    this.currentPlaceholderId = 0;
    validateOptions("Xliff1TranslationSerializer", [["xml:space", ["preserve"]]], formatOptions2);
  }
  serialize(messages) {
    const messageGroups = consolidateMessages(messages, (message) => this.getMessageId(message));
    const xml = new XmlFile();
    xml.startTag("xliff", {
      "version": "2.0",
      "xmlns": "urn:oasis:names:tc:xliff:document:2.0",
      "srcLang": this.sourceLocale
    });
    xml.startTag("file", __spreadValues({ "id": "ngi18n", "original": "ng.template" }, this.formatOptions));
    for (const duplicateMessages of messageGroups) {
      const message = duplicateMessages[0];
      const id = this.getMessageId(message);
      xml.startTag("unit", { id });
      const messagesWithLocations = duplicateMessages.filter(hasLocation);
      if (message.meaning || message.description || messagesWithLocations.length) {
        xml.startTag("notes");
        for (const { location: { file, start, end } } of messagesWithLocations) {
          const endLineString = end !== void 0 && end.line !== start.line ? `,${end.line + 1}` : "";
          this.serializeNote(xml, "location", `${this.fs.relative(this.basePath, file)}:${start.line + 1}${endLineString}`);
        }
        if (message.description) {
          this.serializeNote(xml, "description", message.description);
        }
        if (message.meaning) {
          this.serializeNote(xml, "meaning", message.meaning);
        }
        xml.endTag("notes");
      }
      xml.startTag("segment");
      xml.startTag("source", {}, { preserveWhitespace: true });
      this.serializeMessage(xml, message);
      xml.endTag("source", { preserveWhitespace: false });
      xml.endTag("segment");
      xml.endTag("unit");
    }
    xml.endTag("file");
    xml.endTag("xliff");
    return xml.toString();
  }
  serializeMessage(xml, message) {
    this.currentPlaceholderId = 0;
    const length = message.messageParts.length - 1;
    for (let i = 0; i < length; i++) {
      this.serializeTextPart(xml, message.messageParts[i]);
      this.serializePlaceholder(xml, message.placeholderNames[i], message.substitutionLocations);
    }
    this.serializeTextPart(xml, message.messageParts[length]);
  }
  serializeTextPart(xml, text) {
    const pieces = extractIcuPlaceholders(text);
    const length = pieces.length - 1;
    for (let i = 0; i < length; i += 2) {
      xml.text(pieces[i]);
      this.serializePlaceholder(xml, pieces[i + 1], void 0);
    }
    xml.text(pieces[length]);
  }
  serializePlaceholder(xml, placeholderName, substitutionLocations) {
    var _a2, _b;
    const text = (_a2 = substitutionLocations == null ? void 0 : substitutionLocations[placeholderName]) == null ? void 0 : _a2.text;
    if (placeholderName.startsWith("START_")) {
      const closingPlaceholderName = placeholderName.replace(/^START/, "CLOSE").replace(/_\d+$/, "");
      const closingText = (_b = substitutionLocations == null ? void 0 : substitutionLocations[closingPlaceholderName]) == null ? void 0 : _b.text;
      const attrs = {
        id: `${this.currentPlaceholderId++}`,
        equivStart: placeholderName,
        equivEnd: closingPlaceholderName
      };
      const type = getTypeForPlaceholder(placeholderName);
      if (type !== null) {
        attrs.type = type;
      }
      if (text !== void 0) {
        attrs.dispStart = text;
      }
      if (closingText !== void 0) {
        attrs.dispEnd = closingText;
      }
      xml.startTag("pc", attrs);
    } else if (placeholderName.startsWith("CLOSE_")) {
      xml.endTag("pc");
    } else {
      const attrs = {
        id: `${this.currentPlaceholderId++}`,
        equiv: placeholderName
      };
      const type = getTypeForPlaceholder(placeholderName);
      if (type !== null) {
        attrs.type = type;
      }
      if (text !== void 0) {
        attrs.disp = text;
      }
      xml.startTag("ph", attrs, { selfClosing: true });
    }
  }
  serializeNote(xml, name, value) {
    xml.startTag("note", { category: name }, { preserveWhitespace: true });
    xml.text(value);
    xml.endTag("note", { preserveWhitespace: false });
  }
  getMessageId(message) {
    return message.customId || this.useLegacyIds && message.legacyIds !== void 0 && message.legacyIds.find((id) => id.length <= MAX_LEGACY_XLIFF_2_MESSAGE_LENGTH && !/[^0-9]/.test(id)) || message.id;
  }
};
function getTypeForPlaceholder(placeholder) {
  const tag = placeholder.replace(/^(START_|CLOSE_)/, "").replace(/_\d+$/, "");
  switch (tag) {
    case "BOLD_TEXT":
    case "EMPHASISED_TEXT":
    case "ITALIC_TEXT":
    case "LINE_BREAK":
    case "STRIKETHROUGH_TEXT":
    case "UNDERLINED_TEXT":
      return "fmt";
    case "TAG_IMG":
      return "image";
    case "LINK":
      return "link";
    default:
      return /^(START_|CLOSE_)/.test(placeholder) ? "other" : null;
  }
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/translation_files/xmb_translation_serializer.mjs
import { getFileSystem as getFileSystem4 } from "@angular/compiler-cli/private/localize";
var XmbTranslationSerializer = class {
  constructor(basePath, useLegacyIds, fs = getFileSystem4()) {
    this.basePath = basePath;
    this.useLegacyIds = useLegacyIds;
    this.fs = fs;
  }
  serialize(messages) {
    const messageGroups = consolidateMessages(messages, (message) => this.getMessageId(message));
    const xml = new XmlFile();
    xml.rawText(`<!DOCTYPE messagebundle [
<!ELEMENT messagebundle (msg)*>
<!ATTLIST messagebundle class CDATA #IMPLIED>

<!ELEMENT msg (#PCDATA|ph|source)*>
<!ATTLIST msg id CDATA #IMPLIED>
<!ATTLIST msg seq CDATA #IMPLIED>
<!ATTLIST msg name CDATA #IMPLIED>
<!ATTLIST msg desc CDATA #IMPLIED>
<!ATTLIST msg meaning CDATA #IMPLIED>
<!ATTLIST msg obsolete (obsolete) #IMPLIED>
<!ATTLIST msg xml:space (default|preserve) "default">
<!ATTLIST msg is_hidden CDATA #IMPLIED>

<!ELEMENT source (#PCDATA)>

<!ELEMENT ph (#PCDATA|ex)*>
<!ATTLIST ph name CDATA #REQUIRED>

<!ELEMENT ex (#PCDATA)>
]>
`);
    xml.startTag("messagebundle");
    for (const duplicateMessages of messageGroups) {
      const message = duplicateMessages[0];
      const id = this.getMessageId(message);
      xml.startTag("msg", { id, desc: message.description, meaning: message.meaning }, { preserveWhitespace: true });
      if (message.location) {
        this.serializeLocation(xml, message.location);
      }
      this.serializeMessage(xml, message);
      xml.endTag("msg", { preserveWhitespace: false });
    }
    xml.endTag("messagebundle");
    return xml.toString();
  }
  serializeLocation(xml, location) {
    xml.startTag("source");
    const endLineString = location.end !== void 0 && location.end.line !== location.start.line ? `,${location.end.line + 1}` : "";
    xml.text(`${this.fs.relative(this.basePath, location.file)}:${location.start.line}${endLineString}`);
    xml.endTag("source");
  }
  serializeMessage(xml, message) {
    const length = message.messageParts.length - 1;
    for (let i = 0; i < length; i++) {
      this.serializeTextPart(xml, message.messageParts[i]);
      xml.startTag("ph", { name: message.placeholderNames[i] }, { selfClosing: true });
    }
    this.serializeTextPart(xml, message.messageParts[length]);
  }
  serializeTextPart(xml, text) {
    const pieces = extractIcuPlaceholders(text);
    const length = pieces.length - 1;
    for (let i = 0; i < length; i += 2) {
      xml.text(pieces[i]);
      xml.startTag("ph", { name: pieces[i + 1] }, { selfClosing: true });
    }
    xml.text(pieces[length]);
  }
  getMessageId(message) {
    return message.customId || this.useLegacyIds && message.legacyIds !== void 0 && message.legacyIds.find((id) => id.length <= 20 && !/[^0-9]/.test(id)) || message.id;
  }
};

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/index.mjs
function extractTranslations({ rootPath: rootPath2, sourceFilePaths: sourceFilePaths2, sourceLocale, format: format2, outputPath: output, logger: logger2, useSourceMaps, useLegacyIds, duplicateMessageHandling: duplicateMessageHandling2, formatOptions: formatOptions2 = {}, fileSystem: fs }) {
  const basePath = fs.resolve(rootPath2);
  const extractor = new MessageExtractor(fs, logger2, { basePath, useSourceMaps });
  const messages = [];
  for (const file of sourceFilePaths2) {
    messages.push(...extractor.extractMessages(file));
  }
  const diagnostics = checkDuplicateMessages(fs, messages, duplicateMessageHandling2, basePath);
  if (diagnostics.hasErrors) {
    throw new Error(diagnostics.formatDiagnostics("Failed to extract messages"));
  }
  const outputPath = fs.resolve(rootPath2, output);
  const serializer = getSerializer(format2, sourceLocale, fs.dirname(outputPath), useLegacyIds, formatOptions2, fs, diagnostics);
  const translationFile = serializer.serialize(messages);
  fs.ensureDir(fs.dirname(outputPath));
  fs.writeFile(outputPath, translationFile);
  if (diagnostics.messages.length) {
    logger2.warn(diagnostics.formatDiagnostics("Messages extracted with warnings"));
  }
}
function getSerializer(format2, sourceLocale, rootPath2, useLegacyIds, formatOptions2 = {}, fs, diagnostics) {
  switch (format2) {
    case "xlf":
    case "xlif":
    case "xliff":
      return new Xliff1TranslationSerializer(sourceLocale, rootPath2, useLegacyIds, formatOptions2, fs);
    case "xlf2":
    case "xlif2":
    case "xliff2":
      return new Xliff2TranslationSerializer(sourceLocale, rootPath2, useLegacyIds, formatOptions2, fs);
    case "xmb":
      return new XmbTranslationSerializer(rootPath2, useLegacyIds, fs);
    case "json":
      return new SimpleJsonTranslationSerializer(sourceLocale);
    case "arb":
      return new ArbTranslationSerializer(sourceLocale, rootPath2, fs);
    case "legacy-migrate":
      return new LegacyMessageIdMigrationSerializer(diagnostics);
  }
  throw new Error(`No translation serializer can handle the provided format: ${format2}`);
}

// bazel-out/k8-fastbuild/bin/packages/localize/tools/src/extract/cli.mjs
process.title = "Angular Localization Message Extractor (localize-extract)";
var args = process.argv.slice(2);
var options = yargs(args).option("l", {
  alias: "locale",
  describe: "The locale of the source being processed",
  default: "en",
  type: "string"
}).option("r", {
  alias: "root",
  default: ".",
  describe: "The root path for other paths provided in these options.\nThis should either be absolute or relative to the current working directory.",
  type: "string"
}).option("s", {
  alias: "source",
  required: true,
  describe: "A glob pattern indicating what files to search for translations, e.g. `./dist/**/*.js`.\nThis should be relative to the root path.",
  type: "string"
}).option("f", {
  alias: "format",
  required: true,
  choices: ["xmb", "xlf", "xlif", "xliff", "xlf2", "xlif2", "xliff2", "json", "legacy-migrate"],
  describe: "The format of the translation file.",
  type: "string"
}).option("formatOptions", {
  describe: 'Additional options to pass to the translation file serializer, in the form of JSON formatted key-value string pairs:\nFor example: `--formatOptions {"xml:space":"preserve"}.\nThe meaning of the options is specific to the format being serialized.',
  type: "string"
}).option("o", {
  alias: "outputPath",
  required: true,
  describe: "A path to where the translation file will be written. This should be relative to the root path.",
  type: "string"
}).option("loglevel", {
  describe: "The lowest severity logging message that should be output.",
  choices: ["debug", "info", "warn", "error"],
  type: "string"
}).option("useSourceMaps", {
  type: "boolean",
  default: true,
  describe: "Whether to generate source information in the output files by following source-map mappings found in the source files"
}).option("useLegacyIds", {
  type: "boolean",
  default: true,
  describe: "Whether to use the legacy id format for messages that were extracted from Angular templates."
}).option("d", {
  alias: "duplicateMessageHandling",
  describe: "How to handle messages with the same id but different text.",
  choices: ["error", "warning", "ignore"],
  default: "warning",
  type: "string"
}).strict().help().parseSync();
var fileSystem = new NodeJSFileSystem();
setFileSystem(fileSystem);
var rootPath = options.r;
var sourceFilePaths = glob.sync(options.s, { cwd: rootPath, nodir: true });
var logLevel = options.loglevel;
var logger = new ConsoleLogger(logLevel ? LogLevel[logLevel] : LogLevel.warn);
var duplicateMessageHandling = options.d;
var formatOptions = parseFormatOptions(options.formatOptions);
var format = options.f;
extractTranslations({
  rootPath,
  sourceFilePaths,
  sourceLocale: options.l,
  format,
  outputPath: options.o,
  logger,
  useSourceMaps: options.useSourceMaps,
  useLegacyIds: format === "legacy-migrate" || options.useLegacyIds,
  duplicateMessageHandling,
  formatOptions,
  fileSystem
});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=cli.js.map
