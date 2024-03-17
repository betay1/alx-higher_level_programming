#!/usr/bin/node
const dict = require('./101-data').dict;

const totalist = Object.entries(dict);
const vals = Object.values(dict);
const valsUniq = [...new Set(vals)];
const newDict = {};
for (const x in valsUniq) {
  const list = [];
  for (const y in totalist) {
      if (totalist[y][1] === valsUniq[x]) {
            list.unshift(totalist[y][0]);
          }
    }
  newDict[valsUniq[x]] = list;
}
console.log(newDict);
