# NoticeBar 通告栏

<code src="./demos/index.tsx"></code>

## 属性

| 属性      | 说明                             | 类型                                        | 默认值              |
| --------- | -------------------------------- | ------------------------------------------- | ------------------- |
| color     | 通告栏的类型                     | `'default' \| 'alert' \| 'error' \| 'info'` | `'default'`         |
| content   | 公告内容                         | `React.ReactNode`                           | -                   |
| closeable | 是否可关闭                       | `boolean`                                   | `false`             |
| onClose   | 关闭时的回调                     | `() => void`                                | -                   |
| icon      | 左侧广播图标                     | `React.ReactNode`                           | `<SoundOutlined />` |