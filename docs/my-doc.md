---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---

## Markdown Heading

Mardown text with [links](./hello.md)  
Let's see how to [Create a page](/create-a-page).  
Let's see how to [Create a page](./create-a-page.md).  
![Docusaurus logo](/img/docusaurus.png)

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
    )
}
```

```c title="hello_world.c"
int main(void)
{
    printf("Hello World!");
    return 0;
}
```

:::tip My tip
Use this awsome feature option
:::

:::danger Take care
This actions is dangerous
:::

```jsx title="MDX"
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !