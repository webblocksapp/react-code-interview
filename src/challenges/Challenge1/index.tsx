import React from "react";
import { Button } from "@material-ui/core";

export const Challenge1 = () => {
  /**
   * The customer asks to enhance the current existing material ui Button component
   * to support an additional property called palette, this property will take
   * care of the button styles.
   *
   * Requirements:
   * - Create an enhanced Button component at src/challenges/Challenge1/components
   * by inheriting the current existing props of the original material ui Button.
   * - palette prop must only allow dark or light.
   * - Palettes are found at src/index.css
   *
   * Expected implementation:
   *
   *  <Button palette="dark">
   *    Hello world
   *  </Button>
   *
   * <Button palette="light">
   *    Hello world
   *  </Button>
   *
   * This implementation wouldn't be allowed by the code editor.
   * <Button palette="other">
   *    Hello world
   * </Button>
   *
   * You can refer to MUI 4 docs at the following link:
   * https://v4.mui.com/components/buttons/#button
   */

  return (
    <>
      <Button variant="contained" color="primary">
        Hello world
      </Button>
    </>
  );
};
