import { Button } from './components/Button.jsx';

/** 正常运行 `npm run dev` 时的宿主页面（Storybook 与此相互独立）。 */
export default function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginTop: 0 }}>Storybook 最小实验 · 宿主页</h1>
      <p>组件开发与演示请在 Storybook 中进行：</p>
      <pre style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px' }}>npm run storybook</pre>
      <p>下方仅为演示同一个 Button 组件在原页面中的样子：</p>
      <Button label="宿主页里的按钮" />
    </main>
  );
}
