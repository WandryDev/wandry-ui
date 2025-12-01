"use client";
import * as React from "react";
import {Form} from "@wandry/inertia-form";

import WebhookComponent from "@/registry/wandry-ui/webhook-component";

export type WebhookComponentDemoProps = {}

const WebhookComponentDemo: React.FC<WebhookComponentDemoProps> = (props) => {
  return <Form action="#">
    ...
  </Form>;
}

export default WebhookComponentDemo;
