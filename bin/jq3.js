#!/usr/bin/env node

import  {deepConvert} from '../lib/readable.js'

import chalk from 'chalk';

function colorize(value, indent = 0) {
  const space = '  '.repeat(indent);

  if (Array.isArray(value)) {
    if (value.length === 0) return chalk.cyan('[]');
    const items = value.map(v => `${space}  ${colorize(v, indent + 1)}`);
    return `[\n${items.join(',\n')}\n${space}]`;
  }

  if (value && typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 0) return chalk.cyan('{}');

    const lines = keys.map(key => {
      const coloredKey = chalk.magenta(`"${key}"`);
      const coloredValue = colorize(value[key], indent + 1);
      return `${space}  ${coloredKey}: ${coloredValue}`;
    });

    return `{\n${lines.join(',\n')}\n${space}}`;
  }

  // 基本类型
  if (typeof value === 'string') return chalk.green(`"${value}"`);
  if (typeof value === 'number') return chalk.cyan(value.toString());
  if (typeof value === 'boolean') return chalk.magenta(value.toString());
  if (value === null) return chalk.gray('null');

  return chalk.white(value?.toString?.() ?? 'undefined');
}

let input = '';
const stdin = process.stdin
stdin.setEncoding('utf8');

stdin.on('data', (chunk) => {
  input += chunk;
});

stdin.on('end', () => {
  // 处理 piped 的完整输入字符串
  input = input.trim();
  let obj = JSON.parse(input)
  let obj2 = deepConvert(obj)
  
  console.log(colorize(obj2))
});
