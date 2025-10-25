"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import DropzoneField from "@/registry/wandry-ui/dropzone-field";

export type DropzoneFieldDemoProps = {};

const DropzoneFieldDemo: React.FC<DropzoneFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <DropzoneField
        name="files"
        label="Upload Files"
        description="Drag and drop files here or click to select files."
        accept={{ "image/*": [], "application/pdf": [] }}
        maxFiles={5}
        maxSize={5 * 1024 * 1024} // 5 MB
      />
    </Form>
  );
};

export default DropzoneFieldDemo;
