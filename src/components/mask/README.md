# Mask 遮罩层

<code src="./demos/index.tsx"></code>

### 属性

| 属性              | 说明                                                         | 类型                                                            | 默认值      |
| ----------------- | ------------------------------------------------------------ | --------------------------------------------------------------- | ----------- |
| visible           | 是否可见                                                     | `boolean`                                                       | `true`      |
| onMaskClick       | 点击蒙层自身触发                                             | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -           |
| destroyOnClose    | 不可见时卸载内容                                             | `boolean`                                                       | `false`     |
| color             | 遮罩层的颜色                                                 | `'black' \| 'white'`                                            | `'black'`   |
| opacity           | 透明度                                                       | `'default' \| 'thin' \| 'thick' \| number`                      | `'default'` |
| disableBodyScroll | 是否禁用 `body` 滚动                                         | `boolean`                                                       | `true`      |
| stopPropagation   | 阻止某些事件的冒泡                                           | `PropagationEvent[]`                                            | `['click']` |

### CSS 变量

| 属性      | 说明             | 默认值 | 全局变量             |
| --------- | ---------------- | ------ | -------------------- |
| --z-index | 元素的 `z-index` | `1000` | `--adm-mask-z-index` |
