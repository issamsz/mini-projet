export class Todo {
  int: number;
  name: string;
  content: string;
  phone: number;

  constructor(int: number = 0, name: string = '', content: string = '', phone: number = 0 ) {
    this.int = int;
    this.name = name;
    this.content = content;
    this.phone = phone;
  }
}
