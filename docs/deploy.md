# Deploy

Betwween releases you can raise PRs and merge them, and / or commit straight into `main`.
All of them will be used to generate a changelog and a new release (starting from the previous one). For PRs its great if you assign an appropriate label to them.

To deploy a new version on the final PR add a `release` label to it + a label that will be used to do a `major`, `minor`, or `patch` and merge it.

## Deploy Locally

Make sure the `GITHUB_TOKEN` and `NPM_TOKEN` env vars are set. Also if you have 2FA enabled Auto only works properly if you manually update your local `~/.npmrc` file with the NPM token above like this `//registry.npmjs.org/:_authToken={TOOKEN VALUE HERE}`.
Unless I do that it fails to npm publish. Until that is fixed either use CI or this for deployments.

Then run `npx auto shipit` which will run Intuit Auto.

Example:

```bash
export GITHUB_TOKEN=...
export NPM_TOKEN=...
npx auto shipit --only-graduate-with-release-label
# This is to remove them from your local
unset GITHUB_TOKEN
unset NPM_TOKEN
```

> Also don't forget to remove the token from your local `.npmrc` file.
