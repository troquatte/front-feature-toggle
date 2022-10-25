export interface IFeatureToggle {
  _id?: string;
  projectName: string;
  apiKey?: string;
  itensEnvironment: Array<{
    env: string;
    toggle: Array<{ name: string; value: boolean }>;
  }>;
}

export interface IFeatureToggleResponse {
  env: string;
  toggles: {
    promo: boolean;
    a_vista: boolean;
    cartao: boolean;
    itau: boolean;
  };
}
