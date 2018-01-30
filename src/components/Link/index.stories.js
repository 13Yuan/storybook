import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Link from "./";

storiesOf("Link", module)
  .add("with text", () => (
    <Link href={"www.baidu.com"} name={"123"} />
  ));
