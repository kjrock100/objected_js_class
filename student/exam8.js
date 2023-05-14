
const TextFile = (function () {
    function TextFile(name) {
        if (!name) {
            this.name = `noname${TextFile.num++}.txt`;
            return;
        }
      this.name = `${name}.txt`;
    }
    TextFile.num = 0;
    TextFile.prototype.getName = function () { return this.name; }
    return TextFile;
  })();

const t1 = new TextFile("bible");
console.log(t1.getName());

const t2 = new TextFile();
console.log(t2.getName());

const t3 = new TextFile();
console.log(t3.getName());
