# CNCF日本語ローカライゼーション向けガイドライン

このドキュメントでは、CNCFのプロジェクトをローカライズする際に参考になる一般的なガイドラインを提供します。

> [!IMPORTANT]
> 各プロジェクトに対してこのガイドラインをどの程度適用するかは、各プロジェクトのローカライゼーションリードが決定します。疑問点がある場合は、各プロジェクトの日本語ローカライゼーションリードやレビュアーと相談してください。

## 目次

- [スタイルガイド](?no-link-check#スタイルガイド)
- [固有の用語](?no-link-check#固有の用語)
  - [例](?no-link-check#例)
- [レビュー](?no-link-check#レビュー)
- [プロジェクト](?no-link-check#プロジェクト)
- [コミュニケーション](?no-link-check#コミュニケーション)

## スタイルガイド

Kubernetesの[日本語ローカライゼーション向けのスタイルガイド](https://kubernetes.io/ja/docs/contribute/localization/#style-guide)に準拠してください。

## 固有の用語

CNCFのプロジェクト特有の用語については、原則として英語のまま表記してください。ただしこれらの用語や概念を説明をするページなどで日本語の訳語が必要な場合は、以下の表を参考にしてください。

| 英語 | 日本語 |
| --- | --- |
| Charter | チャーター |
| Governing Board | 運営委員会 |
| SIG (Special Interest Group) | Special Interest Group |
| TAB (Technical Advisory Board) | 技術諮問評議会 |
| TAG (Technical Advisory Group) | 技術諮問グループ |
| TOC (Technical Oversight Committee) | 技術監督委員会 |
| WG (Working Group) | ワーキンググループ |

また次の表に示す用語はCNCF特有ではありませんが、表記を統一するため、原則として以下の表を参考にしてください。

| 英語 | 日本語 |
| --- | --- |
| Committee | 委員会 |
| White Paper | ホワイトペーパー |

### 例

| 推奨 | 非推奨 |
| --- | --- |
| Platform WG | プラットフォームWG |
| Platform WG | プラットフォームワーキンググループ |
| SIG Docs | SIGドキュメント |
| TAG Runtime | TAGランタイム |

## レビュー

ローカライゼーションのPRを作成した際は、ローカライゼーションレビュアーにレビューを依頼してください。各リポジトリのレビュアーは、[プロジェクト](?no-link-check#プロジェクト)の表を参考にしてください。
2人以上のローカライゼーションレビュアーからの承認を得ることを推奨します。

ローカライゼーションレビュアーからの承認を得た後、各リポジトリのメンテナーにPRのマージを依頼してください。

## プロジェクト

すでにローカライゼーションが進められているプロジェクトの一覧です。ローカライゼーションPRを作成する際には、以下の表を参考にして、適宜ローカライゼーションリードやレビュアーに通知してください。

| プロジェクト | ローカライゼーションリード | ローカライゼーションレビュアー |
| --- | --- | --- |
| [CNCF Glossary](https://github.com/cncf/glossary) | [@naonishijima](https://github.com/naonishijima) | [@naonishijima](https://github.com/naonishijima), [@kaitoii11](https://github.com/kaitoii11), [@Okabe-Junya](https://github.com/Okabe-Junya) |
| [CNCF TAG App Delivery](https://github.com/cncf/tag-app-delivery) | [@hhiroshell](https://github.com/hhiroshell) | [@hhiroshell](https://github.com/hhiroshell), [@kaitoii11](https://github.com/kaitoii11), [@naonishijima](https://github.com/naonishijima) |
| [CNCF TAG Environmental Sustainability](https://github.com/cncf/tag-env-sustainability) | [@naonishijima](https://github.com/naonishijima) | [@naonishijima](https://github.com/naonishijima), [@kaitoii11](https://github.com/kaitoii11), [@Okabe-Junya](https://github.com/Okabe-Junya) |
| [CNCF TAG Runtime](https://github.com/cncf/tag-runtime) | [@kaitoii11](https://github.com/kaitoii11) | [@kaitoii11](https://github.com/kaitoii11), [@kenta-iijima](https://github.com/kenta-iijima), [@Okabe-Junya](https://github.com/Okabe-Junya) |

## コミュニケーション

CNCFのプロジェクトのローカライゼーションに関するコミュニケーションは、主に、[CNCFのSlack](https://cloud-native.slack.com)の[`#glossary-localization-japanese`](https://cloud-native.slack.com/archives/C057F81GFUG)チャンネルで行われています。ローカライゼーションに関する質問や提案がある場合は、こちらのチャンネルで議論してください。

CNCFのSlackに参加していない場合は、[Community Inviterのサイト](https://communityinviter.com/apps/cloud-native/cncf)から参加できます。
