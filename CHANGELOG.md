# Changelog

## 1.9.3.9 - May 19, 2017

- feat(mscloudshow): update brand to v2 ([842ab41](https://github.com/andrewconnell/aci-orchardcms/commit/842ab41))

## 1.9.3.8 - May 19, 2017

- fix(drip): remove drip hidden fields ([2fbff67](https://github.com/andrewconnell/aci-orchardcms/commit/2fbff67))
- docs(snippets): fix download form errors ([3847019](https://github.com/andrewconnell/aci-orchardcms/commit/3847019))
- feat(view): change social sharing ([cb81c95](https://github.com/andrewconnell/aci-orchardcms/commit/cb81c95))
- chore(view): remove social sharing control from proj ([044a586](https://github.com/andrewconnell/aci-orchardcms/commit/044a586))

## 1.9.3.7 - May 5, 2017

- feat(style): update form styles ([26065b1](https://github.com/andrewconnell/aci-orchardcms/commit/26065b1))
- refactor(): move app insights to layout ([34e455e](https://github.com/andrewconnell/aci-orchardcms/commit/34e455e))
- refactor(): remove empty spaces ([3116760](https://github.com/andrewconnell/aci-orchardcms/commit/3116760))
- feat(drip): update hidden drip form fields ([3881641](https://github.com/andrewconnell/aci-orchardcms/commit/3881641))

## 1.9.3.6 - May 4, 2017

- fix(theme): type in ACCOM error page ([5997f47](https://github.com/andrewconnell/aci-orchardcms/commit/5997f47))
- fix(theme): fix random error on kerrb page titles ([bbcf10b](https://github.com/andrewconnell/aci-orchardcms/commit/bbcf10b), Closes [#17](https://github.com/andrewconnell/aci-orchardcms/issues/17))
- docs(): add doc to setup local dev environment ([95fd461](https://github.com/andrewconnell/aci-orchardcms/commit/95fd461))
- fix(theme): update pretty print location and viewport ([877532d](https://github.com/andrewconnell/aci-orchardcms/commit/877532d), Closes [#34](https://github.com/andrewconnell/aci-orchardcms/issues/34))
- fix(css): fix issue with OL not rendering numbers ([e93f383](https://github.com/andrewconnell/aci-orchardcms/commit/e93f383), Closes [#39](https://github.com/andrewconnell/aci-orchardcms/issues/39))
- feat(theme): update page date in the header ([8c5083e](https://github.com/andrewconnell/aci-orchardcms/commit/8c5083e), Closes [#40](https://github.com/andrewconnell/aci-orchardcms/issues/40))
- feat(content): update site name ([4f3377c](https://github.com/andrewconnell/aci-orchardcms/commit/4f3377c))
- feat(content): update copyright ([718c723](https://github.com/andrewconnell/aci-orchardcms/commit/718c723))
- feat(theme): move app insights to external js ([c4cff91](https://github.com/andrewconnell/aci-orchardcms/commit/c4cff91), Closes [#36](https://github.com/andrewconnell/aci-orchardcms/issues/36))
- feat(style): css for download form ([20c62e7](https://github.com/andrewconnell/aci-orchardcms/commit/20c62e7), Closes [#40](https://github.com/andrewconnell/aci-orchardcms/issues/40))
- docs(): added blog post snippets ([1fd3d74](https://github.com/andrewconnell/aci-orchardcms/commit/1fd3d74))
- feat(content): remove codeplex badge ([ae8851a](https://github.com/andrewconnell/aci-orchardcms/commit/ae8851a))
- feat(style): add bootstrap 3 ([20ca47e](https://github.com/andrewconnell/aci-orchardcms/commit/20ca47e), Closes [#42](https://github.com/andrewconnell/aci-orchardcms/issues/42))

## 1.9.3.5 - June 9, 2016

- Update MSCloudshow theme for admin changes in **Contrib.Podcasts** 1.7 ([421d55a](https://github.com/andrewconnell/aci-orchardcms/commit/421d55a))
- Update **Contrib.Podcasts** module to 1.7 ([54f9866](https://github.com/andrewconnell/aci-orchardcms/commit/54f9866))
- Added custom 500 & 404 views for ACCOM (Closes [#10](https://github.com/andrewconnell/aci-orchardcms/issues/10))
- Modified deployment so post deployment script run to automatically copy Azure DLL's from Orchard.Azure to root `\bin` (Closes [#8](https://github.com/andrewconnell/aci-orchardcms/issues/8))

## 1.9.3.4 - May 9, 2016

- Upgrade **Contrib.Podcasts** module to 1.6 ([502d311](https://github.com/andrewconnell/aci-orchardcms/commit/502d31129879323337d929437fd75ab912cecff5))
  - updated elements in the dynamic RSS feed
- Removed themes from `Modules` folder ([09b3874](https://github.com/andrewconnell/aci-orchardcms/commit/09b3874be1e4e65ffab9d9148f7a45772cdd26f5), Closes [#9](https://github.com/andrewconnell/aci-orchardcms/issues/9))

## 1.9.3.3 - May 7, 2016

- Upgrade **Contrib.Podcasts** module to 1.5 ([a6c7d79](https://github.com/andrewconnell/aci-orchardcms/commit/a6c7d790774e1c14713483c694ee5341fe26fb79))
  - improvements to admin UX

## 1.9.3.2 - May 6, 2016

- Upgrade **Contrib.Podcasts** module to 1.4 ([11bcf10](https://github.com/andrewconnell/aci-orchardcms/commit/11bcf102c1d5df6d8f7721b75a54d138d77f3d1b))
  - updates dynamic RSS feed to include all required elements
  - includes significant performance improvements

## 1.9.3.1 - May 2, 2016

- Upgrade from Orchard 1.9.1.* to [1.9.3](https://github.com/OrchardCMS/Orchard/releases/tag/1.9.3)
  - Got rid of the old codebase repo which was massive and a mess due to keeping a copy of the full OrchardCMS source enlistment. Moved to only keeping the compiled website codebase for simplicity. Added all files from the production 1.9.3 release. ([e6417190](https://github.com/andrewconnell/aci-orchardcms/commit/e64171907835e6608a6a85553d9686f5250468d8))
  - Added all the custom themes, modules & newrelic files to the site. ([85dc469](https://github.com/andrewconnell/aci-orchardcms/commit/85dc4697d5d4ac3df7b565f25534e172095260db))
  - Modified codebase to support pulling settings for tenants not from `App_Data` but from Azure blob storage (linked to in app settings in Azure Web App). ([daa444c](https://github.com/andrewconnell/aci-orchardcms/commit/daa444c9a1104179949152c69576c33c74303139))