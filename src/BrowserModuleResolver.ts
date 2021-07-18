import {
  PrettierFileInfoOptions,
  PrettierFileInfoResult,
  PrettierSupportLanguage,
  PrettierModule,
  PrettierOptions,
  PrettierResolveConfigOptions,
  ModuleResolverInterface,
} from "./types";

import * as prettierStandalone from "prettier/standalone";

export class BrowserModuleResolver implements ModuleResolverInterface {
  constructor() {
    // empty
  }

  public async getPrettierInstance(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _fileName: string
  ): Promise<PrettierModule | undefined> {
    return this.getGlobalPrettierInstance();
  }

  public getGlobalPrettierInstance(): PrettierModule {
    return {
      format: (source: string, options: PrettierOptions) => {
        return prettierStandalone.format(source, options);
      },
      getSupportInfo: (): { languages: PrettierSupportLanguage[] } => {
        return {
          languages: [],
        };
      },
      getFileInfo: async (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        filePath: string,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options?: PrettierFileInfoOptions
      ): Promise<PrettierFileInfoResult> => {
        return { ignored: false, inferredParser: null };
      },
      resolveConfig: async (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        filePath: string,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        options?: PrettierResolveConfigOptions
      ): Promise<PrettierOptions | null> => {
        return null;
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      resolveConfigFile: async (filePath: string): Promise<string | null> => {
        return null;
      },
    };
  }

  dispose() {
    // nothing to do
  }
}
