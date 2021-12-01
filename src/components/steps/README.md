# Steps 步骤条

<code src="./demos/index.tsx"></code>

## 属性

| 属性      | 说明                                                                          | 类型                         | 默认值         |
| --------- | ----------------------------------------------------------------------------- | ---------------------------- | -------------- |
| current   | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | `number`                     | `0`            |
| direction | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向      | `'horizontal' \| 'vertical'` | `'horizontal'` |
| list | 步骤条的数据列表 `title`: 标题; `description`: 步骤的详情描述，可选; `status`: 指定状态。当不配置该属性时，会使用 `Steps` 的 `current` 来自动指定状态；如果该属性与 `current` 指定的状态不匹配会覆盖自动匹配的状态, 有四种状态：`wait` `process` `finish` `error`    | `Array` | `[]` |

