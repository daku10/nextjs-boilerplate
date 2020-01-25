import * as React from "react";

type Props = {
  text: string;
};

const Text = ({ text }: Props) => <span>{text}</span>;

export { Text };
