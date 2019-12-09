export default class Quote {
  constructor(data) {
    this.author = data.author;
    this.body = data.body;
  }
  get Template() {
    return `
    <div>"${this.body}"</div>
    <div>-${this.author}</div>
    
    `;
  }
}
