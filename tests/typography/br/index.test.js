const { REGEXP_BR } = require('atherdon-newsletter-constants');

const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks, replaceMarkdown } = require('atherdon-callbacks');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');


describe('testing br', () => {
  it('renders br', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_BR, PlainCallbacks.br);
    const fileName = 'br.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
