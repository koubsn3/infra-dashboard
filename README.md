This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 開発環境のセットアップ

### Node.jsとパッケージマネージャのインストール

このプロジェクトを実行するには、Node.jsとパッケージマネージャ（npm, yarn, pnpm, bunのいずれか）が必要です。

#### Node.js & npm のインストール

Node.jsをインストールすると、npmも自動的にインストールされます。

**macOS:**

1. Homebrewを使用する方法（推奨）:
   ```bash
   # Homebrewがインストールされていない場合
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   
   # Node.jsのインストール
   brew install node
   ```

2. 公式インストーラーを使用する方法:
   [Node.js公式サイト](https://nodejs.org/)からmacOS用インストーラーをダウンロードして実行

**Windows:**

1. 公式インストーラーを使用する方法:
   [Node.js公式サイト](https://nodejs.org/)からWindows用インストーラーをダウンロードして実行

2. chocolateyを使用する方法:
   ```powershell
   # 管理者権限のPowerShellで
   choco install nodejs
   ```

#### 代替パッケージマネージャ

npmの代わりに以下のパッケージマネージャも利用可能です：

**Volta（macOS/Windows共通）:**
```bash
# macOS/Linuxの場合
curl https://get.volta.sh | bash

# Windowsの場合
# https://docs.volta.sh/guide/getting-started からインストーラーをダウンロード
```

**nvm（Node Version Manager - macOS/Windows共通）:**
```bash
# macOS/Linuxの場合
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Windowsの場合
# https://github.com/coreybutler/nvm-windows からインストーラーをダウンロード
```

**bun（macOS/Linux、WindowsはWSL経由）:**
```bash
# macOSの場合
curl -fsSL https://bun.sh/install | bash

# Windowsの場合はWSL2経由で使用
```

**yarn:**
```bash
npm install --global yarn
```

**pnpm:**
```bash
npm install --global pnpm
```

### 依存関係のインストール

プロジェクトディレクトリで以下のコマンドを実行して、必要なパッケージをインストールします：

```bash
# npmを使用する場合
npm install

# yarnを使用する場合
yarn

# pnpmを使用する場合
pnpm install

# bunを使用する場合
bun install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
