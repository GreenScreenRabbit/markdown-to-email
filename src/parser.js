// ----------------------------
// Delete it later
// ----------------------------

import { writeHTML, generateTemplateName, isFolderExists } from './helper';
import { generateFullTemplate2 } from './parserMDHtml';
import {
  generateReactContent,
  generateReactFullTemplate,
} from './parserMDReact';
import {
  generateTemplateComponent,
  generateEmptyTemplateComponent,
} from './templates/OuterTemplate';

// @TODO add path, in order to make it work PERFECTLY
const FULL_SOURCE = 'source/source.md';

// I left this variable here just for depricated methods. it's time to use full-template at all places
const CONTENT_SOURCE = 'source/source.md';

isFolderExists('./generated');
isFolderExists('./tests/_generated');

console.info(process.env.PARSE, '***mode');
switch (process.env.PARSE) {
  case 'full':
    // generateFullTemplate();
    generateFullTemplate2(FULL_SOURCE);
    break;

  case 'reactContentOnly':
    // same as default, but with react components instead.
    generateReactContent(CONTENT_SOURCE);
    break;

  case 'reactFull':
    generateReactFullTemplate(FULL_SOURCE);
    break;

  //------------------
  case 'plainEmpty':
    // compileEmptyTemplate();
    // generateEmptyTemplateComponent()

    // TODO find out and remove disabling rules
    // eslint-disable-next-line no-case-declarations
    const content = generateEmptyTemplateComponent();
    // eslint-disable-next-line no-case-declarations
    const fileName = generateTemplateName('lit-empty');

    writeHTML(fileName, content);

    break;

  case 'plainTemplate':
    // compileTemplate();
    generateTemplateComponent();
    break;
  //------------------

  default:
    // generateFullTemplate(FULL_SOURCE);
    break;
}
