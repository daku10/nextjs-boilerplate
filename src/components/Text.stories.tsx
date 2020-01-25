import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "./Text";

storiesOf("Text", module).add("text", () => {
  return <Text text="Hello storybook" />;
});
