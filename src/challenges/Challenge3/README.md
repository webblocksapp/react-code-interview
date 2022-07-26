# Challenge 3

The challenge 3 is the same requirement as challenge 2 but now you need to
add the same property palette by creating a high order component called
withButtonPalette.

- Requirements:

  - Create the HoC component called withButtonPalette at src/challenges/Challenge2/hocs
  - palette prop must only allow dark or light.
  - Palettes are found at src/index.css

- Expected implementation:

```typescript
 const Button = withButtonPalette(MuiButton);

 <Button palette="dark">
   Hello world
 </Button>

<Button palette="light">
   Hello world
 </Button>

//This implementation wouldn't be allowed by the code editor.
<Button palette="other">
   Hello world
</Button>
```

- You can refer to MUI 4 docs at the following link:
- https://v4.mui.com/components/buttons/#button
