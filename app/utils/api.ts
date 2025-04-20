// ローカルLLM APIとの通信を管理するユーティリティ

// LLMからのレスポンスの型定義
export interface LLMResponse {
  text: string;
  // 将来的に必要な追加フィールドをここに定義
}

// LLMリクエストの型定義
export interface LLMRequest {
  prompt: string;
  // オプションのパラメータ
  temperature?: number;
  maxTokens?: number;
}

// APIのエンドポイント設定（環境変数から取得するのが望ましい）
const API_BASE_URL = process.env.NEXT_PUBLIC_LLM_API_URL || 'http://localhost:8000';

/**
 * ローカルLLM APIに問い合わせを送信
 * @param prompt ユーザーの入力メッセージ
 * @param options オプションのパラメータ
 * @returns APIからのレスポンス
 */
export async function queryLocalLLM(prompt: string, options: { temperature?: number; maxTokens?: number } = {}): Promise<LLMResponse> {
  try {
    // 開発中はモックレスポンスを返す
    if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_USE_REAL_API) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // 遅延をシミュレート
      return {
        text: `開発モードのモック応答: "${prompt}" に対する回答です。`
      };
    }

    // 実際のAPI呼び出し
    const response = await fetch(`${API_BASE_URL}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        temperature: options.temperature || 0.7,
        max_tokens: options.maxTokens || 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('LLM API error:', error);
    throw error;
  }
}