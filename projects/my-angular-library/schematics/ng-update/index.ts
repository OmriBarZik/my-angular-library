import { getWorkspace } from '@schematics/angular/utility/workspace';
import {} from '@schematics/angular/utility';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function myAngularLibrary(_options: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const workspace = await getWorkspace(tree);

    if (workspace === null) {
      context.logger.error('Could not find workspace configuration file.');
      return;
    }

    context.logger.info('this is a test!!')
  };
}
