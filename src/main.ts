import "./style.css";
import { Display } from "./display";

const app = document.getElementById("app");
if (!app) throw new Error("No element with id 'app' found");

const world = new Display(app);
