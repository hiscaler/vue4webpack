export default {
  data() {
    return {
      author: "Hiscaler",
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}