function main() {
   const seletor = document.querySelectorAll('element[id="test"]');

   const nameWit = "textContent";

   for (let index = 0; index < seletor.length; index++) {
      const element = seletor[index];

      if (element?.textContent?.includes(nameWit)) {
         element.dispatchEvent(
            new MouseEvent("dblclick", {
               bubbles: true,
               cancelable: true,
            })
         );
         return "Found";
      }
   }
   return "Not Found";
}
main();
