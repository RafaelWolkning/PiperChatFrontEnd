export interface Token extends BaseRefreshToken {
  token: string;
  validadeDoToken: string;
  validadeDoTokenUtc: string;
  assinaturaDoSistema: string;
}

interface RefreshToken extends BaseRefreshToken
{
  grantType: string;
}

interface BaseRefreshToken
{
  refreshToken: string;
}
