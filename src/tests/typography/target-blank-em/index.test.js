const { REGEXP_EM, REGEXP_LINK } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../utils');
const { italic, link } = require('../../callbacks-simple');
const { replaceMarkdown } = require('../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing target-blank-em', () => {
  it('renders target-blank-em', () => {
    const markdown = readSourceFile('src/tests/target-blank-em/content.md');
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_EM, italic);
    const fileName = 'target-blank-em.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
  it('renders italic with link', () => {
    const markdown = readSourceFile('src/tests/target-blank-em/content.md');
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_LINK, link);
    const fileName = 'links.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
