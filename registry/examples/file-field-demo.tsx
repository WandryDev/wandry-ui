"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import FileField from "@/registry/wandry-ui/file-field";

export type FileFieldDemoProps = {};

const FileFieldDemo: React.FC<FileFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <FileField
        name="documents"
        label="Upload Documents"
        description="Please upload your documents in PDF or DOCX format."
        accept=".pdf,.docx"
      />
    </Form>
  );
};

export default FileFieldDemo;
