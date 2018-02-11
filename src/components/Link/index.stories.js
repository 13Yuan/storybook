import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "./";
import { withReadme, withDocs } from "storybook-readme";
import LinkReadme from "./README.md";
import styles from "@sambego/storybook-styles";

storiesOf("Link", module)
  .addDecorator(
    styles({
      fontFamily: "Helvetica, Arial, sans-serif",
      background: "#e1ecfa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "500px"
    })
  )
  .add("link", withReadme(LinkReadme, () => <Link page="abc">123</Link>));
