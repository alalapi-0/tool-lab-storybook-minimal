/**
 * 一个最小按钮组件。
 * Storybook 的价值在于：把这个组件单独拿出来，用各种参数组合预览。
 */
export function Button({ label = '按钮', disabled = false, ...rest }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{
        padding: '8px 14px',
        borderRadius: '8px',
        border: '1px solid #cbd5e1',
        background: disabled ? '#e2e8f0' : '#2563eb',
        color: disabled ? '#64748b' : '#ffffff',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      {...rest}
    >
      {label}
    </button>
  );
}
