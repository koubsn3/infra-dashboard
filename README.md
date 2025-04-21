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

**重要**: bunをインストールした後、環境変数の設定が必要です。インストール完了後、以下のメッセージが表示されます:

```
Added ~/.bun/bin to $PATH in ~/.zshrc
To get started, run:
  source ~/.zshrc
  bun --help
```

シェルの設定ファイル（~/.zshrc、~/.bashrc、~/.bash_profileなど）に環境変数が追加されていますので、新しいシェルを開くか、以下のコマンドで現在のシェルに反映させてください:

```bash
# zshの場合
source ~/.zshrc

# bashの場合
source ~/.bashrc
```

自動で環境変数が設定されなかった場合や、明示的に環境変数を設定する必要がある場合は、以下のコマンドを実行してください:

```bash
# zshの場合
echo 'export BUN_INSTALL="$HOME/.bun"' >> ~/.zshrc
echo 'export PATH="$BUN_INSTALL/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# bashの場合
echo 'export BUN_INSTALL="$HOME/.bun"' >> ~/.bashrc
echo 'export PATH="$BUN_INSTALL/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# fish シェルの場合
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH "$BUN_INSTALL/bin" $PATH
```

環境変数の設定を確認するには:

```bash
which bun
# または
echo $PATH
```

正しく設定されていれば、bunコマンドが利用可能になります。

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

## 始め方

まず、開発サーバーを起動します：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、結果が表示されます。

`app/page.tsx` を編集することでページの編集を開始できます。ファイルを編集すると、ページは自動的に更新されます。

このプロジェクトでは [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) を使用して、Vercelの新しいフォントファミリーである [Geist](https://vercel.com/font) を自動的に最適化して読み込んでいます。

## もっと詳しく

Next.jsについてさらに学ぶには、以下のリソースをご覧ください：

- [Next.jsドキュメント](https://nextjs.org/docs) - Next.jsの機能やAPIについて学びます。
- [Next.jsを学ぶ](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアルです。

[Next.jsのGitHubリポジトリ](https://github.com/vercel/next.js)もチェックできます - フィードバックや貢献を歓迎します！

## Vercelへのデプロイ

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの作成者による[Vercelプラットフォーム](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を使用することです。

詳細については[Next.jsのデプロイドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)をご覧ください。
