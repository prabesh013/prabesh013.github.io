import { annotate, annotationGroup } from "https://unpkg.com/rough-notation?module";

const brand = annotate(document.querySelector(".navbar-brand"), { type: "box" });
const name = annotate(document.querySelector(".name"), { type: "highlight", color: "#FDE047" });
const cs = annotate(document.querySelector(".cs"), { type: "box", color: "pink" });
const ce = annotate(document.querySelector(".ce"), { type: "highlight", color: "pink" });
const location = annotate(document.querySelector(".location"), {
  type: "highlight",
  color: "pink",
});
const kec = annotate(document.querySelector(".kec"), {
  type: "highlight",
  color: "pink",
});

const edu = annotate(document.querySelector("#edu"), {
  type: "underline",
  color: "green",
});
const exe = annotate(document.querySelector("#exe"), {
  type: "underline",
  color: "green",
});

const st = annotate(document.querySelector(".st"), {
  type: "highlight",
  color: "#BFDBFE",
});

const ag = annotationGroup([brand, name, cs, st, ce, location, kec, edu, exe]);
ag.show();
