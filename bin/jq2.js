#!/usr/bin/env node
const  {deepConvert } = require('../lib/readable');


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
  let str  = JSON.stringify(obj2,null,4)
  console.log(str)
});
