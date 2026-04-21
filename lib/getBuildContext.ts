import getCurrentBranch from './getCurrentBranch';
import getGitHubRepoUrl from './getGitHubRepoUrl';

export interface BuildContext {
  buildEnv: string;
  isProd: boolean;
  isDeployPreview: boolean;
  assetBranch: string;
  assetRepo: string;
  assetBaseUrl: string;
}

export default function getBuildContext(repo: string): BuildContext {
  const buildEnv = process.env.BUILD_ENV || 'production';
  const isProd = buildEnv === 'production';
  const isDeployPreview = !isProd && !!process.env.DEPLOY_PRIME_URL;
  const assetBranch = isDeployPreview ? getCurrentBranch() || 'main' : 'main';
  const assetRepo = isDeployPreview ? getGitHubRepoUrl() || repo : repo;
  const assetBaseUrl = `${assetRepo}/blob/${assetBranch}`;

  return {
    buildEnv,
    isProd,
    isDeployPreview,
    assetBranch,
    assetRepo,
    assetBaseUrl,
  };
}
