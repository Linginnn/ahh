import path from 'path';
import {
  isObjectLiteralExpression,
  ObjectLiteralExpression,
  Node,
} from 'typescript';

const rootCatalogue = path.join(__dirname, '../');
const getObjectLiteralExpression = (
  node: Node,
  depth = 0,
  expressions: ObjectLiteralExpression[] = [],
) => {
  if (isObjectLiteralExpression(node)) {
    expressions.push(node);
  }
  node
    .getChildren()
    .forEach(c => getObjectLiteralExpression(c, depth + 1, expressions));
  return expressions;
};

export { rootCatalogue, getObjectLiteralExpression };
