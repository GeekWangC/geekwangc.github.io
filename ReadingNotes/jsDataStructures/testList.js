var names = new List();
names.append("geekwangc");
names.append("geek");
names.append("wangc");
console.log(names.toString());
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.remove("geek");
console.log(names.toString());