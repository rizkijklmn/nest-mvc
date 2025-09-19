// src/jsx.engine.ts

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Response } from "express";

export interface JsxLayoutProps {
  children: React.ReactNode;
}

export type JsxLayout = (props: JsxLayoutProps) => React.ReactElement;

export function withJsxEngine(app: NestExpressApplication, defaultLayout?: JsxLayout) {
  const httpAdapter = app.getHttpAdapter();

  (httpAdapter as any).render = (
    res: Response,
    view: [React.FC<any>, { layout?: JsxLayout }],
    options: Record<string, any> = {}
  ) => {
    const [Component, controllerOpts] = view;
    const layout = controllerOpts.layout ?? defaultLayout;

    const content = React.createElement(Component, options);
    const html = layout
      ? React.createElement(layout, { children: content }) // ✅ fix
      : content;

    const markup = renderToStaticMarkup(html);
    res.setHeader("Content-Type", "text/html");
    res.send("<!DOCTYPE html>" + markup);
  };
}

