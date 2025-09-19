// src/app.controller.tsx

import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { JsxRender } from "./jsxrender.decorator";
import Home from "./views/Home";
import AdminLayout from "./views/AdminLayout";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/home")
  @JsxRender({ view: Home }) // kasih tau engine, pakai komponen Home
  getHome() {
    return { name: "Riski" }; // ini props untuk Home
  }

  @Get("/admin")
  @JsxRender({ view: Home, layout: AdminLayout })
  getAdmin() {
    return { name: "Ini Admin Page" }
  }
}

