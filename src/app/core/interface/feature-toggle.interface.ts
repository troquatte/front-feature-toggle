export interface IFeatureToggle {
  _id?: string;
  projectName: string;
  apiKey?: string;
  itensEnvironment: Array<[string, any[] | Array<[string, boolean]>]>;
}

export interface IFeatureToggleResponse {
  env: string;
  toggles: {
    whatsapp: boolean;
    logo: boolean;
  };
}
