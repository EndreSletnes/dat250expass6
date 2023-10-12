export class Todo {
  id: bigint | null;
  summary: string;
  description: string;

  constructor(id: bigint | null, summary: string, description: string) {
    this.id = id;
    this.summary = summary;
    this.description = description;
  }
}
