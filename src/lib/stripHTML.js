// @flow
function stripHTML(text: string): string {
  return text.replace(/(<([^>]+)>)/gi, '');
}

export default stripHTML;
