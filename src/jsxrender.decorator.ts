import * as React from "react";
import "reflect-metadata";
import { RENDER_METADATA } from "@nestjs/common/constants";
import { JsxLayout } from "./jsx.engine";

export interface RenderOptions<T = any> {
  layout?: JsxLayout;
  bootstrapScripts?: string[];
  view?: (props: T) => React.JSX.Element; // komponen React
}

export function JsxRender<T = any>(options: RenderOptions<T>): MethodDecorator {
  return (
    target: object,
    key: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ) => {
    const { view, ...restOptions } = options;

    // simpan metadata untuk Nest
    Reflect.defineMetadata(
      RENDER_METADATA,
      [view, restOptions],
      descriptor.value,
    );

    return descriptor;
  };
}
