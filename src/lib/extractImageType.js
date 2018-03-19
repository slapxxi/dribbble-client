// @flow
function extractImageType(url: string): string {
  const imageType = url.match(/\.(gif|jpg|jpeg|tiff|png)$/i);
  return imageType && imageType.length > 0
    ? imageType[0].slice(1).toUpperCase()
    : '';
}

export default extractImageType;
