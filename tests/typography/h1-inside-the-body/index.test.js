const { REGEXP_HEADER } = require('atherdon-newsletter-constants');

const { resolve } = require('path');
const { write, readSourceFile } = require('@root/utils');

const { PlainCallbacks, replaceMarkdown } = require('atherdon-callbacks');

const root = resolve(__dirname, '');
const outFolder = resolve('src/tests', 'directory', '../_generated');


describe('testing h1-inside-the-body', () => {
  it('renders h1-inside-the-body', () => {
    const markdown = readSourceFile(`${root}/content.md`);
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(
      parsedContent,
      REGEXP_HEADER,
      PlainCallbacks.header,
    );

    const fileName = 'h1-inside-the-body.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
