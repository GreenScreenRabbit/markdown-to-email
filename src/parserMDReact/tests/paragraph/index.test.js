const { writeReactComponent, readSourceFile } = require('../../../utils');
const { paragraphWrapper } = require('../../callbacksMDReact');
const { replaceMarkdown } = require('../../../helpers');
const { REGEXP_PARAGRAPH } = require('../../constantsMDReact');

const outFolder = 'src/parserMDReact/tests/_generated';

describe('testing paragraph', () => {
  it('renders sponsorship', () => {
    const markdown = readSourceFile('src/parserMDReact/tests/paragraph/paragraph.md');
    const parsedContent = {
      content: markdown,
    };
    replaceMarkdown.call(parsedContent, REGEXP_PARAGRAPH, paragraphWrapper);
    const fileName = 'Paragraph.js';
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});
