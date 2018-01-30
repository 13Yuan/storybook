import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./";

// MarkDown addons
import { WithNotes } from "@storybook/addon-notes";

// action addons
import { action, decorateAction } from "@storybook/addon-actions";
const firstArgAction = decorateAction([args => args.slice(0, 1)]);

// linkto addons
import { linkTo } from "@storybook/addon-links";

// knob addons
import {
  withKnobs,
  text,
  boolean,
  number,
  array
} from "@storybook/addon-knobs/react";
const stories = storiesOf("Storybook Knobs", module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// info addons
import { withInfo } from "@storybook/addon-info";

storiesOf("Buttons/Text", module)
  // add decorator for current story
  .addDecorator(story => <div style={{ textAlign: "center" }}>{story()}</div>)
  .add("With Text", () => (
    <Button onClick={firstArgAction("button-click")} name={"123"}>
      Hello Button
    </Button>
  ));

storiesOf("Buttons/Emoji", module).add("with some emoji", () => (
  <WithNotes
    notes={
      "Here we use some emoji as the Button text. Doesn&apos;t it look nice?"
    }
  >
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  </WithNotes>
));

storiesOf("Buttons/LinkTo", module).add("link to button", () => (
  <button onClick={linkTo("Buttons/Emoji", "Emoji")}>Go to "Emoji"</button>
));

stories.add("With Text", () => (
  <Button
    onClick={firstArgAction("button-click")}
    disabled={boolean("disabeld", false)}
    name={text("name", "Hello Button")}
  >
    Hello Button
  </Button>
));

import Description from "../description";

stories.add(
  "info addons",
  withInfo({
    Description
  })(() => <Button>Hello Button</Button>)
);
