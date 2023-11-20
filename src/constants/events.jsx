const now = new Date();

export default [
  {
    id: 0,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 1,
    title: "Point in Time Event",
    start: now,
    end: now,
  },
  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2023, 9, 17, 14, 0, 0),
    end: new Date(2023, 9, 17, 15, 0, 0),
  },
];
