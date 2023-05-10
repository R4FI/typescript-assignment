function str(param: unknown): void {
    if (typeof param === "string") {
      console.log(param);
    } else {
      console.error("error:not a string");
    }
  }


  str("Hello,Jhon"); // output "Hello,Jhon"
  str(42); // error:not a string