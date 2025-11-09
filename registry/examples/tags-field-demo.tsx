"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import TagsField from "@/registry/wandry-ui/tags-field";

export type TagsFieldDemoProps = {};

const TagsFieldDemo: React.FC<TagsFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <TagsField
        name="tags"
        label="Tags"
        placeholder="Add a tag"
        description="Enter tags and press Enter"
      />
    </Form>
  );
};

export default TagsFieldDemo;
