# CheckList 可勾选列表

<code src="./demos/demo1.tsx"></code>

`CheckList` 底层是基于 `List` 实现的，是可以进行勾选的列表。

## CheckList

### 属性

| 属性         | 说明           | 类型                        | 默认值             |
| ------------ | -------------- | --------------------------- | ------------------ |
| defaultValue | 默认选中项      | `string[]`                  | `[]`               |
| onChange     | 选项改变时触发 | `(value: string[]) => void` | -                  |
| multiple     | 是否允许多选   | `boolean`                   | `false`            |
| readOnly     | 是否只读       | `boolean`                   | `false`            |
| disabled     | 是否禁用       | `boolean`                   | `false`            |
| list     | 选项列表        | `array`                   | `[]`            |

此外，还支持 [List](./list) 的 `mode` 属性


## list属性值

### 属性

| key      | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| value    | 选项值   | `string`  | -       |
| label    | 选项text值   | `string`  | -       |
| readOnly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |

此外，还支持 [List.Item](./list) 的以下属性：`title` `children` `description` `prefix` `onClick` 只需要往list中添加对应的key就行