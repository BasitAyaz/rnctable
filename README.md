# rnctable

![rnctable Logo](https://miro.medium.com/v2/resize:fit:1400/1*4ZlAY6HN11n9RyU-lz7B_Q@2x.png)

Lightweight and customizable React Native component for creating tables in your mobile applications.

## Installation

You can install rnctable via npm or yarn:

```bash
npm install rnctable
```
or

```bash
yarn add rnctable
```

## Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import RNCTable from 'rnctable';

const MyComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <RNCTable
        datasource={[]} // Data Array which should be rendered in the Table
        loading={false} // If false, it will show loading
        cols={[]} // Array defining the columns and data shown in table rows
      />
    </View>
  );
};

export default MyComponent;
```

## Props

| Name         | Type                                                     | Default | Description                                                 |
| ------------ | -------------------------------------------------------- | ------- | ----------------------------------------------------------- |
| datasource   | `any[]`                                                  | `[]`    | Data Array which should be rendered in the Table.           |
| loading      | `boolean`                                                | `false` | If `false`, it will show loading.                           |
| cols         | `Array<{ key: string, label: string, displayField: (row: any) => JSX.Element }>` | `[]`    | Array defining the columns and data shown in table rows.   |

## Creator

This package was created by [Basit Ahmed](https://basit-ahmed.web.app/).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/BasitAyaz/rnctable/blob/main/LICENSE) file for details.
